import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class CameraComponent extends Component {

    constructor() {
        super('Camera')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('unitFollow', TYPES.UNIT)
    }

    /**
     * @return {number}
     */
    getUnitFollow() {
        return this.getValue('unitFollow')
    }

    /**
     * @param {number} unitFollow
     */
    setUnitFollow(unitFollow) {
        this.setValue('unitFollow', unitFollow)
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }
}