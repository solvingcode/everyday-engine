import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import OptionsMenuManager from '../../../manager/OptionsMenuManager.js'
import Window from '../../../core/Window.js'
import Size from '../../../pobject/Size.js'
import {SCENE_WIDTH} from '../../../core/Constant.js'
import Menu from '../../../layout/Menu.js'
import ObjectHelper from '../../../utils/ObjectHelper.js'
import OptionActionsButtonMenuItem from '../../../layout/items/option/OptionActionsButtonMenuItem.js'

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
        const menu = Menu.get()
        const mouse = Window.get().mouse
        const uiRenderer = menu.getUIRenderer()
        const triggerItem = uiRenderer.getItemAt(mouse)
        const {optionActionsMenuItem, object, absolute} = StateManager.get().getNextProgressData(this.STATE)
        let triggerItemPosition
        if (absolute) {
            triggerItemPosition = mouse.position
        } else if (triggerItem) {
            const triggerItemSize = uiRenderer.getSize(triggerItem)
            triggerItemPosition = uiRenderer.getPosition(triggerItem)
            if (triggerItem.element.hasParent) {
                triggerItemPosition.x += triggerItemSize.width
                triggerItemPosition.y -= triggerItemSize.height
            }
            triggerItemPosition.y += triggerItemSize.height
        }
        if (triggerItemPosition) {
            const activeOptionsMenu = optionsMenuManager.getMenu(optionActionsMenuItem)
            if (!activeOptionsMenu) {
                const itemSize = new Size({width: 0, height: 0})
                optionsMenuManager.setMenu(new optionActionsMenuItem(object, triggerItemPosition, itemSize))
            } else {
                const optionsItem = menu.findItemByElement(activeOptionsMenu)
                const optionsItemSize = uiRenderer.getSize(optionsItem)
                const optionsItemPosition = uiRenderer.getPosition(optionsItem)
                const correctOptionsItemPosition = uiRenderer.getPosition(optionsItem)
                if (correctOptionsItemPosition.x + optionsItemSize.width > SCENE_WIDTH) {
                    correctOptionsItemPosition.x -= optionsItemSize.width
                }
                if (!ObjectHelper.isEqual(optionsItemPosition, correctOptionsItemPosition)) {
                    optionsMenuManager.setMenu(new optionActionsMenuItem(object, correctOptionsItemPosition, new Size(0)))
                }
            }
        }
        return false
    }

    /**
     * @override
     */
    static stop() {
        const mouse = Window.get().mouse
        const menu = Menu.get()
        const uiRenderer = menu.getUIRenderer()
        const triggerItem = uiRenderer.getItemAt(mouse)
        if (!triggerItem || !(triggerItem.element instanceof OptionActionsButtonMenuItem)) {
            OptionsMenuManager.get().clear()
        }
        return true
    }

}