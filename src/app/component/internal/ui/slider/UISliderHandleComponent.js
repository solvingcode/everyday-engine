import Component from '../../../Component.js'

export default class UISliderHandleComponent extends Component {

    constructor() {
        super('UI Slider Handle')
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
    }

    /**
     * @override
     */
    isHidden() {
        return true
    }

}