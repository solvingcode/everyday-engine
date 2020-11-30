define(function (require) {

    const Layout = require('../../Layout.js')
    const EntitySelector = require('../../../world/manager/EntitySelector.js')
    const EntityManager = require('../../../world/manager/EntityManager.js')
    const FormMenuItem = require('../form/FormMenuItem.js')

    /**
     * Form properties
     */
    class ConditionFormMenuItem extends FormMenuItem {
        constructor(parent) {
            super({
                name: 'Conditions',
                stateCode: '',
                type: Layout.type.FORM,
                zone: parent.zone
            })
            this.parent = parent
        }

        /**
         * @override
         */
        getFields() {
            const bodyEntities = EntityManager.get().getBodyEntities()
                .filter(entity => entity !== this.object)
                .map(entity => ({ value: entity.id, label: entity.name }))

            return [
                {
                    bind: 'dieCondition',
                    label: 'Die when collide',
                    type: Layout.form.DROPDOWN,
                    list: bodyEntities
                }
            ]
        }

        /**
         * @override
         */
        getFormObject(){
            const selectedEntities = EntitySelector.get().getSelected()
            if (selectedEntities.length) {
                return selectedEntities[0]
            }
            return null
        }
    }

    return ConditionFormMenuItem

})