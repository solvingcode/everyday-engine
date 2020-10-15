define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * Make physics entity static (not move)
     */
    class PhysicsNotStaticMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Dynamic'
            })
            this.parent = parent
            this.data = data
            this.zone = parent.zone
            this.type = Layout.type.ACTION
        }
        /**
         * @inheritdoc
         */
        run() {
            this.setActionState('PHYSICS_NOT_STATIC', 'START')
        }
        /**
         * @inheritdoc
         */
        isSelected() {
            return this.hasActionState('PHYSICS_NOT_STATIC')
        }
    }

    return PhysicsNotStaticMenuItem

})