define(function (require) {

    const EntityMotion = require('./EntityMotion.js')

    /**
     * Virtual Entity can be used to manage entity's props
     */
    class VirtualEntity extends EntityMotion {

        constructor(props) {
            super({...props, name: 'Virtual'})
            this.shape = EntityMotion.shapes.VIRTUAL
            this.visible = false
        }

        /**
         * @override
         */
        init() {
            return true
        }

    }

    return VirtualEntity
})