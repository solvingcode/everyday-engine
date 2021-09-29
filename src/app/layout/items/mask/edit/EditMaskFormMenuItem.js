import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'

export default class EditMaskFormMenuItem  extends FormMenuItem {
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
        })
        this.parent = parent
        this.data = bindObject
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'name',
                label: 'Name',
                type: Layout.form.TEXT
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data
    }
}