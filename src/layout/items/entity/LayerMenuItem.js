define(function (require) {

    const World = require('../../../world/World.js')
    const ListFormMenuItem = require('../form/ListFormMenuItem.js')

    /**
     * Layer Menu Item
     * Menu responsible for managing entities (z-index, ...)
     */
    class LayerMenuItem extends ListFormMenuItem {
        constructor() {
            super({
                name: 'Layer',
                stateCode: 'ACTION_SELECT_ENTITY'
            })
        }

        /**
         * @override
         */
        getFormObject(){
            return World.get().getEntityManager().getValidBodyEntities()
                .filter(entity => !entity.isSubEntity()).reverse()
        }
    }

    return LayerMenuItem

})