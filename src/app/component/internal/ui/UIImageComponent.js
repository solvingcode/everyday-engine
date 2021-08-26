import Component from '../../Component.js'

export default class UIImageComponent extends Component {

    constructor() {
        super('UI Image')
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

}