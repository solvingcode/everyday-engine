define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class RectMenuItem extends MenuItem {
        constructor(){
            super({
                name: 'Rect'
            })
        }
    }

    return RectMenuItem

})