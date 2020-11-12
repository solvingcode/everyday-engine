define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    class JointMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'bone',
                title: 'Rigid joints'
            })
            this.type = Layout.type.ICON
        }
        run() {
            this.setDrawState('JOINT')
        }
        isSelected(){
            return this.hasDrawState('JOINT')
        }
    }

    return JointMenuItem

})