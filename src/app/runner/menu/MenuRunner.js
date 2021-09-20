import Runner from '../Runner.js'
import Menu from '../../layout/Menu.js'
import {MouseButton} from '../../core/Mouse.js'
import Window from '../../core/Window.js'
import OptionsMenuItem from '../../layout/items/option/OptionsMenuItem.js'
import StateManager from '../../state/StateManager.js'
import OpenOptionAction from '../action/option/OpenOptionAction.js'
import Unit from '../../unit/Unit.js'
import World from '../../world/World.js'
import UnitSelector from '../../selector/UnitSelector.js'
import ContentMenuItem from '../../layout/items/content/ContentMenuItem.js'

/**
 * Execute actions related to menu items
 * @property {Menu} menu
 */
class MenuRunner extends Runner {

    constructor() {
        super()
        this.menu = Menu.get()
    }

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isButtonPressed(MouseButton.LEFT) ||
            window.mouse.isButtonClicked(MouseButton.LEFT) ||
            window.mouse.isButtonPressed(MouseButton.RIGHT) ||
            window.mouse.isMouseWheelMove()
    }

    /**
     * Apply action for the menu.
     * @return {Boolean}
     */
    execute() {
        const window = Window.get()
        this.menu.resetDragItems()
        this.handleLeftClick(window)
        this.handleRightClick(window)
    }

    /**
     * @param {EventTarget[]} path
     * @return {MenuItemUI}
     */
    getStartDragMenuItemByPath(path) {
        return this.menu.getUIRenderer().getItemsAt(path)
            .reverse()
            .find(menuItem => menuItem.element.isDraggable() && menuItem.element.isEnabled())
    }

    /**
     * @param {EventTarget[]} path
     * @return {MenuItemUI}
     */
    getEndDragMenuItemByPath(path) {
        if (path && path[0].constructor === HTMLCanvasElement) {
            return this.menu.items.find(item => item.element instanceof ContentMenuItem)
        }
        return this.menu.getUIRenderer().getItemsAt(path)
            .reverse()
            .find(menuItem => !!menuItem.element.getDragStateCode() && menuItem.element.isEnabled())
    }

    /**
     * @param {Window} window
     */
    handleLeftClick(window) {
        const mouse = window.mouse
        if (mouse.isButtonPressed(MouseButton.LEFT) ||
            mouse.isButtonClicked(MouseButton.LEFT)) {
            const {path, pathEnd, pathCurrent} = mouse
            let selectItem = true
            if (mouse.isMouseDrag()) {
                this.menu.resetDragItems()
                const menuDragStartItem = this.getStartDragMenuItemByPath(path)
                if (menuDragStartItem) {
                    menuDragStartItem.element.setStartDragging(true)
                    const menuDragCurrentEndItem = this.getEndDragMenuItemByPath(pathCurrent)
                    if (menuDragCurrentEndItem) {
                        menuDragCurrentEndItem.element.setEndDragging(true)
                    }
                    const menuDragEndItem = this.getEndDragMenuItemByPath(pathEnd)
                    if (menuDragEndItem && menuDragStartItem !== menuDragEndItem) {
                        this.menu.dragItems(menuDragStartItem, menuDragEndItem)
                        this.menu.resetDragItems()
                        selectItem = false
                    } else if (menuDragStartItem === menuDragEndItem) {
                        this.menu.resetDragItems()
                    }
                }
            }
            if (selectItem) {
                const menuItems = this.menu.getUIRenderer().getItemsAt(path)
                    .filter(menuItem => menuItem.element.isHandle(window) && menuItem.element.isEnabled())
                if (menuItems && menuItems.length) {
                    this.menu.selectItems(menuItems)
                }
            }
        }
    }

    /**
     * @param {Window} window
     */
    handleRightClick(window) {
        const mouse = window.mouse
        const stateManager = StateManager.get()
        if (mouse.isButtonPressed(MouseButton.RIGHT)) {
            const object = this.processObject(this.findUIObjectByMousePosition(mouse)) || this.findSceneObject(mouse)
            if (object) {
                stateManager.startState(OpenOptionAction.STATE, 1,
                    {optionActionsMenuItem: OptionsMenuItem, object, absolute: true})
            }
        } else if (mouse.isButtonClicked(MouseButton.LEFT)) {
            if (stateManager.isProgress(OpenOptionAction.STATE)) {
                stateManager.stopNextState(OpenOptionAction.STATE)
            }
        }
    }

    /**
     * @param {Mouse} mouse
     * @return {*}
     */
    findUIObjectByMousePosition(mouse) {
        const {path} = mouse
        const menuRightClickItem = this.menu.getUIRenderer().getItemsAt(path)
            .reverse()
            .find(menuItem => menuItem.element.isRightClick() && menuItem.element.isEnabled())
        if (menuRightClickItem) {
            return menuRightClickItem.element.getDataBind()
        }
    }

    /**
     * @param {Mouse} mouse
     * @return {*}
     */
    findSceneObject(mouse) {
        const {path} = mouse
        const menuRightClickItem = this.menu.getUIRenderer().getItemsAt(path)
        if (!menuRightClickItem.length) {
            return UnitSelector.get().getFirstSelected(World.get())
        }
        return null
    }

    /**
     * @param {*} object
     * @return {*}
     */
    processObject(object) {
        if (object instanceof Unit) {
            World.get().selectOneUnit(object)
        }
        return object
    }
}

MenuRunner.instance = null

export default MenuRunner