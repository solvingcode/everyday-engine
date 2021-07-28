import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'

/**
 * @abstract
 */
export default class LightComponent extends Component{

    constructor(name) {
        super(name || 'Light')
    }
    /**
     * @override
     */
    initAttributes() {
        this.add('intensity', TYPES.NUMBER, 0.5)
        this.add('color', TYPES.STRING, '#000000')
    }

    /**
     * @return {number}
     */
    getIntensity(){
        return this.getValue('intensity')
    }

    /**
     * @param {number} intensity
     */
    setIntensity(intensity){
        this.setValue('intensity', intensity)
    }

    /**
     * @return {string}
     */
    getColor(){
        return this.getValue('color')
    }

    /**
     * @param {string} color
     */
    setColor(color){
        this.setValue('color', color)
    }

}