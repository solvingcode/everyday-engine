import UnitSelector from './UnitSelector.js'
import ScriptGraph from '../flow/graph/ScriptGraph.js'

export default class ScriptGraphSelector extends UnitSelector {

    static instance

    /**
     * @override
     * @param {World} world
     * @return {Unit[]}
     */
    getUnits(world){
        return ScriptGraph.get().getGraphUnits()
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