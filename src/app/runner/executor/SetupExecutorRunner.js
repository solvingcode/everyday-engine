import Runner from '../Runner.js'
import World from '../../world/World.js'
import ExecutorRegistry from '../../executor/ExecutorRegistry.js'
import ScriptGraph from '../../flow/graph/ScriptGraph.js'

export class SetupExecutorRunner extends Runner {

    /**
     * @type {GameRenderRunner}
     */
    static instance = null

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute(mouse) {
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        let units
        if(script){
            units = ScriptGraph.get().getGraphUnits()
        }else{
            units = World.get().getUnitManager().getUnits()
        }
        units.forEach(unit => {
            ExecutorRegistry.get().execute(unit)
        })
    }

}