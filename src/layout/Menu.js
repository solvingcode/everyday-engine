define(function (require) {

    const CircleMenuItem = require('./items/CircleMenuItem.js')
    const RectMenuItem = require('./items/RectMenuItem.js')
    const LineMenuItem = require('./items/LineMenuItem.js')
    const PolyMenuItem = require('./items/PolyMenuItem.js')
    const Button = require('../renderer/ui/Button.js')

    class Menu {
        constructor() {
            this.types = [
                new CircleMenuItem(),
                new RectMenuItem(),
                new LineMenuItem(),
                new PolyMenuItem()
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

        static get() {
            if (!Menu.instance) {
                Menu.instance = new Menu()
            }
            return Menu.instance
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
                        item.element.setSelected(true)
                        item.element.run()
                    } else {
                        item.element.setSelected(false)
                    }
                }
            }
        }

        /**
         * Get selected item
         * @return {MenuItem}
         */
        getSelected() {
            return this.items.find((item) => item.element.isSelected())
        }

        getItemAt(x, y) {
            return this.items.find((item) =>
                x > item.position.x && x < item.position.x + Button.props.width &&
                y > item.position.y && y < item.position.y + Button.props.height
            )
        }
    }

    Menu.instance = null

    return Menu

})