define(function (require) {

    const ListFormMenuItem = require('../form/ListFormMenuItem.js')
    const World = require('../../../world/World.js')

    /**
     * @class {ListTextureFormMenuItem}
     */
    class ListTextureFormMenuItem extends ListFormMenuItem {

        constructor(parent, props) {
            super(props)
        }

        /**
         * @override
         */
        getFormObject(){
            return World.get().getTextureManager().getTextures()
        }

    }

    return ListTextureFormMenuItem

})