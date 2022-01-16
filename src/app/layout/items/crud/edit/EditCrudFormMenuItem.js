import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

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
        return this.data.generateFields(World.get())
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data
    }

}