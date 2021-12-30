import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class AddCrudFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {*} formData
     */
    constructor(parent, formData) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent, {formData})
    }

    /**
     * @override
     */
    generateFields() {
        return this.data.formData.generateFields(World.get())
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.formData
    }
}