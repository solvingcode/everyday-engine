define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Move up entities in z-index
     */
    class MoveUpMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Up'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ACTION
        }
        run() {
            this.setActionState('MOVE_UP', 'START')
        }
        isSelected(){
            return this.hasActionState('MOVE_UP')
        }
    }

    return MoveUpMenuItem

})