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
        this.add('intensity', TYPES.RANGE, 0.5, [0, 1, 0.01])
        this.add('color', TYPES.COLOR, '#FFFFFF')
        this.add('generated', TYPES.BOOLEAN, false)
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

    /**
     * @param {boolean} generated
     */
    setGenerated(generated){
        this.setValue('generated', generated)
    }

    /**
     * @return {boolean}
     */
    getGenerated(){
        return this.getValue('generated')
    }

    /**
     * @return {boolean}
     */
    isGenerated(){
        return this.getGenerated()
    }

}