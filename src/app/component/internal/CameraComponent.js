import Component from '../Component.js'

export default class CameraComponent extends Component{

    constructor() {
        super('Camera')
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

    /**
     * @override
     */
    isRemovable() {
        return false
    }
}