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
        this.add('opacity', TYPES.RANGE, 0, [0, 1, 0.001])
        this.add('intensity', TYPES.NUMBER, 1)
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
     * @return {number}
     */
    getOpacity(){
        return this.getValue('opacity')
    }

    /**
     * @param {number} opacity
     */
    setOpacity(opacity){
        this.setValue('opacity', opacity)
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