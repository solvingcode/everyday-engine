define(function (require) {

    import EntityMotion from './EntityMotion.js'

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

    export default VirtualEntity
})