define(function (require) {

    const CircleMenuItem = require('./items/CircleMenuItem.js')
    const RectMenuItem = require('./items/RectMenuItem.js')
    const LineMenuItem = require('./items/LineMenuItem.js')
    const PolyMenuItem = require('./items/PolyMenuItem.js')

    class Menu {
        constructor(){
            this.items = [
                new CircleMenuItem(),
                new RectMenuItem(),
                new LineMenuItem(),
                new PolyMenuItem()
            ]
        }
    }

    return Menu

})