define(function (require) {

    const World = require('../../world/World.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const ConstraintEntity = require('../../entity/types/joint/ConstraintEntity.js')
    const VirtualEntity = require('../../entity/VirtualEntity.js')
    const NoiseEntity = require('../../entity/types/terrain/NoiseEntity.js')
    const Camera = require('../../core/Camera.js')
    const Physics = require('../../physics/Physics.js')
    const TerrainManager = require('../../world/terrain/TerrainManager.js')
    const Terrain = require('../../world/terrain/Terrain.js')
    const NoiseTerrain = require('../../world/terrain/types/NoiseTerrain.js')

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
            {id: 10, type: NoiseTerrain}
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
            if(!dataId) return null
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

    return DataSchema
})