import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import StyleComponent from '../../../../component/internal/StyleComponent.js'

export default class SetColorFunction extends AFunction {

    constructor() {
        super('SetColor')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('color', TYPES.STRING)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit) {
        const target = this.getInputValue('target')
        const color = this.getInputValue('color')
        const styleComponent = target.getComponent(StyleComponent)
        styleComponent.getStyle().setFillColor(color)
    }
}