define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class PolyMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Poly'
            })
        }
        run() {
            this.setDrawState('POLY')
        }
        isSelected(){
            return this.hasDrawState('POLY')
        }
    }

    return PolyMenuItem

})