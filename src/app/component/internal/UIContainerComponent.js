import Component from '../Component.js'

export default class UIContainerComponent extends Component {

    constructor() {
        super('UIContainer')
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