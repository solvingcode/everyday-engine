define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')
    const FileMenuItem = require('../form/FileMenuItem.js')
    const Maths = require('../../../utils/Maths.js')

    /**
     * Form style background
     */
    class BackgroundFormMenuItem extends MenuItem {
        constructor(parent) {
            super({
                name: 'Background',
                stateCode: '',
                type: Layout.type.FORM,
                zone: parent.zone
            })
            this.parent = parent
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
         * @override
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
                    new FileMenuItem(this,
                        { name: 'Background' },
                        () => null,
                        (value) => this.object.setBackgroundImageBlob(value)
                    )
                ])
            }

            this.version = Maths.generateId()
        }

        /**
         * Get the entity
         * @return {Entity}
         */
        getEntity(){
            return this.object
        }
    }

    return BackgroundFormMenuItem

})