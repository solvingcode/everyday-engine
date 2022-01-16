import MenuItemUI from '../renderer/ui/MenuItemUI.js'
import StateManager from '../state/StateManager.js'
import ContentCanvasMenuItem from './items/content/ContentCanvasMenuItem.js'
import ErrorPopupMenuItem from './items/alert/error/ErrorPopupMenuItem.js'
import ConfirmPopupMenuItem from './items/alert/confirm/ConfirmPopupMenuItem.js'
import OptionsPopupMenuItem from './items/option/OptionsPopupMenuItem.js'
import ContentPopupMenuItem from './items/content/ContentPopupMenuItem.js'
import SelectorMenuItem from './items/edit/SelectorMenuItem.js'
import MoveMenuItem from './items/edit/MoveMenuItem.js'
import ScaleMenuItem from './items/edit/ScaleMenuItem.js'
import RotateMenuItem from './items/edit/RotateMenuItem.js'
import EditTileMenuItem from './items/edit/EditTileMenuItem.js'
import DeleteTileMenuItem from './items/edit/DeleteTileMenuItem.js'
import EditAreaTileMenuItem from './items/edit/EditAreaTileMenuItem.js'
import TopMenuItem from './items/topmenu/TopMenuItem.js'
import SimulateStartMenuItem from './items/action/SimulateStartMenuItem.js'
import SimulateStopMenuItem from './items/action/SimulateStopMenuItem.js'
import TabListMenuItem from './items/tab/TabListMenuItem.js'
import ContentMenuItem from './items/content/ContentMenuItem.js'
import EditAnimationWrapperMenuItem from './items/content/animation/EditAnimationWrapperMenuItem.js'
import AssetsMenuItem from './items/assets/AssetsMenuItem.js'
import AppMenuItem from './items/app/AppMenuItem.js'
import RightMenuItem from './items/section/RightMenuItem.js'

/**
 * Define all menu items
 * @property {MenuItem[]} types
 * @property {MenuItemUI[]} items
 */
class Menu {
    constructor() {
        this.types = [
            //Window
            new ErrorPopupMenuItem(),
            new ConfirmPopupMenuItem(),
            new OptionsPopupMenuItem(),
            new ContentPopupMenuItem(),

            //LEFT
            new SelectorMenuItem(),
            new MoveMenuItem(),
            new ScaleMenuItem(),
            new RotateMenuItem(),
            new EditTileMenuItem(),
            new DeleteTileMenuItem(),
            new EditAreaTileMenuItem(),

            //TOP MENU
            new TopMenuItem(),

            //TOP
            new SimulateStartMenuItem(),
            new SimulateStopMenuItem(),

            //TOP TABS
            new TabListMenuItem(),

            //Body
            new ContentMenuItem(),
            new EditAnimationWrapperMenuItem(),

            //Canvas
            new ContentCanvasMenuItem(),

            //RIGHT
            new RightMenuItem(),

            //BOTTOM
            new AssetsMenuItem(),

            //FOOTER
            new AppMenuItem()
        ]
        this.items = []
        this.setup()
    }

    /**
     * Setup the items list which calculate the position of each item
     * in the screen.
     */
    setup() {
        this.items = []
        for (const iType in this.types) {
            const type = this.types[iType]
            type.menu = this
            this.prepare(type)
        }
    }

    /**
     * Prepare the Menu and sub menu for rendering
     * @param {MenuItem} item
     * @param {Object} parent
     */
    prepare(item, parent = null) {
        if (item.isStartDragging()) {
            if (item.props.cursor !== 'start-drag') {
                item.props.cursor = 'start-drag'
                item.setUpdated(true)
            }
        } else if (item.isEndDragging()) {
            if (item.props.cursor !== 'end-drag') {
                item.props.cursor = 'end-drag'
                item.setUpdated(true)
            }
        } else if (item.props.cursor !== '') {
            item.props.cursor = ''
            item.setUpdated(true)
        }
        if (item.isValid()) {
            const existItem = this.items.find(pItem => pItem.element === item)
            const index = item.index
            const resultItem = existItem || new MenuItemUI(item, index, parent)
            !existItem && this.items.push(resultItem)
            if (item.items) {
                item.items.forEach(pItem => this.prepare(pItem, resultItem))
            }
        }
    }

    /**
     * Find menu item by zone
     * @param {String} zone
     * @return {MenuItemUI[]}
     */
    findItemsByZone(zone) {
        return this.items.filter(pItem => pItem.element.zone === zone)
    }

