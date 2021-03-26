import World from '../../world/World.js'
import Camera from '../../core/Camera.js'
import Physics from '../../physics/Physics.js'
import AssetsManager from '../../manager/AssetsManager.js'
import Asset from '../../asset/Asset.js'
import MatterEngine from '../../physics/engine/matter/MatterEngine.js'
import Folder from '../../asset/Folder.js'
import Mesh from '../../core/Mesh.js'
import UnitManager from '../../manager/UnitManager.js'
import EmptyUnit from '../../unit/type/EmptyUnit.js'
import GUIPropertyComponent from '../../component/gui/property/GUIPropertyComponent.js'
import MeshComponent from '../../component/MeshComponent.js'
import TransformComponent from '../../component/TransformComponent.js'
import MoveXUnitInstant from '../../unit/instant/type/internal/move/MoveXUnitInstant.js'
import MoveYUnitInstant from '../../unit/instant/type/internal/move/MoveYUnitInstant.js'
import MoveFreeUnitInstant from '../../unit/instant/type/internal/move/MoveFreeUnitInstant.js'
import GridUnitInstant from '../../unit/instant/type/internal/grid/GridUnitInstant.js'
import AssetUnitInstant from '../../unit/instant/type/internal/asset/AssetUnitInstant.js'

/**
 * @class {DataSchema}
 * Used to protect loading data when importing a project
 * the dataId will be generated when the project is saved, and used to instantiate data and check the validity
 */
class DataSchema {

    static schema = [
        {id: 10, type: World},
        {id: 20, type: UnitManager},
        {id: 30, type: EmptyUnit},
        {id: 40, type: MeshComponent},
        {id: 50, type: TransformComponent},
        {id: 60, type: AssetUnitInstant},
        {id: 4, type: Camera},
        {id: 5, type: Physics},
        {id: 16, type: AssetsManager},
        {id: 17, type: Asset},
        {id: 19, type: MatterEngine},
        {id: 23, type: Folder},
        {id: 24, type: Mesh}
    ]

    static exclude = [
        GUIPropertyComponent,
        MoveXUnitInstant,
        MoveYUnitInstant,
        MoveFreeUnitInstant,
        GridUnitInstant
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
     * @param {Class} type
     * @return {boolean}
     */
    static isExcluded(type){
        return this.exclude.includes(type)
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