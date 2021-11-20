import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'

export default class EditCrudFormMenuItem  extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {*} bindObject
     */
    constructor(parent, bindObject) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent, bindObject)
    }

    /**
     * @override
     */
    generateFields() {
        return this.data.generateFields()
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data
    }

}