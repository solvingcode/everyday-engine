import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import ClientError from '../../../exception/type/ClientError.js'
import UnitSelector from '../../../selector/UnitSelector.js'

export default class AttachComponentAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_ATTACH_COMPONENT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const componentRegistry = world.getComponentRegistry()
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        const selectedUnit = UnitSelector.get().getFirstSelected(world)
        const component = componentRegistry.getInstance(formData.getName())
        if (component) {
            selectedUnit.createComponent(component.constructor)
            formData.setName('')
        } else {
            throw new ClientError(`Component "${formData.getName()}" not found`)
        }
        return true
    }

}