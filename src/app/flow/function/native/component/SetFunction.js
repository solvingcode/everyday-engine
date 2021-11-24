import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'

export default class SetFunction extends AFunction{

    constructor() {
        super('Set')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('component', TYPES.COMPONENT, 0)
        this.addInput('attribute', TYPES.STRING)
        this.addInput('value', TYPES.STRING)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const classComponent = this.getInputValue('component')
        const attribute = this.getInputValue('attribute')
        const value = this.getInputValue('value')
        const component = unit.getComponent(classComponent)
        component.setValue(attribute, value)
        if(classComponent === MeshComponent){
            component.setGenerated(false)
        }
    }
}