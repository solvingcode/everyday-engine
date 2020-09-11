define(function (require) {

    const MenuItem = require('../../MenuItem.js')

    class AttachPointMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Point'
            })
        }
        run() {
            this.setDrawState('ATTACH_POINT')
        }
        isSelected(){
            return this.hasDrawState('ATTACH_POINT')
        }
    }

    return AttachPointMenuItem

})