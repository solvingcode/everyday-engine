import Unit from '../unit/Unit.js'
import UnitManagerData from '../project/data/UnitManagerData.js'
import MeshComponent from '../component/MeshComponent.js'

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
     * @param {Function} type
     * @return {Unit}
     */
    createUnit(type) {
        if (!(type.prototype instanceof Unit)) {
            throw new TypeError(`Unit type must be child of Unit class (${type} given)`)
        }
        const unit = new type()
        this.addUnit(unit)
        return unit
    }

    /**
     * @param {Unit} unit
     */
    addUnit(unit) {
        this.units.push(unit)
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
        return this.getUnits().filter(unit => {
            for (const iComponentClass in componentClasses){
                const componentClass = componentClasses[iComponentClass]
                if(componentClasses.hasOwnProperty(componentClass) && !unit.getComponent(componentClass)){
                    return false
                }
            }
            return true
        })
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