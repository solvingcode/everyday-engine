define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Move down entities in z-index
     */
    class MoveDownMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Down'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ACTION
        }
        run() {
            this.setActionState('MOVE_DOWN', 'START')
        }
        isSelected(){
            return this.hasActionState('MOVE_DOWN')
        }
    }

    return MoveDownMenuItem

})