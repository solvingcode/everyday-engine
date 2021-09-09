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
        this.handleLeftClick(window)
        this.handleRightClick(window)
    }

    /**
     * @param {Window} window
     */
    handleLeftClick(window) {
        const mouse = window.mouse
        if (mouse.isButtonPressed(MouseButton.LEFT) ||
            mouse.isButtonClicked(MouseButton.LEFT)) {
            const {path, pathEnd} = mouse
            let selectItem = true
            if (mouse.isMouseDrag()) {
                const menuDragStartItem = this.menu.getUIRenderer().getItemsAt(path)
                    .reverse()
                    .find(menuItem => menuItem.element.isDraggable() && menuItem.element.isEnabled())
                if (menuDragStartItem) {
                    const menuDragEndItem = this.menu.getUIRenderer().getItemsAt(pathEnd)
                        .reverse()
                        .find(menuItem => !!menuItem.element.getDragStateCode() && menuItem.element.isEnabled())
                    if (menuDragEndItem && menuDragStartItem !== menuDragEndItem) {
                        this.menu.dragItems(menuDragStartItem, menuDragEndItem)
                        selectItem = false
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
        if(!menuRightClickItem.length){
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