define(function (require) {

    const Terrain = require('../Terrain.js')
    const NoiseEntity = require('../../../entity/types/terrain/NoiseEntity.js')

    /**
     * Manage and generate noise terrains
     * @property {number[]} chunkIds
     */
    class NoiseTerrain extends Terrain {
        /**
         * @override
         */
        init() {
            this.chunksNbr = 3
            this.chunkIds = []
            this.size = {width: SCENE_WIDTH, height: 300}
        }

        /**
         * @override
         */
        load() {
            this.loadChunks()
        }

        /**
         * @override
         */
        unload() {
            this.chunkIds.forEach(entityId => this.entityManager.deleteById(entityId))
        }

        /**
         * Create and load chunks by camera position
         */
        loadChunks() {
            const chunkIds = Array.from(Array(this.chunksNbr).keys())
                .map((iChunk) => {
                    const x = Math.floor(this.camera.position.x / this.size.width) + (iChunk - 1)
                    return this.entityManager.load(this.size.width * x, 650, NoiseEntity).getId()
                })
            this.chunkIds
                .filter(entityId => !chunkIds.includes(entityId))
                .forEach(entityId => this.entityManager.deleteById(entityId))
            this.chunkIds = chunkIds
        }
    }

    return NoiseTerrain

})