    /**
     * Find menu item by index and zone
     * @param {Number} index
     * @return {MenuItemUI}
     */
    findItemByIndex(index) {
        return this.items.find(pItem => pItem.index === index)
    }

    /**
     * @param {MenuItem} element
     */
    findItemByElement(element) {
        return this.items.find(pItem => pItem.element === element)
    }

    /**
     * Clean all menu items that is not valid anymore.
     */
    clean() {
        this.items = this.items.filter(item => item.element.isValid())
    }

    /**
     * @param {MenuItemUI[]} menuItemsToRun
     */
    selectItems(menuItemsToRun) {
        const stateManager = StateManager.get()
        const menuItemsToStop = this.items
            .filter(item => item.element.isSelected())
        menuItemsToStop.forEach(menuItem => {
            if (!menuItemsToRun.includes(menuItem)) {
                const stateCodeToStop = menuItemsToRun[0].element.stateCode
                if (stateCodeToStop && !stateManager.isConfirmState(stateCodeToStop)) {
                    menuItem.element.stop(stateCodeToStop)
                }
            }
        })
        const menuItemsToSkip = menuItemsToRun.filter(menuItem => {
            return menuItem.element.skipStateCodes
                .find(skipStateCode => menuItemsToRun.find(menuItemToRun => menuItemToRun.element.stateCode === skipStateCode))
        })
        menuItemsToRun.filter(menuItem => !menuItemsToStop.includes(menuItem) &&
            !menuItemsToSkip.includes(menuItem))
            .forEach(menuItem => {
                menuItem.element.run()
                this.activateSection(menuItem)
            })
    }

    /**
     * @param {MenuItemUI} startMenuItem
     * @param {MenuItemUI} endMenuItem
     */
    dragItems(startMenuItem, endMenuItem) {
        endMenuItem.element.drag(startMenuItem.element.getDataBind())
    }

    /**
     * @param {MenuItemUI} menuItem
     */
    dblClickItem(menuItem) {
        menuItem.element.dblClickState()
    }

    resetDragItems() {
        this.getDraggingItems()
            .forEach(item => {
                item.element.setStartDragging(false)
                item.element.setEndDragging(false)
            })
    }

    /**
     * @return {MenuItemUI[]}
     */
    getDraggingItems() {
        return this.items.filter(item => item.element.isStartDragging() || item.element.isEndDragging())
    }

    stopActionMenuItem() {
        for (const iItem in this.items) {
            const item = this.items[iItem]
            const {element} = item
            if (element.isSelected() && element.isAction()) {
                element.stop()
            }
        }
    }

    /**
     * @return {MenuItemUI}
     */
    getSelected() {
        return this.items.find((item) => item.element.isSelected())
    }

    update() {
        this.types.forEach(type => type.update())
        this.setup()
    }

    /**
     * Get Previous menu item
     * @param {MenuItem} type
     */
    getPrevItem(type) {
        const index = this.types.findIndex(pType => pType === type)
        const element = this.types[index - 1]
        return this.items.find(pItem => pItem.element === element)
    }

    /**
     * Set the UI Renderer (used to locate items in the layout)
     * @param {UIRenderer} uiRenderer
     */
    setUIRenderer(uiRenderer) {
        this.uiRenderer = uiRenderer
    }

    /**
     * @param {MenuItemUI} menuItemUI
     * @return {MenuItemUI}
     */
    findSection(menuItemUI) {
        if (menuItemUI) {
            if (menuItemUI.element.isSection()) {
                return menuItemUI
            } else {
                return this.findSection(menuItemUI.parent)
            }
        }
    }

    /**
     * @return {MenuItemUI}
     */
    getActiveSection() {
        return this.items.find(menuItemUI => menuItemUI.element.isSectionActive())
    }

    /**
     * @return {MenuItemUI[]}
     */
    getSections() {
        return this.items.filter(menuItemUI => menuItemUI.element.isSection())
    }

    /**
     * @param {MenuItemUI} menuItemUI
     */
    activateSection(menuItemUI) {
        this.getSections().forEach(pSection => pSection.element.setSectionActive(false))
        const section = this.findSection(menuItemUI)
        if (section) {
            section.element.setSectionActive(true)
        }
    }

    /**
     * @return {UIRenderer}
     */
    getUIRenderer() {
        return this.uiRenderer
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}

Menu.instance = null

export default Menu