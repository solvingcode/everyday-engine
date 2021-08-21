import Component from '../../Component.js'

export default class UIElementComponent extends Component {

    constructor() {
        super('UI Element')
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
    }

    /**
     * @override
     */
    isHidden() {
        return true
    }

}