define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class DeleteMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'trash-alt',
                title: 'Delete'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ICON
        }
        run() {
            this.setActionState('DELETE', 'START')
        }
        isSelected(){
            return this.hasActionState('DELETE')
        }
    }

    return DeleteMenuItem

})