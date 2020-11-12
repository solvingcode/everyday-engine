define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class AttachPointMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'thumbtack',
                title: 'Pin joints'
            })
            this.type = Layout.type.ICON
        }
        run() {
            this.setDrawState('ATTACH_POINT')
        }
        isSelected(){
            return this.hasDrawState('ATTACH_POINT')
        }
    }

    return AttachPointMenuItem

})