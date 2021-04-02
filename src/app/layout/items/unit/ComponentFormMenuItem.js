import Layout from '../../Layout.js'
import FormMenuItem from '../form/FormMenuItem.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

export default class ComponentFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent)
    }

    /**
     * @override
     */
    generateFields() {
        return this.getFormObject().getFormFields()
    }

    /**
     * @override
     */
    postUpdate(value) {
        const formObject = this.getFormObject()
        if(formObject instanceof MeshComponent){
            formObject.setGenerated(false)
        }
    }

    /**
     * @override
     */
    getFormObject() {
        return this.parent.data.bind
    }
}