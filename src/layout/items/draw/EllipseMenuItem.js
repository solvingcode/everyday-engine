define(function (require) {

    const MenuItem = require('../../MenuItem.js')

    class EllipseMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Ellipse'
            })
        }
        run() {
            this.setDrawState('ELLIPSE')
        }
        isSelected(){
            return this.hasDrawState('ELLIPSE')
        }
    }

    return EllipseMenuItem

})