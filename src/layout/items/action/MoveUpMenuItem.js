define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

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