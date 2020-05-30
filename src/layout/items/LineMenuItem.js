define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class LineMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Line'
            })
        }
        run() {
            this.appState.addState('TO_DRAW_LINE')
        }
    }

    return LineMenuItem

})