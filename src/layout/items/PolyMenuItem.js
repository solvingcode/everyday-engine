define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class PolyMenuItem extends MenuItem {
        constructor(){
            super({
                name: 'Poly'
            })
        }
        run() {
            console.log("Running Poly")
        }
    }

    return PolyMenuItem

})