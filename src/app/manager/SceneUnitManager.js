import UnitManager from './UnitManager.js'

/**
 * Manage the units, components list (get, add, load, ...)
 *
 * @property {Unit[]} units
 */
export default class SceneUnitManager extends UnitManager {

    /**
     * @type {World}
     */
    world

    /**
     * @param {World} world
     */
    constructor(world) {
        super()
        this.world = world
    }

    /**
     * @param {Unit} unit
     * @return {UnitManager}
     */
    getUnitManagerByUnit(unit){
        return this.world.getSceneUnitManager(unit)
    }

    /**
     * @return {UnitManager}
     */
    getActiveUnitManager(){
        return this.world.getActiveUnitManager()
    }

    /**
     * @param {Unit} unit
     */
    addUnit(unit) {
        super.addUnit(unit)
        this.getActiveUnitManager().addUnit(unit)
    }

    /**
     * @param {Unit} unit
     */
    deleteUnit(unit) {
        super.deleteUnit(unit)
        return this.getUnitManagerByUnit(unit).deleteUnit(unit)
    }

    /**
     * @param {Unit} unit
     */
    moveUnitUp(unit) {
        super.moveUnitUp(unit)
        this.getUnitManagerByUnit(unit).moveUnitUp(unit)
    }

    /**
     * @param {Unit} unit
     */
    moveUnitDown(unit) {
        super.moveUnitDown(unit)
        this.getUnitManagerByUnit(unit).moveUnitDown(unit)
    }

    /**
     * @param {Unit} unit
     * @return {Unit}
     */
    clone(unit) {
        super.clone(unit)
        this.getUnitManagerByUnit(unit).clone(unit)
    }

    /**
     * @param {Scene} scene
     * @return {Unit[]}
     */
    findUnitsInScene(scene){
        return this.units.filter(unit => scene.getUnitManager().hasUnit(unit))
    }

}