define(function (require) {

    const MenuItem = require('../../MenuItem.js')

    class AttachPointMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Pin joint'
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