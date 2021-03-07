import GroupComponentEntity from '../group/GroupComponentEntity.js'
import Window from '../../../../core/Window.js'
import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'
import GridChunkEntity from './GridChunkEntity.js'
import GridXEntity from './GridXEntity.js'
import GridYEntity from './GridYEntity.js'

export default class GridEntity extends GroupComponentEntity {

    constructor(props) {
        super(props)
        this.selectable = false
        this.props.getStyle().setBorderSize(2)
        this.rank = 10
    }

    /**
     * @override
     */
    init(world) {
        this.size = Window.get().size
        return true
    }

    /**
     * @param {World} world
     */
    loadGrid(world) {
        const camera = world.getCamera()
        const sizeChunk = new Size({width: 600, height: 600})
        const maxChunkNbr = 14 * 8
        const chunkSizeNbrX = Math.ceil(camera.fromScaleNumber(this.size.width / sizeChunk.width, this.position)) + 1
        const chunkSizeNbrY = Math.ceil(camera.fromScaleNumber(this.size.height / sizeChunk.height, this.position)) + 1
        let chunkIds = []
        if (maxChunkNbr >= chunkSizeNbrX * chunkSizeNbrY) {
            const chunkVectors = Array.from(Array(chunkSizeNbrX * chunkSizeNbrY).keys())
                .map(iChunk => {
                    const {width, height} = sizeChunk
                    const x = Math.floor(camera.position.x / width) * width + width * (iChunk % chunkSizeNbrX)
                    const y = Math.floor(camera.position.y / height) * height + height * Math.floor(iChunk / chunkSizeNbrX)
                    return new Vector({x, y})
                })
            const gridChunks = [GridChunkEntity, GridXEntity, GridYEntity]
            gridChunks.forEach(gridChunk => {
                chunkIds = chunkIds.concat(
                    chunkVectors.map(({x, y}) => {
                        const chunk = world.addEntity(new Vector({x, y}), gridChunk,
                            { size: sizeChunk }
                        )
                        chunk.setSubEntity(true)
                        return chunk.getId()
                    })
                )
            })
        }
        this.getEntityChildIds()
            .filter(entityId => !chunkIds.includes(entityId))
            .forEach(entityId => world.removeEntityById(entityId))

        this.setEntityChildIds(chunkIds)
    }

    /**
     * @override
     */
    update(world) {
        this.setGenerated(false)
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        this.loadGrid(dataContext.world)
    }

}