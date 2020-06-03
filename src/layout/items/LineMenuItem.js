define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class LineMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Line'
            })
        }
        run() {
            this.setDrawState('LINE')
        }
    }

    return LineMenuItem

})