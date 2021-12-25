import Action from '../Action.js'
import Menu from '../../../layout/Menu.js'
import StateManager from '../../../state/StateManager.js'
import SystemError from '../../../exception/type/SystemError.js'
import FormHelper from '../../../utils/FormHelper.js'

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
        item.setUpdated(true)
        if (FormHelper.isAtChangeField(item.field) && FormHelper.isFieldChanged(item)) {
            this.save(event, item)
        }
        return FormHelper.isInstantField(item.field)
    }

    /**
     * @override
     */
    static stop() {
        const {event, item} = StateManager.get().getNextStopData(this.STATE)
        this.save(event, item)
        item.setIsEditing(false)
        item.setUpdated(true)
        return true
    }

    /**
     * @param {Function} event
     * @param {MenuItem}item
     */
    static save(event, item) {
        const menu = Menu.get()
        const menuItemUI = menu.findItemByElement(item)
        const uiRenderer = menu.getUIRenderer()
        if (menuItemUI) {
            const formElement = uiRenderer.getType(menuItemUI).getFormElement(menuItemUI, uiRenderer)
            if (item.parent.preUpdate(formElement.value, item)) {
                event(formElement.value)
                item.parent.postUpdate(formElement.value)
            }
        } else {
            throw new SystemError(`ElementUI for item ${item.id} cannot be found!`)
        }
    }
}

export default FormUpdateAction