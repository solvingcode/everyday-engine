import Component from '../../Component.js'

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
    initAttributes() {
    }

}