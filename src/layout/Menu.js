define(function (require) {

    const EllipseMenuItem = require('./items/EllipseMenuItem.js')
    const RectMenuItem = require('./items/RectMenuItem.js')
    const LineMenuItem = require('./items/LineMenuItem.js')
    const PolyMenuItem = require('./items/PolyMenuItem.js')
    const SimulateMenuItem = require('./items/SimulateMenuItem.js')
    const Button = require('../renderer/ui/Button.js')

    class Menu {
        constructor() {
            this.types = [
                new EllipseMenuItem(),
                new RectMenuItem(),
                new LineMenuItem(),
                new PolyMenuItem(),
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
                for (var iItem in this.items) {
                    const item = this.items[iItem]
                    if (item.element.props.name === menuItem.element.props.name) {
                        item.element.setSelected(!item.element.isSelected())
                        item.element.run()
                    } else {
                        item.element.setSelected(false)
                    }
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