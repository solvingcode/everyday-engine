import Runner from '../Runner.js'
import World from '../../world/World.js'
import ExecutorRegistry from '../../executor/ExecutorRegistry.js'
import Storage from '../../core/Storage.js'

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
        const scriptManager = world.getScriptManager()
        const scriptFunction = scriptManager.getFunctionSelected(world.getTabManager())
        const scriptClass = scriptManager.getSelected(world.getTabManager())
        const lights = world.getLightsNotGenerated()
        const storage = Storage.get()
        let units, camera
        if(scriptClass){
            units = graphManager.getUnits()
            camera = scriptFunction && scriptFunction.getCamera()
        }else{
            units = world.getUnitManager().getEnabledUnits()
            camera = world.getCamera()
        }
        units.forEach(unit => {
            ExecutorRegistry.get().execute(unit, {camera, deltaTime, lights, storage})
        })
    }

}