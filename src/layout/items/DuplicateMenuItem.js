define(function (require) {

    const MenuItem = require('../MenuItem.js')
    const Layout = require('../Layout.js')

    class DuplicateMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Duplicate'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ACTION
        }
        run() {
            this.setActionState('DUPLICATE')
        }
        isSelected(){
            return this.hasActionState('DUPLICATE')
        }
    }

    return DuplicateMenuItem

})