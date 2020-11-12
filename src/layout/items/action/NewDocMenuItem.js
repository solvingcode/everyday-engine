define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Create new document
     */
    class NewDocMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'file',
                title: 'New document'
            })
            this.zone = Layout.zone.TOP
            this.type = Layout.type.ICON
        }
        run() {

        }
        isSelected(){

        }
    }

    return NewDocMenuItem

})