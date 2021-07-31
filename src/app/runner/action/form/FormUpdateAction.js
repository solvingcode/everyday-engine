import Action from '../Action.js'
import Menu from '../../../layout/Menu.js'
import StateManager from '../../../state/StateManager.js'
import Layout from '../../../layout/Layout.js'
import SystemError from '../../../exception/type/SystemError.js'

class FormUpdateAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_FORM_UPDATE'

    /**
     * @override
     */
    static run() {
        const {event, item} = StateManager.get().getNextProgressData(this.STATE)
        item.setIsEditing(true)
        if(this.isAtChangeField(item.field) && this.isFieldChanged(item)){
            this.save(event, item)
        }
        return this.isInstantField(item.field)
    }

    /**
     * @override
     */
    static stop() {
        const {event, item} = StateManager.get().getNextStopData(this.STATE)
        this.save(event, item)
        item.setIsEditing(false)
        return true
    }

    /**
     * @param {Function} event
     * @param {MenuItem}item
     */
    static save(event, item){
        const menu = Menu.get()
        const menuItemUI = menu.findItemByElement(item)
        const uiRenderer = menu.getUIRenderer()
        if (menuItemUI) {
            const formElement = uiRenderer.getType(menuItemUI).getFormElement(menuItemUI, uiRenderer)
            if (item.parent.preUpdate(formElement.value)) {
                event(formElement.value)
                item.parent.postUpdate(formElement.value)
            }
        } else {
            throw new SystemError(`ElementUI for item ${item.id} cannot be found!`)
        }
    }

    /**
     * Check if the update event must be triggered instantly
     * when is clicked
     * @param {string} field
     * @return {boolean}
     */
    static isInstantField(field) {
        return ![
            Layout.form.TEXT,
            Layout.form.NUMBER,
            Layout.form.TEXTAREA,
            Layout.form.COLOR,
            Layout.form.FILE,
            Layout.form.WYSIWYG
        ].includes(field)
    }

    /**
     * Check if the update event must be triggered when the field's value is changed
     * @param {string} field
     * @return {boolean}
     */
    static isAtChangeField(field) {
        return [
            Layout.form.COLOR, Layout.form.NUMBER
        ].includes(field)
    }

    /**
     * @param {MenuItem} item
     * @return {boolean}
     */
    static isFieldChanged(item) {
        const menu = Menu.get()
        const menuItemUI = menu.findItemByElement(item)
        if(menuItemUI){
            const uiRenderer = menu.getUIRenderer()
            const formElement = uiRenderer.getType(menuItemUI).getFormElement(menuItemUI, uiRenderer)
            const oldValue = item.value()
            const newValue = formElement.value
            return oldValue !== newValue
        }
        return false
    }
}

export default FormUpdateAction