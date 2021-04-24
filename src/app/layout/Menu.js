import SelectorMenuItem from './items/edit/SelectorMenuItem.js'
import CameraMenuItem from './items/edit/CameraMenuItem.js'
import ScaleMenuItem from './items/edit/ScaleMenuItem.js'
import NewProjectMenuItem from './items/project/NewProjectMenuItem.js'
import SaveProjectMenuItem from './items/project/SaveProjectMenuItem.js'
import LoadProjectMenuItem from './items/project/LoadProjectMenuItem.js'
import ExportProjectMenuItem from './items/project/ExportProjectMenuItem.js'
import SimulateStartMenuItem from './items/action/SimulateStartMenuItem.js'
import SimulateStopMenuItem from './items/action/SimulateStopMenuItem.js'
import DeleteMenuItem from './items/action/DeleteMenuItem.js'
import DuplicateMenuItem from './items/action/DuplicateMenuItem.js'
import UndoMenuItem from './items/action/UndoMenuItem.js'
import MoveUpMenuItem from './items/action/MoveUpMenuItem.js'
import MoveDownMenuItem from './items/action/MoveDownMenuItem.js'
import MenuItemUI from '../renderer/ui/MenuItemUI.js'
import AppMenuItem from './items/app/AppMenuItem.js'
import SceneMenuItem from './items/scene/SceneMenuItem.js'
import WorldMenuItem from './items/world/WorldMenuItem.js'
import RotateMenuItem from './items/edit/RotateMenuItem.js'
import MoveMenuItem from './items/edit/MoveMenuItem.js'
import AssetsMenuItem from './items/assets/AssetsMenuItem.js'
import UnitMenuItem from './items/unit/UnitMenuItem.js'
import TabListMenuItem from './items/tab/TabListMenuItem.js'
import ContentMenuItem from './items/content/ContentMenuItem.js'
import AssetMenuItem from './items/assets/AssetMenuItem.js'
import AddScriptMenuItem from './items/assets/AddScriptMenuItem.js'
import ScriptMenuItem from './items/script/ScriptMenuItem.js'

/**
 * Define all menu items
 * @property {MenuItem[]} types
 * @property {MenuItemUI[]} items
 */
class Menu {
    constructor() {
        this.types = [
            //LEFT
            new SelectorMenuItem(),
            new MoveMenuItem(),
            new ScaleMenuItem(),
            new RotateMenuItem(),

            //TOP
            new NewProjectMenuItem(),
            new LoadProjectMenuItem(),
            new SaveProjectMenuItem(),
            new ExportProjectMenuItem(),
            new DeleteMenuItem(),
            new DuplicateMenuItem(),
            new UndoMenuItem(),
            new MoveUpMenuItem(),
            new MoveDownMenuItem(),
            new CameraMenuItem(),
            new AddScriptMenuItem(),
            new SimulateStartMenuItem(),
            new SimulateStopMenuItem(),

            //TOP TABS
            new TabListMenuItem(),

            // Body
            new ContentMenuItem(),

            //RIGHT
            new UnitMenuItem(),
            new WorldMenuItem(),
            new AssetMenuItem(),
            new SceneMenuItem(),
            new ScriptMenuItem(),

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
        if (item.isValid()) {
            const itemsZone = this.items.filter(pItem => pItem.element.zone === item.zone)
            const existItem = this.items.find(pItem => pItem.element === item)
            const lastIndex = itemsZone.length
            if (existItem) {
                existItem.index = itemsZone.findIndex(pItem => pItem.element === item)
            }
            const resultItem = existItem || new MenuItemUI(item, lastIndex, parent)
            !existItem && this.items.push(resultItem)
            if (item.items) {
                item.items.forEach(pItem => this.prepare(pItem, resultItem))
            }
        }
    }

    /**
     * Find menu item by index and zone
     * @param {Number} index (must start from 0)
     * @param {String} zone
     * @return {MenuItemUI}
     */
    findItemByZone(index, zone) {
        const itemsZone = this.items.filter(pItem => pItem.element.zone === zone)
        return itemsZone[index]
    }

    /**
     * @param {Number} index (must start from 0)
     * @param {String} zone
     * @param {Number} parentIndex (must start from 0)
     */
    findItemByZoneAndParent(index, zone, parentIndex){
        const itemsZone = this.items.filter(pItem =>
            pItem.element.zone === zone
            && ((!parentIndex && !pItem.parent) || (pItem.parent && pItem.parent.index === parentIndex))
        )
        return itemsZone[index]
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
     * Select item in the menu.
     * @param {MenuItemUI} menuItem
     */
    selectItem(menuItem) {
        for (const iItem in this.items) {
            const item = this.items[iItem]
            const {element} = item
            if (element.isSelected()) {
                menuItem !== item && element.stop(menuItem.element.stateCode)
            }
            if (element === menuItem.element) {
                element.run()
            }
        }
    }

    stopActionMenuItem(){
        for (const iItem in this.items) {
            const item = this.items[iItem]
            const {element} = item
            if(element.isSelected() && element.isAction()){
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
        this.types.forEach(type => type.isValid() && type.update())
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