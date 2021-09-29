import GameInputPreferenceData from '../../project/data/GameInputPreferenceData.js'
import DynamicAttribute from '../../pobject/DynamicAttribute.js'
import {TYPES} from '../../pobject/AttributeType.js'
import {KeyCode} from '../../core/Keyboard.js'
import ClientError from '../../exception/type/ClientError.js'
import {GAME_INPUTS} from './GameInput.js'

export default class GameInputPreference extends GameInputPreferenceData {

    init() {
        this.addInput(GAME_INPUTS.RIGHT, 'D', new DynamicAttribute('value', TYPES.NUMBER, 1))
        this.addInput(GAME_INPUTS.LEFT, 'Q', new DynamicAttribute('value', TYPES.NUMBER, -1))
        this.addInput(GAME_INPUTS.UP, 'Z', new DynamicAttribute('value', TYPES.NUMBER, -1))
        this.addInput(GAME_INPUTS.DOWN, 'S', new DynamicAttribute('value', TYPES.NUMBER, 1))
        this.addInput(GAME_INPUTS.JUMP, 'SPACE', new DynamicAttribute('value', TYPES.NUMBER, 1))
        this.addInput(GAME_INPUTS.ATTACK, 'P', new DynamicAttribute('value', TYPES.NUMBER, 1))
    }

    /**
     * @param {string} name
     * @return {GameInput}
     */
    get(name) {
        return this.findByName(name)
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