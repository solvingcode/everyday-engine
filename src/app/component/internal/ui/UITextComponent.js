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

}