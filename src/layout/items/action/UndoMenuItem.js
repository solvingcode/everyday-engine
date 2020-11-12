define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class UndoMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'undo',
                title: 'Undo'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ICON
        }
        run() {
            this.setActionState('UNDO', 'START')
        }
        isSelected(){
            return this.hasActionState('UNDO')
        }
    }

    return UndoMenuItem

})