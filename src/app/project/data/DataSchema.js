import World from '../../world/World.js'
import EntityManager from '../../world/manager/EntityManager.js'
import ConstraintEntity from '../../entity/types/constraint/ConstraintEntity.js'
import MouseConstraintEntity from '../../entity/types/constraint/MouseConstraintEntity.js'
import VirtualEntity from '../../entity/VirtualEntity.js'
import NoiseEntity from '../../entity/types/terrain/NoiseEntity.js'
import PlatformEntity from '../../entity/types/terrain/PlatformEntity.js'
import CircleEntity from '../../entity/types/shape/CircleEntity.js'
import RectEntity from '../../entity/types/shape/RectEntity.js'
import Camera from '../../core/Camera.js'
import Physics from '../../physics/Physics.js'
import TerrainManager from '../../world/terrain/TerrainManager.js'
import TextureManager from '../../world/manager/TextureManager.js'
import Terrain from '../../world/terrain/Terrain.js'
import NoiseTerrain from '../../world/terrain/types/NoiseTerrain.js'
import PlainTerrain from '../../world/terrain/types/PlainTerrain.js'
import EntityProps from '../../pobject/EntityProps.js'
import Texture from '../../core/Texture.js'
import MatterEngine from '../../physics/engine/matter/MatterEngine.js'
import JointEntity from '../../entity/types/constraint/JointEntity.js'
import AttachPointEntity from '../../entity/types/constraint/AttachPointEntity.js'
import CameraEntity from '../../entity/types/component/CameraEntity.js'

/**
 * @class {DataSchema}
 * Used to protect loading data when importing a project
 * the dataId will be generated when the project is saved, and used to instantiate data and check the validity
 */
class DataSchema {

    static schema = [
        {id: 1, type: World},
        {id: 2, type: EntityManager},
        {id: 3, type: ConstraintEntity},
        {id: 4, type: Camera},
        {id: 5, type: Physics},
        {id: 6, type: TerrainManager},
        {id: 7, type: Terrain},
        {id: 8, type: VirtualEntity},
        {id: 9, type: NoiseEntity},
        {id: 10, type: NoiseTerrain},
        {id: 11, type: PlatformEntity},
        {id: 12, type: PlainTerrain},
        {id: 13, type: CircleEntity},
        {id: 14, type: RectEntity},
        {id: 15, type: EntityProps},
        {id: 16, type: TextureManager},
        {id: 17, type: Texture},
        {id: 18, type: MouseConstraintEntity},
        {id: 19, type: MatterEngine},
        {id: 20, type: JointEntity},
        {id: 21, type: AttachPointEntity},
        {id: 22, type: CameraEntity}
    ]

    /**
     * @param {Class} type
     * @return {number}
     */
    static getId(type) {
        const schemaType = this.schema.find(vSchema => vSchema.type === type)
        if (!schemaType) {
            throw new TypeError(`Type ${type.name} not found in DataSchema!`)
        }
        return schemaType.id
    }

    /**
     * @param {number|string} pDataId
     * @param {Class} prototype
     * @return {Data}
     */
    static newInstance(pDataId, prototype) {
        const dataId = parseInt(pDataId)
        if (!dataId) return null
        const schemaType = this.schema.find(vSchema => vSchema.id === dataId)
        if (!schemaType) {
            throw new TypeError(`ID ${dataId} not found in DataSchema!`)
        }
        const {type} = schemaType
        if (type !== prototype && !(type.prototype instanceof prototype)) {
            throw new TypeError(`Type ${type.name} attached to ID ${dataId} not match the given prototype ${prototype.name} !`)
        }
        return new type()
    }

}

export default DataSchema