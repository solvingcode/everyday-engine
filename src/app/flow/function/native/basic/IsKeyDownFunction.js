import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Window from '../../../../core/Window.js'

export default class IsKeyDownFunction extends AFunction{

    constructor() {
        super('IsKeyDown')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('key', TYPES.NUMBER, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute(functionRegistry) {
        const keyboard = Window.get().keyboard
        const key = parseInt(this.getInputValue('key'))
        this.setOutputValue(keyboard.isKeyPressed(key))
    }
}