define(function (require) {

    const Action = require('../Action.js')
    const AppState = require('../../../core/AppState.js')
    const Menu = require('../../../layout/Menu.js')

    class FormUpdateAction extends Action {

        /**
         * Update the form
         */
        static run() {
            const { event, item } = AppState.get().getData('form')

            const menu = Menu.get()
            const menuItemUI = menu.findItemByElement(item)
            const uiRenderer = menu.getUIRenderer()
            const formElement = uiRenderer.getType(menuItemUI).getFormElement(menuItemUI, uiRenderer)

            event(formElement.value)

            return true
        }

    }

    return FormUpdateAction

})