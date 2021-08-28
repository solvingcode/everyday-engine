import Component from '../../../Component.js'

export default class UISliderFillComponent extends Component {

    constructor() {
        super('UI Slider Fill')
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