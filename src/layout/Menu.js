define(function (require) {

    const CircleMenuItem = require('./items/draw/CircleMenuItem.js')
    const RectMenuItem = require('./items/draw/RectMenuItem.js')
    const JointMenuItem = require('./items/draw/JointMenuItem.js')
    const AttachJointMenuItem = require('./items/draw/AttachJointMenuItem.js')
    const AttachPointMenuItem = require('./items/draw/AttachPointMenuItem.js')
    const SelectorMenuItem = require('./items/draw/SelectorMenuItem.js')
    const SimulateMenuItem = require('./items/action/SimulateMenuItem.js')
    const DeleteMenuItem = require('./items/action/DeleteMenuItem.js')
    const DuplicateMenuItem = require('./items/action/DuplicateMenuItem.js')
    const UndoMenuItem = require('./items/action/UndoMenuItem.js')
    const StyleMenuItem = require('./items/style/StyleMenuItem.js')
    const DefaultButtonUI = require('../renderer/ui/buttons/DefaultButtonUI.js')

    class Menu {
        constructor() {
            this.types = [
                new SelectorMenuItem(),
                new CircleMenuItem(),
                new RectMenuItem(),
                new JointMenuItem(),
                new AttachJointMenuItem(),
                new AttachPointMenuItem(),
                new SimulateMenuItem(),
                new DeleteMenuItem(),
                new DuplicateMenuItem(),
                new UndoMenuItem(),
                new StyleMenuItem()
            ]
            this.setup()
        }

        /**
         * Setup the items list which calculate the position of the each item
         * in the screen.
         */
        setup() {
            this.items = []
            for (var iType in this.types) {
                const type = this.types[iType]
                this.prepare(type)
            }
        }

        /**
         * Prepare the Menu and sub menu for rendering
         * @param {MenuItem | Menu} item 
         * @param {Object} parent 
         * @param {Number} parentIndex 
         */
        prepare(item, parentIndex = -1, parent = null) {
            const index = this.items.filter(pItem => pItem.element.zone === item.zone).length
            const resultItem = {
                element: item,
                index,
                parentIndex,
                parent
            }
            this.items.push(resultItem)
            if (item.items) {
                item.items.forEach(pItem => this.prepare(pItem, index, resultItem))
            }
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
                    if (item.element.props.name === menuItem.element.props.name) {
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
         * Get MenuItem at a specific position.
         * @param {float} x 
         * @param {float} y 
         */
        getItemAt(x, y) {
            return this.items.find((item) =>
                x > item.position.x && x < item.position.x + DefaultButtonUI.props.width &&
                y > item.position.y && y < item.position.y + DefaultButtonUI.props.height
            )
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