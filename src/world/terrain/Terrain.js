define(function(require){

    const Maths = require('../../utils/Maths.js')
    const GroupEntity = require('../../entity/types/group/GroupEntity.js')

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
                GroupEntity,
                {size: this.size}).getId()
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
            this.world.removeEntityById(this.entityId)
        }
        /**
         * Generate new version
         */
        newVersion(){
            this.version = Maths.generateId()
        }
        /**
         * Get the version of the engine
         */
        getVersion() {
            return this.version
        }
        /**
         * @param {number} entityId
         * @return {Entity}
         */
        getEntityById(entityId){
            return this.world.getEntityManager().findById(entityId)
        }
        /**
         * @return {Entity}
         */
        getEntity(){
            return this.getEntityById(this.entityId)
        }
        /**
         * @return {Entity[]}
         */
        getChunkEntities(){
            return this.chunkIds.map(entityId => this.world.getEntityManager().findById(entityId))
        }
        /**
         * Create and load chunks by camera position
         */
        loadChunks() {
            const camera = this.world.getCamera()
            const entity = this.getEntity()
            const chunkIds = Array.from(Array(this.chunksNbr).keys())
                .map((iChunk) => {
                    const x = Math.floor(camera.position.x / this.getWidth()) + (iChunk - 1)
                    return this.loadChunk(
                        x * this.getWidth() + entity.getPositionX(),
                        entity.getPositionY(),
                        {size: {width: this.getWidth(), height: this.getHeight()}}
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
        updateChunks(){
            this.chunkIds.forEach(entityId => {
                const chunkEntity = this.getEntityById(entityId)
                const entity = this.getEntity()
                if(entity.getBackgroundImageBlob() !== chunkEntity.getBackgroundImageBlob()){
                    chunkEntity.setBackgroundImageBlob(entity.getBackgroundImageBlob())
                }
                if(entity.isBackgroundImageRepeat() !== chunkEntity.isBackgroundImageRepeat()){
                    chunkEntity.setBackgroundImageRepeat(entity.isBackgroundImageRepeat())
                }
            })
        }

        /**
         * Remove all chunks from the world
         */
        removeChunks(){
            this.chunkIds
                .forEach(entityId => this.world.removeEntityById(entityId))
        }

        /**
         * @param {string|number} width
         */
        setWidth(width) {
            this.removeChunks()
            this.size.width = parseInt(width)
        }

        /**
         * @param {string|number} height
         */
        setHeight(height) {
            this.removeChunks()
            this.size.height = parseInt(height)
        }

        /**
         * @param {number} angle
         */
        setRotationDegree(angle) {
            this.rotation = Maths.fromDegree(angle)
        }

        /**
         * @return {number}
         */
        getWidth() {
            return this.size.width
        }

        /**
         * @return {number}
         */
        getHeight() {
            return this.size.height
        }

        /**
         * @return {number}
         */
        getRotationDegree() {
            return Maths.toDegree(this.rotation)
        }
    }

    return Terrain

})