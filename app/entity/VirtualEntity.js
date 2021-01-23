define(function (require) {

    const EntityMotion = require('./EntityMotion.js')

    /**
     * Virtual Entity can be used to manage entity's props
     */
    class VirtualEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.VIRTUAL
        }

        /**
         * @override
         */
        init() {
            return true
        }

        /**
         * @override
         */
        drawContext(dataContext){
        }

    }

    return VirtualEntity
})