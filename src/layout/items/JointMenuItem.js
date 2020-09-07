define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class JointMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Joint'
            })
        }
        run() {
            this.setDrawState('JOINT')
        }
        isSelected(){
            return this.hasDrawState('JOINT')
        }
    }

    return JointMenuItem

})