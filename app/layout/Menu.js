define(function (require) {

    import CircleMenuItem from './items/draw/CircleMenuItem.js'
    import RectMenuItem from './items/draw/RectMenuItem.js'
    import JointMenuItem from './items/draw/JointMenuItem.js'
    import AttachPointMenuItem from './items/draw/AttachPointMenuItem.js'
    import SelectorMenuItem from './items/draw/SelectorMenuItem.js'
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
    import LockMenuItem from './items/action/LockMenuItem.js'
    import UnlockMenuItem from './items/action/UnlockMenuItem.js'
    import HideMenuItem from './items/action/HideMenuItem.js'
    import ShowMenuItem from './items/action/ShowMenuItem.js'
    import RotateUpMenuItem from './items/action/RotateUpMenuItem.js'
    import MenuItemUI from '../renderer/ui/MenuItemUI.js'
    import LayerMenuItem from './items/entity/LayerMenuItem.js'
    import AiGeneticMenuItem from './items/genetic/AiGeneticMenuItem.js'
    import EntityMenuItem from './items/entity/EntityMenuItem.js'
    import StyleMenuItem from './items/style/StyleMenuItem.js'
    import ConditionMenuItem from './items/condition/ConditionMenuItem.js'
    import AppMenuItem from './items/app/AppMenuItem.js'
    import TerrainMenuItem from './items/terrain/TerrainMenuItem.js'
    import CameraMenuItem from './items/camera/CameraMenuItem.js'
    import TextureMenuItem from './items/texture/TextureMenuItem.js'

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
                new CircleMenuItem(),
                new RectMenuItem(),
                new JointMenuItem(),
                new AttachPointMenuItem(),
                new SimulateStartMenuItem(),
                new SimulateStopMenuItem(),

                //TOP
                new NewDocMenuItem(),
                new LoadProjectMenuItem(),
                new SaveProjectMenuItem(),
                new ExportProjectMenuItem(),
                new DeleteMenuItem(),
                new DuplicateMenuItem(),
                new UndoMenuItem(),
                new MoveUpMenuItem(),
                new MoveDownMenuItem(),
                new LockMenuItem(),
                new UnlockMenuItem(),
                new HideMenuItem(),
                new ShowMenuItem(),
                new RotateUpMenuItem(),

                //RIGHT
                new LayerMenuItem(),
                new StyleMenuItem(),
                new EntityMenuItem(),
                new ConditionMenuItem(),
                new AiGeneticMenuItem(),
                new TerrainMenuItem(),
                new TextureMenuItem(),
                new CameraMenuItem(),

                //BOTTOM
                new AppMenuItem()
            ]
            this.items = []
            this.setup()
        }

        /**
         * Setup the items list which calculate the position of the each item
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
            for(const iItem in this.items){
                const item = this.items[iItem]
                if (menuItem && item.element.isSelected()) {
                    menuItem !== item && item.element.stop()
                }
                if (menuItem && item.element === menuItem.element) {
                    item.element.run()
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
            if (!Menu.instance) {
                Menu.instance = new Menu()
            }
            return Menu.instance
        }
    }

    Menu.instance = null

    export default Menu

})