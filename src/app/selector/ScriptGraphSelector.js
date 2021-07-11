import UnitSelector from './UnitSelector.js'
import MeshComponent from '../component/internal/MeshComponent.js'

export default class ScriptGraphSelector extends UnitSelector {

    static instance

    /**
     * @override
     * @param {World} world
     * @return {Unit[]}
     */
    getUnits(world){
        return world ? world.getGraphManager().getGraphUnits()
            .filter(unit => unit.getComponent(MeshComponent).isEnabled()) : []
    }

    /**
     * @return {ScriptGraphSelector}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}