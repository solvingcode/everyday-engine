import Component from '../../Component.js'
import {TYPES} from '../../../pobject/AttributeType.js'

export default class UITextComponent extends Component {

    constructor() {
        super('UI Text')
    }

    /**
     * @override
     */
    isUnique() {
        return true
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('text', TYPES.STRING)
        this.add('fontSize', TYPES.NUMBER, 12)
        this.add('textAlign', TYPES.LIST, null, ['left', 'center', 'right'])
        this.add('verticalAlign', TYPES.LIST, null, ['top', 'middle', 'bottom'])
        this.add('textStyle', TYPES.ARRAY | TYPES.LIST, null, ['bold', 'italic'])
        this.add('fontFamily', TYPES.FONT)
    }

    /**
     * @return {string}
     */
    getText() {
        return this.getValue('text')
    }

    /**
     * @param {string} text
     */
    setText(text) {
        this.setValue('text', text)
    }

    /**
     * @return {number}
     */
    getFontSize() {
        return this.getValue('fontSize')
    }

    /**
     * @param {number} fontSize
     */
    setFontSize(fontSize) {
        this.setValue('fontSize', fontSize)
    }

    /**
     * @return {string}
     */
    getTextAlign() {
        return this.getValue('textAlign')
    }

    /**
     * @param {string} textAlign
     */
    setTextAlign(textAlign) {
        this.setValue('textAlign', textAlign)
    }

    /**
     * @return {string}
     */
    getVerticalAlign() {
        return this.getValue('verticalAlign')
    }

    /**
     * @param {string} verticalAlign
     */
    setVerticalAlign(verticalAlign) {
        this.setValue('verticalAlign', verticalAlign)
    }

    /**
     * @return {number}
     */
    getFontFamily() {
        return this.getValue('fontFamily')
    }

    /**
     * @param {number} fontFamily
     */
    setFontFamily(fontFamily) {
        this.setValue('fontFamily', fontFamily)
    }

    /**
     * @return {string[]}
     */
    getTextStyle() {
        return this.getValue('textStyle')
    }

    /**
     * @param {string[]} textStyle
     */
    setTextStyle(textStyle) {
        this.setValue('textStyle', textStyle)
    }

}