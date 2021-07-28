import {TYPES} from '../../pobject/AttributeType.js'
import LightComponent from './LightComponent.js'

export default class LightPointComponent extends LightComponent{

    constructor() {
        super('Light Point')
    }

    /**
     * @override
     */
    initAttributes() {
        super.initAttributes()
        this.add('innerAngle', TYPES.NUMBER, 360)
        this.add('outerAngle', TYPES.NUMBER, 360)
        this.add('innerRadius', TYPES.NUMBER, 0)
        this.add('outerRadius', TYPES.NUMBER, 100)
    }

    /**
     * @return {number}
     */
    getInnerAngle(){
        return this.getValue('innerAngle')
    }

    /**
     * @param {number} innerAngle
     */
    setInnerAngle(innerAngle){
        this.setValue('innerAngle', innerAngle)
    }

    /**
     * @return {number}
     */
    getOuterAngle(){
        return this.getValue('outerAngle')
    }

    /**
     * @param {number} outerAngle
     */
    setOuterAngle(outerAngle){
        this.setValue('outerAngle', outerAngle)
    }

    /**
     * @return {number}
     */
    getInnerRadius(){
        return this.getValue('innerRadius')
    }

    /**
     * @param {number} innerRadius
     */
    setInnerRadius(innerRadius){
        this.setValue('innerRadius', innerRadius)
    }

    /**
     * @return {number}
     */
    getOuterRadius(){
        return this.getValue('outerRadius')
    }

    /**
     * @param {number} outerRadius
     */
    setOuterRadius(outerRadius){
        this.setValue('outerRadius', outerRadius)
    }

}