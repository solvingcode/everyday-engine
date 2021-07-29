import Runner from '../Runner.js'
import World from '../../world/World.js'
import LightComponent from '../../component/internal/LightComponent.js'

export default class LightRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute() {
        const world = World.get()
        world.getLightsNotGenerated()
            .forEach(unit => {
                const lightComponent = unit.findComponentsByClass(LightComponent)[0]
                lightComponent.setGenerated(true)
            })
    }

}