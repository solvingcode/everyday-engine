define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const CheckboxMenuItem = require('../form/CheckboxMenuItem.js')
    const Maths = require('../../../utils/Maths.js')

    /**
     * Form physics properties
     */
    class PhysicsFormMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Properties'
            })
            this.parent = parent
            this.data = data
            this.zone = parent.zone
            this.type = Layout.type.FORM
        }
        /**
         * Init the menu item
         */
        init() {
            this.object = null
            this.items = []
            this.version = 0
        }
        /**
         * @inheritdoc
         */
        run() { }
        /**
         * @inheritdoc
         */
        isSelected() {
            return false
        }
        /**
         * @inheritdoc
         */
        update() {
            const selectedEntities = EntitySelector.get().getSelected()
            if (selectedEntities.length) {
                const selectedEntity = selectedEntities[0]
                if (selectedEntity !== this.object) {
                    this.object = selectedEntity
                    this.updateForm()
                }
            } else {
                this.init()
            }
        }
        /**
         * Update the form
         */
        updateForm() {
            this.items = [
                new CheckboxMenuItem(this, this.object.isStatic(), (value) => this.object.setStatic(value))
            ]
            this.version = Maths.generateId()
        }
    }

    return PhysicsFormMenuItem

})