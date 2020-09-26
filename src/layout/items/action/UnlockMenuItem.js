define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Lock entities for modification (move, attach, ...)
     */
    class UnlockMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Unlock'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ACTION
        }
        run() {
            this.setActionState('UNLOCK', 'START')
        }
        isSelected(){
            return this.hasActionState('UNLOCK')
        }
    }

    return UnlockMenuItem

})