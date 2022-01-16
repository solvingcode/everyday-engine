import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import Window from '../../../core/Window.js'
import Size from '../../../pobject/Size.js'
import {SCENE_WIDTH} from '../../../core/Constant.js'
import Menu from '../../../layout/Menu.js'
import ObjectHelper from '../../../utils/ObjectHelper.js'
import PopupMenuManager from '../../../manager/PopupMenuManager.js'
import ContentPopupElementMenuItem from '../../../layout/items/content/ContentPopupElementMenuItem.js'

export default class OpenPopupAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_CONTENT_POPUP'

    /**
     * @override
     */
    static run() {
        const popupMenuManager = PopupMenuManager.get()
        const menu = Menu.get()
        const mouse = Window.get().mouse
        const uiRenderer = menu.getUIRenderer()
        const {contentMenuItem, bindObject} = StateManager.get().getNextProgressData(this.STATE)
        const triggerItemPosition = mouse.position
        if (triggerItemPosition) {
            const activeOptionsMenu = popupMenuManager.getMenu()
            if (!activeOptionsMenu) {
                popupMenuManager.setMenu(
                    new ContentPopupElementMenuItem(new contentMenuItem(null, {collapsed: false}, bindObject), triggerItemPosition, new Size(0))
                )
            } else {
                const popupItem = menu.findItemByElement(activeOptionsMenu)
                const popupItemSize = uiRenderer.getSize(popupItem)
                const popupItemPosition = uiRenderer.getPosition(popupItem)
                const correctPopupItemPosition = uiRenderer.getPosition(popupItem)
                if (!popupMenuManager.isInitialized()) {
                    correctPopupItemPosition.x -= popupItemSize.width / 2
                    correctPopupItemPosition.y -= popupItemSize.height / 2
                    popupMenuManager.setInitialized(true)
                }
                if (correctPopupItemPosition.x + popupItemSize.width > SCENE_WIDTH) {
                    correctPopupItemPosition.x -= popupItemSize.width
                }
                if (!ObjectHelper.isEqual(popupItemPosition, correctPopupItemPosition)) {
                    popupMenuManager.setMenu(
                        new ContentPopupElementMenuItem(new contentMenuItem(null, {collapsed: false}, bindObject),
                            correctPopupItemPosition, new Size(0))
                    )
                }
            }
        }
        return false
    }

    /**
     * @override
     */
    static stop() {
        const {path} = Window.get().mouse
        const menu = Menu.get()
        const uiRenderer = menu.getUIRenderer()
        const menuItemContentPopup = uiRenderer.getItemsAt(path).find(menuItem => menuItem.element instanceof ContentPopupElementMenuItem)
        if (!menuItemContentPopup) {
            PopupMenuManager.get().clear()
            return true
        }
    }

}