import Runner from '../Runner.js'
import Menu from '../../layout/Menu.js'
import {MouseButton} from '../../core/Mouse.js'
import Window from '../../core/Window.js'
import OptionsMenuItem from '../../layout/items/option/OptionsMenuItem.js'
import StateManager from '../../state/StateManager.js'
import OpenOptionAction from '../action/option/OpenOptionAction.js'
import Unit from '../../unit/Unit.js'
import World from '../../world/World.js'
import UIHelper from '../../utils/UIHelper.js'
import OpenPopupAction from '../action/popup/OpenPopupAction.js'

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
            window.mouse.isButtonDoubleClicked(MouseButton.LEFT) ||
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
     * @param {Window} window
     */
    handleLeftClick(window) {
        const mouse = window.mouse
        if (mouse.isButtonDoubleClicked(MouseButton.LEFT)) {
            const {path} = mouse
            const menuItem = this.menu.getUIRenderer().getItemsAt(path)
                .find(pMenuItem => pMenuItem.element.getDbClickStateCode() && pMenuItem.element.isEnabled())
            if (menuItem) {
                this.menu.dblClickItem(menuItem)
            }
        } else if (mouse.isButtonPressed(MouseButton.LEFT) ||
            mouse.isButtonClicked(MouseButton.LEFT)) {
            const {path, pathEnd, pathCurrent} = mouse
            let selectItem = true
            if (mouse.isMouseDrag()) {
                this.menu.resetDragItems()
                const menuDragStartItem = UIHelper.getStartDragMenuItemByPath(path, this.menu)
                if (menuDragStartItem) {
                    menuDragStartItem.element.setStartDragging(true)
                    const menuDragCurrentEndItem = UIHelper.getEndDragMenuItemByPath(pathCurrent, this.menu)
                    if (menuDragCurrentEndItem) {
                        menuDragCurrentEndItem.element.setEndDragging(true)
                    }
                    const menuDragEndItem = UIHelper.getEndDragMenuItemByPath(pathEnd, this.menu)
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
            let object = this.processObject(UIHelper.findUIObjectByMousePosition(mouse, this.menu))
            if (object === UIHelper.UI.CANVAS) {
                object = UIHelper.findSceneObject(mouse, this.menu)
            }
            if (object) {
                stateManager.startState(OpenOptionAction.STATE, 1,
                    {optionActionsMenuItem: OptionsMenuItem, object, absolute: true})
            }
        } else if (mouse.isButtonClicked(MouseButton.LEFT)) {
            if (stateManager.isProgress(OpenOptionAction.STATE)) {
                stateManager.stopNextState(OpenOptionAction.STATE)
            }
            if (stateManager.isProgress(OpenPopupAction.STATE)) {
                stateManager.stopNextState(OpenPopupAction.STATE)
            }
        }
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