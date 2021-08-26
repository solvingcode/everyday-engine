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
    getSceneManagerByUnit(unit){
        return this.world.getSceneUnitManager(unit)
    }

    /**
     * @return {UnitManager}
     */
    getActiveUnitManager(){
        return this.world.getActiveUnitManager()
    }

    /**
     * @return {UnitManager}
     */
    getSelectedUnitManager(){
        const selectedScene = this.world.getSceneManager().getSelected()
        return selectedScene && selectedScene.getUnitManager()
    }

    /**
     * @param {Unit} unit
     */
    addUnit(unit) {
        super.addUnit(unit)
        const parentUnit = this.world.getUnitManager().findParentUnit(unit)
        const targetUnitManager = (parentUnit && this.getSceneManagerByUnit(parentUnit)) ||
            this.getSelectedUnitManager() || this.getActiveUnitManager()
        targetUnitManager.addUnit(unit)
    }

    /**
     * @param {Unit} unit
     */
    deleteUnit(unit) {
        super.deleteUnit(unit)
        return this.getSceneManagerByUnit(unit).deleteUnit(unit)
    }

    /**
     * @param {Unit} unit
     */
    moveUnitUp(unit) {
        super.moveUnitUp(unit)
        this.getSceneManagerByUnit(unit).moveUnitUp(unit)
    }

    /**
     * @param {Unit} unit
     */
    moveUnitDown(unit) {
        super.moveUnitDown(unit)
        this.getSceneManagerByUnit(unit).moveUnitDown(unit)
    }

    /**
     * @param {Scene} scene
     * @return {Unit[]}
     */
    findUnitsInScene(scene){
        return this.units.filter(unit => scene.getUnitManager().hasUnit(unit))
    }

}