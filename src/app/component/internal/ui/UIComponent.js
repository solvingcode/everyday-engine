import Component from '../../Component.js'

export default class UIComponent extends Component {

    constructor() {
        super('UI')
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