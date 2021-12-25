import AFunction from '../AFunction.js'
import {TYPES} from '../../../pobject/AttributeType.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'

export default class AClassAnimation extends AFunction{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(name)
        this.addOutput(TYPES.ANIMATION)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world, executionContext) {
        this.setOutputValue(world.getAnimationManager()
            .findByName(ScriptHelper.extractFromPublicAnimation(this.getName()).animation))
    }

    /**
     * @override
     */
    initAttributes(params) {
    }
}