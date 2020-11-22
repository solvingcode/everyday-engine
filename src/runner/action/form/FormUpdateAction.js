define(function (require) {

    const Action = require('../Action.js')
    const Menu = require('../../../layout/Menu.js')
    const StateManager = require('../../../state/StateManager.js')

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
            return false
        }

        /**
         * @override
         */
        static stop() {
            const {event, item} = StateManager.get().getStopData(this.STATE)
            const menu = Menu.get()
            const menuItemUI = menu.findItemByElement(item)
            const uiRenderer = menu.getUIRenderer()
            if(menuItemUI){
                const formElement = uiRenderer.getType(menuItemUI).getFormElement(menuItemUI, uiRenderer)
                event(formElement.value)
            }else{
                console.warn(`ElementUI for item ${item.id} cannot be found!`)
            }
            return true
        }

    }

    return FormUpdateAction

})