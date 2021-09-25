import ContentMenuItem from '../layout/items/content/ContentMenuItem.js'
import UnitSelector from '../selector/UnitSelector.js'
import World from '../world/World.js'

export default class UIHelper {

    /**
     * @param {Mouse} mouse
     * @param {Menu} menu
     * @return {*}
     */
    static findUIObjectByMousePosition(mouse, menu) {
        const {path} = mouse
        let bindObject
        const menuRightClickItem = menu.getUIRenderer().getItemsAt(path)
            .reverse()
            .find(menuItem => menuItem.element.isRightClick() && menuItem.element.isEnabled())
        if (menuRightClickItem) {
            bindObject = menuRightClickItem.element.getDataBind()
        }
        if (!bindObject && this.isCanvas(path)) {
            bindObject = this.UI.CANVAS
        }
        return bindObject
    }

    /**
     * @param {Mouse} mouse
     * @param {Menu} menu
     * @return {*}
     */
    static findSceneObject(mouse, menu) {
        const {path} = mouse
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        const menuRightClickItem = menu.getUIRenderer().getItemsAt(path)
        if (!menuRightClickItem.length) {
            if (!script) {
                return UnitSelector.get().getFirstSelected(World.get())
            } else {
                return this.UI.SCRIPT
            }
        }
        return null
    }

    /**
     * @param {EventTarget[]} path
     * @param {Menu} menu
     * @return {MenuItemUI}
     */
    static getStartDragMenuItemByPath(path, menu) {
        return menu.getUIRenderer().getItemsAt(path)
            .reverse()
            .find(menuItem => menuItem.element.isDraggable() && menuItem.element.isEnabled())
    }

    /**
     * @param {EventTarget[]} path
     * @param {Menu} menu
     * @return {MenuItemUI}
     */
    static getEndDragMenuItemByPath(path, menu) {
        if (this.isCanvas(path)) {
            return menu.items.find(item => item.element instanceof ContentMenuItem)
        }
        return menu.getUIRenderer().getItemsAt(path)
            .reverse()
            .find(menuItem => !!menuItem.element.getDragStateCode() && menuItem.element.isEnabled())
    }

    /**
     * @param {EventTarget[]} path
     * @return {boolean}
     */
    static isCanvas(path) {
        return path && path[0].constructor === HTMLCanvasElement
    }

    static UI = {
        CANVAS: 'ui-canvas',
        SCRIPT: 'ui-script'
    }

}