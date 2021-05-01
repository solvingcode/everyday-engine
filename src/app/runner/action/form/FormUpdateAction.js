import Action from '../Action.js'
import Menu from '../../../layout/Menu.js'
import StateManager from '../../../state/StateManager.js'
import Layout from '../../../layout/Layout.js'

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
        const {item} = StateManager.get().getNextProgressData(this.STATE)
        return this.isInstantField(item.field)
    }

    /**
     * @override
     */
    static stop() {
        const {event, item} = StateManager.get().getNextStopData(this.STATE)
        const menu = Menu.get()
        const menuItemUI = menu.findItemByElement(item)
        const uiRenderer = menu.getUIRenderer()
        if (menuItemUI) {
            const formElement = uiRenderer.getType(menuItemUI).getFormElement(menuItemUI, uiRenderer)
            if(item.parent.preUpdate(formElement.value)){
                event(formElement.value)
                item.parent.postUpdate(formElement.value)
            }
        } else {
            throw new TypeError(`ElementUI for item ${item.id} cannot be found!`)
        }
        return true
    }

    /**
     * Check if the update event must be triggered instantly
     * when is clicked
     * @param {string} field
     * @return {boolean}
     */
    static isInstantField(field) {
        return ![Layout.form.TEXT, Layout.form.TEXTAREA, Layout.form.COLOR, Layout.form.FILE].includes(field)
    }

}

export default FormUpdateAction