import VirtualEntity from '../../entity/VirtualEntity.js'
import TerrainData from '../../project/data/TerrainData.js'
import ObjectHelper from '../../utils/ObjectHelper.js'
import {SCENE_WIDTH} from '../../core/Constant.js'
import Vector from '../../utils/Vector.js'

/**
 * Terrain class
 * Define and generate terrains
 * @class {Terrain}
 * @extends {TerrainData}
 * @abstract
 *
 * @property {number[]} chunkIds
 * @property {Vector} position
 * @property {number} entityId
 */
class Terrain extends TerrainData {

    constructor() {
        super()
        this.entityId = null
        this.size = {width: SCENE_WIDTH, height: 300}
        this.chunksNbr = 3
        this.chunkIds = []
    }

    /**
     * Initialize data
     * @param {World} world
     */
    init(world) {
        if (!this.entityId) {
            this.entityId = world.addEntity(
                new Vector({x: 0, y: 650}),
                VirtualEntity,
                {
                    name: 'Terrain',
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
    }

    /**
     * Load the terrain
     * @param {World} world
     */
    load(world) {
        this.init(world)
        this.loadChunks(world)
    }

    /**
     * @abstract
     * @param {World} world
     * @param {number} x
     * @param {number} y
     * @param {EntityProps} props
     * @return {Entity}
     */
    loadChunk(world, x, y, props) {
        throw new TypeError('loadChunks must be implemented')
    }

    /**
     * Unload the terrain
     * @param {World} world
     */
    unload(world) {
        this.removeChunks(world)
        world.removeEntityById(this.entityId)
    }

    /**
     * @param {number} entityId
     * @param {World} world
     * @return {Entity}
     */
    getEntityById(world, entityId) {
        return world.getEntityManager().findById(entityId)
    }

    /**
     * @param {World} world
     * @return {Entity}
     */
    getEntity(world) {
        return this.getEntityById(world, this.entityId)
    }

    /**
     * Create and load chunks by camera position
     * @param {World} world
     */
    loadChunks(world) {
        const camera = world.getCamera()
        const entity = this.getEntity(world)
        if (entity) {
            const chunksNbr = Math.ceil(camera.fromScaleNumber(this.chunksNbr, entity.position))
            const chunkIds = Array.from(Array(chunksNbr >= 0 ? chunksNbr : 0).keys())
                .map((iChunk) => {
                    const x = Math.floor(camera.position.x / entity.getWidth()) + (iChunk - 1)
                    const chunk = this.loadChunk(
                        world,
                        x * entity.getWidth() + entity.getPositionX(),
                        entity.getPositionY(),
                        {
                            size: {width: entity.getWidth(), height: entity.getHeight()},
                            noiseConfigs: _.clone(entity.noiseConfigs)
                        }
                    )
                    chunk.setSubEntity(true)
                    return chunk.getId()
                })
            this.chunkIds
                .filter(entityId => !chunkIds.includes(entityId))
                .forEach(entityId => world.removeEntityById(entityId))

            this.chunkIds = chunkIds
            this.updateChunks(world)
        }
    }

    /**
     * Update all chunks (background, size, ...)
     * @param {World} world
     */
    updateChunks(world) {
        this.chunkIds.forEach(entityId => {
            const chunkEntity = this.getEntityById(world, entityId)
            const entity = this.getEntity(world)
            if (entity.getTextureId() !== chunkEntity.getTextureId()) {
                chunkEntity.setTextureId(entity.getTextureId())
            }
            if (entity.isBackgroundImageRepeat() !== chunkEntity.isBackgroundImageRepeat()) {
                chunkEntity.setBackgroundImageRepeat(entity.isBackgroundImageRepeat())
            }
            if (
                !ObjectHelper.isEqual(entity.size, chunkEntity.size) ||
                !ObjectHelper.isEqual(entity.noiseConfigs, chunkEntity.noiseConfigs)
            ) {
                this.removeChunk(world, entityId)
            }
        })
    }

    /**
     * Remove all chunks from the world
     * @param {World} world
     */
    removeChunks(world) {
        this.chunkIds
            .forEach(entityId => world.removeEntityById(entityId))
    }

    /**
     * Remove the given chunk ID
     * @param {World} world
     * @param {number} chunkId
     */
    removeChunk(world, chunkId) {
        world.removeEntityById(chunkId)
    }
}

export default Terrain