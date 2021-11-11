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

}