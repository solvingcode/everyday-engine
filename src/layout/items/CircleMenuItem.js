define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class CircleMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Circle'
            })
        }
        run() {
            this.appState.addState('TO_DRAW_CIRCLE')
        }
    }

    return CircleMenuItem

})