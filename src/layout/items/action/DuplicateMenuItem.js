define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class DuplicateMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'copy',
                title: 'Duplicate'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ICON
        }
        run() {
            this.setActionState('DUPLICATE', 'START')
        }
        isSelected(){
            return this.hasActionState('DUPLICATE')
        }
    }

    return DuplicateMenuItem

})