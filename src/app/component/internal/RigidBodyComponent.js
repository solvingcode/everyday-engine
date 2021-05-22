import Component from '../Component.js'

export default class RigidBodyComponent extends Component{

    constructor() {
        super('RigidBody')
    }

    /**
     * @override
     */
    initAttributes() {
    }

    /**
     * @override
     */
    getFormFields() {
        return []
    }

}