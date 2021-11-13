import Component from '../../Component.js'
import {TYPES} from '../../../pobject/AttributeType.js'

export default class UIContainerComponent extends Component {

    constructor() {
        super('UI Container')
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
    isRemovable() {
        return false
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('intractable', TYPES.BOOLEAN, true)
        this.add('buttonIntractableIndex', TYPES.NUMBER, -1)
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['buttonIntractableIndex']
    }

    /**
     * @return {boolean}
     */
    getIntractable() {
        return this.getValue('intractable')
    }

    /**
     * @param {boolean} intractable
     */
    setIntractable(intractable) {
        this.setValue('intractable', intractable)
    }

    /**
     * @return {number}
     */
    getButtonIntractableIndex() {
        return this.getValue('buttonIntractableIndex')
    }

    /**
     * @param {number} buttonIntractableIndex
     */
    setButtonIntractableIndex(buttonIntractableIndex) {
        this.setValue('buttonIntractableIndex', buttonIntractableIndex)
    }

}