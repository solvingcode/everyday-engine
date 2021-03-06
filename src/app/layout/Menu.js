import CircleMenuItem from './items/edit/CircleMenuItem.js'
import RectMenuItem from './items/edit/RectMenuItem.js'
import JointMenuItem from './items/edit/JointMenuItem.js'
import AttachPointMenuItem from './items/edit/AttachPointMenuItem.js'
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
import AiGeneticMenuItem from './items/genetic/AiGeneticMenuItem.js'
import EntityMenuItem from './items/entity/EntityMenuItem.js'
import StyleMenuItem from './items/style/StyleMenuItem.js'
import ConditionMenuItem from './items/condition/ConditionMenuItem.js'
import AppMenuItem from './items/app/AppMenuItem.js'
import TerrainMenuItem from './items/terrain/TerrainMenuItem.js'
import CameraSceneMenuItem from './items/scene/CameraSceneMenuItem.js'
import TextureMenuItem from './items/texture/TextureMenuItem.js'
import PhysicsMenuItem from './items/physics/PhysicsMenuItem.js'
import WorldMenuItem from './items/world/WorldMenuItem.js'
import RotateMenuItem from './items/edit/RotateMenuItem.js'
import LayerMenuItem from './items/entity/LayerMenuItem.js'
import MoveMenuItem from './items/edit/MoveMenuItem.js'

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
            new CircleMenuItem(),
            new RectMenuItem(),
            new JointMenuItem(),
            new AttachPointMenuItem(),
            new CameraMenuItem(),
            new SimulateStartMenuItem(),
            new SimulateStopMenuItem(),

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

            //RIGHT
            new LayerMenuItem(),
            new StyleMenuItem(),
            new EntityMenuItem(),
            new WorldMenuItem(),
            new PhysicsMenuItem(),
            new ConditionMenuItem(),
            new AiGeneticMenuItem(),
            new TerrainMenuItem(),
            new TextureMenuItem(),
            new CameraSceneMenuItem(),

            //BOTTOM
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
     */
    findItemByZone(index, zone) {
        const itemsZone = this.items.filter(pItem => pItem.element.zone === zone)
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
            if (menuItem && element.isSelected()) {
                menuItem !== item && element.stop(menuItem.element.stateCode)
            }
            if (menuItem && element === menuItem.element) {
                element.run()
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