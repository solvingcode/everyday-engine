define(function (require) {

    const VirtualEntity = require('../../entity/VirtualEntity.js')

    /**
     * Terrain class
     * Define and generate terrains
     * @abstract
     *
     * @property {World} world
     * @property {number[]} chunkIds
     * @property {Vector} position
     * @property {number} entityId
     */
    class Terrain {
        /**
         * @param {World} world
         */
        constructor(world) {
            this.world = world
            this.entityId = null
            this.size = {width: SCENE_WIDTH, height: 300}
            this.rotation = 0
            this.init()
        }

        /**
         * Initialize data
         */
        init() {
            this.chunksNbr = 3
            this.chunkIds = []
            this.entityId = this.world.addEntity(
                {x: 0, y: 650},
                VirtualEntity,
                {
                    size: this.size,
                    noiseConfigs: {
                        seed: 1234,
                        octaves: 9,
                        amplitude: 80,
                        persistence: 0.51,
                        smoothness: 250
                    }
                }).getId()
        }

        /**
         * Load the terrain
         */
        load() {
            this.loadChunks()
        }

        /**
         * Unload the terrain
         */
        unload() {
            this.removeChunks()
            this.world.removeEntityById(this.entityId)
        }

        /**
         * @param {number} entityId
         * @return {Entity}
         */
        getEntityById(entityId) {
            return this.world.getEntityManager().findById(entityId)
        }

        /**
         * @return {Entity}
         */
        getEntity() {
            return this.getEntityById(this.entityId)
        }

        /**
         * Create and load chunks by camera position
         */
        loadChunks() {
            const camera = this.world.getCamera()
            const entity = this.getEntity()
            const chunkIds = Array.from(Array(this.chunksNbr).keys())
                .map((iChunk) => {
                    const x = Math.floor(camera.position.x / entity.getWidth()) + (iChunk - 1)
                    return this.loadChunk(
                        x * entity.getWidth() + entity.getPositionX(),
                        entity.getPositionY(),
                        {
                            size: {width: entity.getWidth(), height: entity.getHeight()},
                            noiseConfigs: _.clone(entity.noiseConfigs)
                        }
                    )
                })
            this.chunkIds
                .filter(entityId => !chunkIds.includes(entityId))
                .forEach(entityId => this.world.removeEntityById(entityId))

            this.chunkIds = chunkIds
            this.updateChunks()
        }

        /**
         * Update all chunks (background, size, ...)
         */
        updateChunks() {
            this.chunkIds.forEach(entityId => {
                const chunkEntity = this.getEntityById(entityId)
                const entity = this.getEntity()
                if (entity.getBackgroundImageBlob() !== chunkEntity.getBackgroundImageBlob()) {
                    chunkEntity.setBackgroundImageBlob(entity.getBackgroundImageBlob())
                }
                if (entity.isBackgroundImageRepeat() !== chunkEntity.isBackgroundImageRepeat()) {
                    chunkEntity.setBackgroundImageRepeat(entity.isBackgroundImageRepeat())
                }
                if (
                    !_.isEqual(entity.size, chunkEntity.size) ||
                    !_.isEqual(entity.noiseConfigs, chunkEntity.noiseConfigs)
                ) {
                    this.removeChunk(entityId)
                }
            })
        }

        /**
         * Remove all chunks from the world
         */
        removeChunks() {
            this.chunkIds
                .forEach(entityId => this.world.removeEntityById(entityId))
        }

        /**
         * Remove the given chunk ID
         * @param chunkId
         */
        removeChunk(chunkId) {
            this.world.removeEntityById(chunkId)
        }
    }

    return Terrain

})