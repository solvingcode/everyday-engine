define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class CircleMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Circle'
            })
        }
        run() {
            this.setDrawState('CIRCLE')
        }
        isSelected(){
            return this.hasDrawState('CIRCLE')
        }
    }

    return CircleMenuItem

})