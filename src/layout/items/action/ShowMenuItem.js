define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Show selected entities
     */
    class ShowMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'eye',
                title: 'Show'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ICON
        }
        run() {
            this.setActionState('SHOW', 'START')
        }
        isSelected(){
            return this.hasActionState('SHOW')
        }
    }

    return ShowMenuItem

})