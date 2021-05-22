import GameInputPreferenceData from '../../project/data/GameInputPreferenceData.js'
import GameInput, {GAME_INPUTS} from './GameInput.js'
import DynamicAttribute from '../../pobject/DynamicAttribute.js'
import {TYPES} from '../../pobject/AttributeType.js'
import {KeyCode} from '../../core/Keyboard.js'
import ClientError from '../../exception/type/ClientError.js'

export default class GameInputPreference extends GameInputPreferenceData {

    init() {
        const inputs = [
            new GameInput(GAME_INPUTS.RIGHT, 'D', new DynamicAttribute('value', TYPES.NUMBER, 1)),
            new GameInput(GAME_INPUTS.LEFT, 'Q', new DynamicAttribute('value', TYPES.NUMBER, -1))
        ]
        this.concatInputs(inputs)
    }

    /**
     * @param {string} name
     * @return {GameInput}
     */
    get(name) {
        return this.getInputs().find(input => input.getName() === name)
    }

    /**
     * @param {string} name
     * @return {number}
     */
    getKeyCode(name) {
        const input = this.get(name)
        if (input) {
            return KeyCode[input.getKey()]
        }
        throw new ClientError(`Key for Input "${name}" not configured`)
    }

}