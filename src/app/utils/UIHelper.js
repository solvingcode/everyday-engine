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
        return menu.getUIRenderer().getItemsAt(path)
            .reverse()
            .find(menuItem => !!menuItem.element.getDragStateCode() && menuItem.element.isEnabled())
    }

    static UI = {
        CANVAS: 'ui-canvas',
        SCRIPT: 'ui-script',
        SCENE: 'ui-scene'
    }

}