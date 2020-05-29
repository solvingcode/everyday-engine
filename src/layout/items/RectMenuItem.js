define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class RectMenuItem extends MenuItem {
        constructor(){
            super({
                name: 'Rect'
            })
        }
        run() {
            console.log("Running Rect")
        }
    }

    return RectMenuItem

})