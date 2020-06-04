define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class EllipseMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Ellipse'
            })
        }
        run() {
            this.setDrawState('ELLIPSE')
        }
    }

    return EllipseMenuItem

})