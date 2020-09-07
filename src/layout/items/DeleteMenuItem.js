define(function (require) {

    const MenuItem = require('../MenuItem.js')
    const Layout = require('../Layout.js')

    class DeleteMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Delete'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ACTION
        }
        run() {
            this.setActionState('DELETE')
        }
        isSelected(){
            return this.hasActionState('DELETE')
        }
    }

    return DeleteMenuItem

})