define(function (require) {

    const Terrain = require('../Terrain.js')
    const PlatformEntity = require('../../../entity/types/PlatformEntity.js')

    /**
     * Manage and generate plain terrains
     */
    class PlainTerrain extends Terrain {
        /**
         * @override
         */
        init() {
            this.entity = this.entityManager.load(0, 700, PlatformEntity)
            this.props = {
                width: this.entity.size.width,
                height: this.entity.size.height,
            }
        }

        /**
         * @override
         */
        load() {
            this.entity.setPosition({x: 0, y: 700})
        }

        /**
         * @override
         */
        unload() {
            this.entityManager.delete(this.entity)
        }

        /**
         * @return {number}
         */
        getWidth() {
            return this.props.width
        }

        /**
         * @return {number}
         */
        getHeight() {
            return this.props.height
        }

        /**
         * @param {number} width
         */
        setWidth(width) {
            this.props.width = width
            this.entity.setSizeAndGenerate({width, height: this.props.height})
        }

        /**
         * @param {number} height
         */
        setHeight(height) {
            this.props.height = height
            this.entity.setSizeAndGenerate({width: this.props.width, height})
        }
    }

    return PlainTerrain

})