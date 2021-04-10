import Unit from '../unit/Unit.js'
import UnitManagerData from '../project/data/UnitManagerData.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import EmptyUnit from '../unit/type/EmptyUnit.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import Vector from '../utils/Vector.js'
import GUIPropertyComponent from '../component/internal/gui/property/GUIPropertyComponent.js'
import Maths from '../utils/Maths.js'

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
    findUnitsByType(type) {
        return this.units.filter(element => element instanceof type)
    }

    /**
     * @param {Class} type
     * @return {Unit}
     */
    findFirstUnitByType(type) {
        const result = this.findUnitsByType(type)
        return result && result[0]
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
     * @param {string} shape
     * @param {Vector} position
     * @return {Unit}
     */
    createPrimitiveUnit(shape, position) {
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
        this.setupName(unit)
        const rank = unit.getComponent(GUIPropertyComponent).getRank()
        const indexBiggerRank = this.units.findIndex(pUnit => pUnit.getComponent(GUIPropertyComponent).getRank() > rank)
        if (indexBiggerRank >= 0) {
            this.units.splice(indexBiggerRank, 0, unit)
        } else {
            this.units.push(unit)
        }
    }

    sortUnits() {
        this.units.sort((unitA, unitB) =>
            unitA.getComponent(GUIPropertyComponent).getRank() > unitB.getComponent(GUIPropertyComponent).getRank()
        )
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
        this.deleteUnit(unit)
    }

    /**
     * @param {Unit} unit
     * @param {number} targetIndex
     */
    moveUnitToIndex(unit, targetIndex) {
        this.deleteUnit(unit)
        this.units.splice(targetIndex, 0, unit)
    }

    /**
     * @param {Unit} unit
     */
    moveUnitUp(unit) {
        const index = this.getIndexOfUnit(unit)
        if (index > 0) {
            this.moveUnitToIndex(unit, index - 1)
        }
    }

    /**
     * @param {Unit} unit
     */
    moveUnitDown(unit) {
        const index = this.getIndexOfUnit(unit)
        if (index < this.units.length - 1) {
            this.moveUnitToIndex(unit, index + 1)
        }
    }

    /**
     * @param {number} unitId
     */
    tryDeleteUnitById(unitId) {
        const unit = this.findUnitById(unitId)
        unit && this.deleteUnit(unit)
    }

    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */
    getUnitsHasComponents(componentClasses) {
        return this.getUnits().filter(unit => unit.hasComponents(componentClasses))
    }

    /**
     * @param {Component[]} componentClasses
     * @return {Unit}
     */
    getOneUnitHasComponents(componentClasses) {
        const result = this.getUnitsHasComponents(componentClasses)
        return result && result[0]
    }

    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */
    getUnitsHasAnyComponents(componentClasses) {
        return this.getUnits().filter(unit => unit.hasAnyComponents(componentClasses))
    }

    /**
     * @param {Unit} unit
     * @return {Unit}
     */
    clone(unit) {
        const cloneUnit = _.cloneDeep(unit)
        cloneUnit.setName(`Clone of ${unit.getName()}`)
        cloneUnit.setId(Maths.generateId())
        this.addUnit(cloneUnit)
        return cloneUnit
    }

    /**
     * @param {Unit[]} units
     * @return {Unit[]}
     */
    cloneUnits(units) {
        return units.map(unit => this.clone(unit))
    }

    /**
     * @param {World} world
     */
    regenerateAll(world) {
        this.units.forEach(unit =>
            unit.getComponent(MeshComponent).setGenerated(false)
        )
    }

    /**
     * @param {Unit} unit
     */
    setupName(unit) {
        const initialName = unit.getName()
        let name = initialName
        let existUnit = null
        let iDuplicate = 0
        do {
            unit.setName(name)
            existUnit = this.findUnitByName(name)
            if (existUnit) {
                iDuplicate++
                name = `${initialName} (${iDuplicate})`
            }
        } while (existUnit)
    }
}