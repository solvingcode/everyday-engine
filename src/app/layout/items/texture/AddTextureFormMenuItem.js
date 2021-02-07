import FormMenuItem from '../form/FormMenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

/**
 * @class {AddTextureFormMenuItem}
 */
class AddTextureFormMenuItem extends FormMenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'texture',
                label: 'Add Texture',
                type: Layout.form.FILE
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getTextureManager()
    }
}

export default AddTextureFormMenuItem