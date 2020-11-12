define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Hide selected entities
     */
    class HideMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'eye-slash',
                title: 'Hide'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ICON
        }
        run() {
            this.setActionState('HIDE', 'START')
        }
        isSelected(){
            return this.hasActionState('HIDE')
        }
    }

    return HideMenuItem

})