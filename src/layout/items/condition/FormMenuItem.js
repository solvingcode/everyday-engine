define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')
    const DropdownMenuItem = require('../form/DropdownMenuItem.js')
    const Maths = require('../../../utils/Maths.js')

    /**
     * Form properties
     */
    class FormMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: 'Conditions'
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
         * @inherit
         */
        run() { }
        /**
         * @inherit
         */
        isSelected() {
            return false
        }
        /**
         * @inherit
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
            const entityManager = EntityManager.get()
            const bodyEntities = entityManager.getBodyEntities()
                .filter(entity => entity !== this.object)
                .map(entity => ({ value: entity.id, label: entity.props.name }))
            this.items = []
            if (!entityManager.isAttachEntity(this.object)) {
                this.items = this.items.concat([
                    new DropdownMenuItem(this,
                        {
                            name: 'Die when collide',
                            list: bodyEntities
                        },
                        () => this.object.getDieCondition(),
                        (value) => this.object.setDieCondition(value)
                    )
                ])
            }
            this.version = Maths.generateId()
        }
    }

    return FormMenuItem

})