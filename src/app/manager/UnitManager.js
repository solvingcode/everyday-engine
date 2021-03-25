import Unit from '../unit/Unit.js'
import UnitManagerData from '../project/data/UnitManagerData.js'
import MeshComponent from '../component/MeshComponent.js'
import EmptyUnit from '../unit/type/EmptyUnit.js'
import TransformComponent from '../component/TransformComponent.js'
import Vector from '../utils/Vector.js'
import GUIPropertyComponent from '../component/gui/property/GUIPropertyComponent.js'

/**
 * Manage the units, components list (get, add, load, ...)
 *
 * @property {Unit[]} units
 */
export default class UnitManager extends UnitManagerData {

    constructor() {
        super()
        this.units = []
    }

    /**
     * @param {Unit} unit
     * @return {number}
     */
    getIndexOfUnit(unit) {
        return this.units.findIndex((element) =>
            element.getId() === unit.getId()
        )
    }

    /**
     * @param {number} unitId
     * @return {Unit}
     */
    findUnitById(unitId) {
        return this.units.find((element) =>
            element.getId() === unitId
        )
    }

    /**
     * @param {string} name
     * @return {Unit}
     */
    findUnitByName(name) {
        return this.units.find((element) =>
            element.getName() === name
        )
    }

    /**
     * @param {Class} type
     * @return {Unit[]}
     */
    findUnitByType(type) {
        return this.units.filter(element => element instanceof type)
    }

    /**
     * @template T
     * @param {Class} T
     * @return {T}
     */
    createUnit(T) {
        if (!(T.prototype instanceof Unit)) {
            throw new TypeError(`Unit type must be child of Unit class (${type} given)`)
        }
        const unit = new T()
        this.addUnit(unit)
        return unit
    }

    /**
     * @template T
     * @param {Class} T
     * @param {...any} props
     * @return {T}
     */
    createUnitInstant(T, ...props) {
        if (!(T.prototype instanceof Unit)) {
            throw new TypeError(`Unit type must be child of Unit class (${type} given)`)
        }
        const unit = new T()
        unit.instantiate(...props)
        this.addUnit(unit)
        return unit
    }

    /**
     * @param {Asset} asset
     * @param {Vector} position
     * @return {Unit}
     */
    createUnitFromAsset(asset, position){
        const unit = this.createUnit(EmptyUnit)
        unit.setName(asset.getName())
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        meshComponent.setSize(_.cloneDeep(asset.getType().getData().size))
        meshComponent.setAssetId(asset.getId())
        transformComponent.setPosition(new Vector())
        return unit
    }

    /**
     * @param {string} shape
     * @param {Vector} position
     * @return {Unit}
     */
    createPrimitiveUnit(shape, position){
        const unit = this.createUnit(EmptyUnit)
        unit.setName(shape)
        const transformComponent = unit.getComponent(TransformComponent)
        const meshComponent = unit.getComponent(MeshComponent)
        transformComponent.setPosition(new Vector(_.cloneDeep(position)))
        meshComponent.setShape(shape)
        return unit
    }

    /**
     * @param {Unit} unit
     */
    addUnit(unit) {
        const rank = unit.getComponent(GUIPropertyComponent).getRank()
        const indexBiggerRank = this.units.findIndex(pUnit => pUnit.getComponent(GUIPropertyComponent).getRank() > rank)
        if(indexBiggerRank >= 0){
            this.units.splice(indexBiggerRank, 0, unit)
        }else{
            this.units.push(unit)
        }
    }

    /**
     * @param {Unit} unit
     */
    deleteUnit(unit) {
        return this.units.splice(this.getIndexOfUnit(unit), 1)
    }

    /**
     * @param {number} unitId
     */
    deleteUnitById(unitId) {
        const unit = this.findUnitById(unitId)
        this.delete(unit)
    }

    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */
    getUnitsHasComponents(componentClasses){
        return this.getUnits().filter(unit => unit.hasComponents(componentClasses))
    }

    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */
    getUnitsHasAnyComponents(componentClasses){
        return this.getUnits().filter(unit => unit.hasAnyComponents(componentClasses))
    }

    /**
     * @param {World} world
     */
    regenerateAll(world) {
        this.units.forEach(unit =>
            unit.getComponent(MeshComponent).setGenerated(false)
        )
    }
}