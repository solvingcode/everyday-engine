define(function (require) {

    const CircleMenuItem = require('./items/draw/CircleMenuItem.js')
    const RectMenuItem = require('./items/draw/RectMenuItem.js')
    const JointMenuItem = require('./items/draw/JointMenuItem.js')
    const AttachPointMenuItem = require('./items/draw/AttachPointMenuItem.js')
    const SelectorMenuItem = require('./items/draw/SelectorMenuItem.js')
    const NewDocMenuItem = require('./items/action/NewDocMenuItem.js')
    const SimulateStartMenuItem = require('./items/action/SimulateStartMenuItem.js')
    const SimulateStopMenuItem = require('./items/action/SimulateStopMenuItem.js')
    const DeleteMenuItem = require('./items/action/DeleteMenuItem.js')
    const DuplicateMenuItem = require('./items/action/DuplicateMenuItem.js')
    const UndoMenuItem = require('./items/action/UndoMenuItem.js')
    const MoveUpMenuItem = require('./items/action/MoveUpMenuItem.js')
    const MoveDownMenuItem = require('./items/action/MoveDownMenuItem.js')
    const LockMenuItem = require('./items/action/LockMenuItem.js')
    const UnlockMenuItem = require('./items/action/UnlockMenuItem.js')
    const HideMenuItem = require('./items/action/HideMenuItem.js')
    const ShowMenuItem = require('./items/action/ShowMenuItem.js')
    const MenuItemUI = require('../renderer/ui/MenuItemUI.js')
    const LayerMenuItem = require('./items/layer/LayerMenuItem.js')
    const AiGeneticMenuItem = require('./items/genetic/AiGeneticMenuItem.js')
    const EntityMenuItem = require('./items/entity/EntityMenuItem.js')
    const ConditionMenuItem = require('./items/condition/ConditionMenuItem.js')

    /**
     * Define all menu items
     * @property {MenuItem[]} types
     * @property {MenuItemUI[]} items
     */
    class Menu {
        constructor() {
            this.types = [
                new SelectorMenuItem(),
                new CircleMenuItem(),
                new RectMenuItem(),
                new JointMenuItem(),
                new AttachPointMenuItem(),
                new SimulateStartMenuItem(),
                new SimulateStopMenuItem(),
                new NewDocMenuItem(),
                new DeleteMenuItem(),
                new DuplicateMenuItem(),
                new UndoMenuItem(),
                new MoveUpMenuItem(),
                new MoveDownMenuItem(),
                new LockMenuItem(),
                new UnlockMenuItem(),
                new HideMenuItem(),
                new ShowMenuItem(),
                new LayerMenuItem(),
                new EntityMenuItem(),
                new ConditionMenuItem(),
                new AiGeneticMenuItem()
            ]
            this.items = []
            this.setup()
        }

        /**
         * Setup the items list which calculate the position of the each item
         * in the screen.
         */
        setup() {
            this.clean()
            for (var iType in this.types) {
                const type = this.types[iType]
                type.menu = this
                this.prepare(type)
            }
        }

        /**
         * Prepare the Menu and sub menu for rendering
         * @param {MenuItem | Menu} item 
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
         * Find menu item by index and zone
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
                if (item.element.isSelected()) {
                    item.element.stop()
                }
                if (menuItem && item.element === menuItem.element) {
                    item.element.run()
                }
            }
        }

        /**
         * Get selected item.
         * @return {MenuItem}
         */
        getSelected() {
            return this.items.find((item) => item.element.isSelected())
        }

        /**
         * Update menu items
         */
        update() {
            this.types.forEach(type => type.isValid() && type.update())
            this.setup()
        }

        /**
         * Get Previous menu item
         * @param {MenuItem} type 
         */
        getPrevItem(type) {
            const index = this.types.findIndex(ptype => ptype === type)
            const element = this.types[index - 1]
            return this.items.find(pitem => pitem.element === element)
        }

        /**
         * Set the UI Renderer (used to locate items in the layout)
         * @param {UIRenderer} uiRenderer 
         */
        setUIRenderer(uiRenderer) {
            this.uiRenderer = uiRenderer
        }

        /**
         * Get the UI Renderer
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

    return Menu

})