import Runner from '../Runner.js'
import World from '../../world/World.js'
import ExecutorRegistry from '../../executor/ExecutorRegistry.js'

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
        const world = World.get()
        const graphManager = world.getGraphManager()
        const script = world.getScriptManager().getSelected(world.getTabManager())
        let units, camera
        if(script){
            const graphUnits = graphManager.getGraphUnits()
            const graphEdges = graphManager.getGraphEdges()
            units = [].concat(graphUnits).concat(graphEdges)
            camera = script.getCamera()
        }else{
            units = world.getUnitManager().getUnits()
            camera = world.getCamera()
        }
        units.forEach(unit => {
            ExecutorRegistry.get().execute(unit, {camera})
        })
    }

}