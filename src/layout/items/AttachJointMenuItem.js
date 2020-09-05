define(function (require) {

    const MenuItem = require('../MenuItem.js')

    class AttachJointMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Attach'
            })
        }
        run() {
            this.setDrawState('ATTACH_JOINT')
        }
    }

    return AttachJointMenuItem

})