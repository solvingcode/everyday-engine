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
        this.add('innerAngle', TYPES.RANGE, 360, [0, 360, 1])
        this.add('outerAngle', TYPES.RANGE, 360, [0, 360, 1])
        this.add('innerRadius', TYPES.RANGE, 0, [0, 100, 0.01])
        this.add('outerRadius', TYPES.RANGE, 100, [0, 100, 0.01])
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

    /**
     * @override
     */
    setValue(name, value) {
        let validValue = value
        if(name === 'innerAngle'){
            const outerAngle = this.getOuterAngle()
            validValue = outerAngle > parseInt(value) ? value : outerAngle
        }else if(name === 'outerAngle'){
            const innerAngle = this.getInnerAngle()
            validValue = parseInt(value) > innerAngle ? value : innerAngle
        }
        super.setValue(name, validValue)
    }

}