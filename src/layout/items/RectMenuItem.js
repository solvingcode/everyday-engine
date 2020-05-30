define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class RectMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Rect'
            })
        }
        run() {
            this.appState.addState('TO_DRAW_RECT')
        }
    }

    return RectMenuItem

})