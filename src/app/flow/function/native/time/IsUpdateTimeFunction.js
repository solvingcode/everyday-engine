import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class IsUpdateTimeFunction extends AFunction{

    constructor() {
        super('IsUpdateTime')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('nextTimeVariable', TYPES.STRING)
        this.addInput('updateRate', TYPES.NUMBER, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const nextTimeVariable = this.getInputValue('nextTimeVariable')
        const updateRate = this.getInputValue('updateRate')
        const nexTimeUpdate = scriptComponent.getValue(nextTimeVariable)
        const timeNow = Date.now()
        const isUpdate = timeNow > nexTimeUpdate
        if(isUpdate || !nexTimeUpdate){
            scriptComponent.setValue(nextTimeVariable, timeNow + updateRate)
        }
        this.setOutputValue(isUpdate)
    }
}