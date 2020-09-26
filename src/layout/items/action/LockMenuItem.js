define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Lock entities for modification (move, attach, ...)
     */
    class LockMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Lock'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ACTION
        }
        run() {
            this.setActionState('LOCK', 'START')
        }
        isSelected(){
            return this.hasActionState('LOCK')
        }
    }

    return LockMenuItem

})