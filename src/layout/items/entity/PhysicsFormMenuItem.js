define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')
    const CheckboxMenuItem = require('../form/CheckboxMenuItem.js')
    const TextMenuItem = require('../form/TextMenuItem.js')
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
            this.items = []

            if (this.object && !entityManager.isAttachEntity(this.object)) {
                this.items = this.items.concat([
                    new CheckboxMenuItem(this,
                        { name: 'Static' },
                        () => this.object.isStatic(),
                        (value) => this.object.setStatic(value)
                    ),
                    new TextMenuItem(this,
                        { name: 'Min rotation (°)' },
                        () => Maths.toDegree(this.object.getRotationConstraint().min),
                        (value) => this.object.setRotationConstraint({ min: Maths.fromDegree(value) })
                    ),
                    new TextMenuItem(this,
                        { name: 'Max rotation (°)' },
                        () => Maths.toDegree(this.object.getRotationConstraint().max),
                        (value) => this.object.setRotationConstraint({ max: Maths.fromDegree(value) })
                    )
                ])
            }else if (entityManager.isAttachEntity(this.object)) {
                this.items = this.items.concat([
                    new TextMenuItem(this,
                        { name: 'Min angle A (°)' },
                        () => Maths.toDegree(this.object.physics.angleAMin),
                        (value) => this.object.physics.angleAMin = Maths.fromDegree(value)
                    ),
                    new TextMenuItem(this,
                        { name: 'Max angle A (°)' },
                        () => Maths.toDegree(this.object.physics.angleAMax),
                        (value) => this.object.physics.angleAMax = Maths.fromDegree(value)
                    ),
                    new TextMenuItem(this,
                        { name: 'Min angle B (°)' },
                        () => Maths.toDegree(this.object.physics.angleBMin),
                        (value) => this.object.physics.angleBMin = Maths.fromDegree(value)
                    ),
                    new TextMenuItem(this,
                        { name: 'Max angle B (°)' },
                        () => Maths.toDegree(this.object.physics.angleBMax),
                        (value) => this.object.physics.angleBMax = Maths.fromDegree(value)
                    )
                ])
            }
            this.version = Maths.generateId()
        }
    }

    return PhysicsFormMenuItem

})