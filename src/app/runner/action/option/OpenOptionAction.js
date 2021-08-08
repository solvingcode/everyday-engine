import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import OptionsMenuManager from '../../../manager/OptionsMenuManager.js'
import Window from '../../../core/Window.js'
import Size from '../../../pobject/Size.js'
import {SCENE_WIDTH} from '../../../core/Constant.js'
import Menu from '../../../layout/Menu.js'

export default class OpenOptionAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_OPEN_OPTION'

    /**
     * @override
     */
    static run() {
        const optionsMenuManager = OptionsMenuManager.get()
        if (!optionsMenuManager.getMenu()) {
            const size = new Size({width: 150, height: 0})
            const mouse = Window.get().mouse
            const uiRenderer = Menu.get().getUIRenderer()
            const item = uiRenderer.getItemAt(mouse)
            let itemPosition = uiRenderer.getPosition(item)

            if (itemPosition.x + size.width > SCENE_WIDTH) {
                itemPosition.x = itemPosition.x - size.width
            }

            const {optionActionsMenuItem, object} = StateManager.get().getNextProgressData(this.STATE)
            optionsMenuManager.setMenu(new optionActionsMenuItem(object, itemPosition, size))
        }
        return false
    }

    /**
     * @override
     */
    static stop(){
        OptionsMenuManager.get().clear()
        return true
    }

}