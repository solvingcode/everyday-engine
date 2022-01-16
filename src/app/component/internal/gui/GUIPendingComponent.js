import Component from '../../Component.js'

export default class GUIPendingComponent extends Component{

    /**
     * @override
     */
    isHidden() {
        return true
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @override
     */
    initAttributes() {
    }
}