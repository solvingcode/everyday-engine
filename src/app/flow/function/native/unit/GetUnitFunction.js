import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'

export default class GetUnitFunction extends AFunction{

    constructor() {
        super('GetUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('name', TYPES.STRING, 0)
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute() {
        const name = this.getInputValue('name')
        const unit = World.get().findUnitByName(name)
        if(!unit){
            throw new TypeError(`GetUnit: ${name} not found`)
        }
        this.setOutputValue(unit.getId())
    }
}