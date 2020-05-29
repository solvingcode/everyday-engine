define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class CircleMenuItem extends MenuItem {
        constructor(){
            super({
                name: 'Circle'
            })
        }
        run(){
            console.log("Running Circle")
        }
    }

    return CircleMenuItem

})