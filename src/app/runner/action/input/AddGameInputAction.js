import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import DynamicAttribute from '../../../pobject/DynamicAttribute.js'
import {TYPES} from '../../../pobject/AttributeType.js'

export default class AddGameInputAction extends Action {

    static STATE = 'ACTION_ADD_GAME_INPUT'

    /**
     * @override
     */
    static run() {
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        const gameInput = World.get().getPreference().getGameInput()
        gameInput.addInput(formData.getName(), formData.getKey(),
            new DynamicAttribute('value', TYPES.NUMBER, parseInt(formData.getValue())))
        return true
    }

}