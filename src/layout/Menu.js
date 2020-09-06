define(function (require) {

    const CircleMenuItem = require('./items/CircleMenuItem.js')
    const RectMenuItem = require('./items/RectMenuItem.js')
    const JointMenuItem = require('./items/JointMenuItem.js')
    const AttachJointMenuItem = require('./items/AttachJointMenuItem.js')
    const SimulateMenuItem = require('./items/SimulateMenuItem.js')
    const SelectorMenuItem = require('./items/SelectorMenuItem.js')
    const Button = require('../renderer/ui/Button.js')

    class Menu {
        constructor() {
            this.types = [
                new SelectorMenuItem(),
                new CircleMenuItem(),
                new RectMenuItem(),
                new JointMenuItem(),
                new AttachJointMenuItem(),
                new SimulateMenuItem()
            ]
            this.setup()
        }

        /**
         * Setup the items list which calculate the position of the each item
         * in the screen.
         */
        setup() {
            const x0 = 20, y0 = 20
            this.items = []
            for (var iType in this.types) {
                const type = this.types[iType]
                this.items.push({
                    element: type,
                    position: {
                        x: x0,
                        y: y0 + iType * (Button.props.height + Button.props.padding)
                    }
                })
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
                        item.element.setSelected(false)
                        item.element.stop()
                    }
                    if (item.element.props.name === menuItem.element.props.name) {
                        item.element.setSelected(true)
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
                x > item.position.x && x < item.position.x + Button.props.width &&
                y > item.position.y && y < item.position.y + Button.props.height
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