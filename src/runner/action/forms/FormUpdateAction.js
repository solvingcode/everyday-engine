define(function (require) {

    const Action = require('../Action.js')
    const Menu = require('../../../layout/Menu.js')
    const StateManager = require('../../../state/StateManager.js')

    class FormUpdateAction extends Action {

        /**
         * @const
         * @type {string}
         */
        static FORM_UPDATE = 'FORM_UPDATE'

        /**
         * @inheritDoc
         */
        static run() {
            return false
        }

        /**
         * @inheritDoc
         */
        static stop() {
            console.log('stop')
            const {event, item} = StateManager.get().getStopActionData(this.FORM_UPDATE)

            const menu = Menu.get()
            const menuItemUI = menu.findItemByElement(item)
            const uiRenderer = menu.getUIRenderer()
            const formElement = uiRenderer.getType(menuItemUI).getFormElement(menuItemUI, uiRenderer)

            event(formElement.value)
            return true
        }

        /**
         * @override
         */
        static shouldStart(type, stateManager) {
            return !!stateManager.getStartActionData(type)
        }

        /**
         * @override
         */
        static shouldStop(type, stateManager) {
            return !!stateManager.getStopActionData(type)
        }

    }

    return FormUpdateAction

})