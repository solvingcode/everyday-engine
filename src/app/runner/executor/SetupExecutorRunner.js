import Runner from '../Runner.js'
import World from '../../world/World.js'
import ExecutorRegistry from '../../executor/ExecutorRegistry.js'

export class SetupExecutorRunner extends Runner {

    /**
     * @type {SetupExecutorRunner}
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
    execute(deltaTime) {
        const world = World.get()
        const graphManager = world.getGraphManager()
        const script = world.getScriptManager().getSelected(world.getTabManager())
        const lights = world.getLightsNotGenerated()
        let units, camera
        if(script){
            units = graphManager.getUnits()
            camera = script.getCamera()
        }else{
            units = world.getUnitManager().getEnabledUnits()
            camera = world.getCamera()
        }
        units.forEach(unit => {
            ExecutorRegistry.get().execute(unit, {camera, deltaTime, lights})
        })
    }

}