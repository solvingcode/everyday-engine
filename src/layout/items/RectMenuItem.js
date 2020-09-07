define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class RectMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Rect'
            })
        }
        run() {
            this.setDrawState('RECT')
        }
        isSelected(){
            return this.hasDrawState('RECT')
        }
    }

    return RectMenuItem

})