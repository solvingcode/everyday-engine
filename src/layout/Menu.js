define(function (require) {

    const CircleMenuItem = require('./items/draw/CircleMenuItem.js')
    const RectMenuItem = require('./items/draw/RectMenuItem.js')
    const JointMenuItem = require('./items/draw/JointMenuItem.js')
    const AttachPointMenuItem = require('./items/draw/AttachPointMenuItem.js')
    const SelectorMenuItem = require('./items/draw/SelectorMenuItem.js')
    const SimulateMenuItem = require('./items/action/SimulateMenuItem.js')
    const DeleteMenuItem = require('./items/action/DeleteMenuItem.js')
    const DuplicateMenuItem = require('./items/action/DuplicateMenuItem.js')
    const UndoMenuItem = require('./items/action/UndoMenuItem.js')
    const MoveUpMenuItem = require('./items/action/MoveUpMenuItem.js')
    const MoveDownMenuItem = require('./items/action/MoveDownMenuItem.js')
    const LockMenuItem = require('./items/action/LockMenuItem.js')
    const UnlockMenuItem = require('./items/action/UnlockMenuItem.js')
    const StyleMenuItem = require('./items/style/StyleMenuItem.js')
    const ButtonUI = require('../renderer/ui/buttons/ButtonUI.js')
    const MenuItemUI = require('../renderer/ui/MenuItemUI.js')
    const LayerMenuItem = require('./items/layer/LayerMenuItem.js')

    class Menu {
        constructor() {
            this.types = [
                new SelectorMenuItem(),
                new CircleMenuItem(),
                new RectMenuItem(),
                new JointMenuItem(),
                new AttachPointMenuItem(),
                new SimulateMenuItem(),
                new DeleteMenuItem(),
                new DuplicateMenuItem(),
                new UndoMenuItem(),
                new MoveUpMenuItem(),
                new MoveDownMenuItem(),
                new LockMenuItem(),
                new UnlockMenuItem(),
                new StyleMenuItem(),
                new LayerMenuItem()
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
         * @param {Number} parentIndex 
         */
        prepare(item, parent = null) {
            const itemsZone = this.items.filter(pItem => pItem.element.zone === item.zone)
            const existItem = this.items.find(pItem => pItem.element === item)
            const lastIndex = itemsZone.length
            if (existItem) {
                const indexItem = itemsZone.findIndex(pItem => pItem.element === item)
                existItem.index = indexItem
            }
            const resultItem = existItem || new MenuItemUI(item, lastIndex, parent)
            !existItem && this.items.push(resultItem)
            if (item.items) {
                item.items.forEach(pItem => this.prepare(pItem, resultItem))
            }
        }

        /**
         * Clean all menu items that is not valid anymore.
         */
        clean() {
            this.items = this.items.filter(item => item.element.isValid())
        }

        /**
         * Select item in the menu.
         * @param {MenuItem} menuItem 
         */
        selectItem(menuItem) {
            if (menuItem) {
                this.items.map(item => {
                    if (item.element.isSelected()) {
                        item.element.stop()
                    }
                    if (item.element === menuItem.element) {
                        item.element.run()
                    }
                })
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
         * Apply action for the menu.
         * @param {Object} position 
         * @return {Boolean}
         */
        execute(position) {
            const menuItem = this.getItemAt(position.x, position.y)
            if (menuItem) {
                this.selectItem(menuItem)
                return true
            }
            return false
        }

        /**
         * Update menu items
         */
        update() {
            this.types.forEach(type => type.update())
            this.setup()
        }

        /**
         * Get MenuItem at a specific position.
         * @param {float} x 
         * @param {float} y 
         * @todo See if we can use isValid instead of checking position exists
         */
        getItemAt(x, y) {
            return this.items.find((item) => item.position &&
                x > item.position.x && x < item.position.x + ButtonUI.getProps(item.element).width &&
                y > item.position.y && y < item.position.y + ButtonUI.getProps(item.element).height
            )
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