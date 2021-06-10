import FormMenuItem from '../../../form/FormMenuItem.js'
import Layout from '../../../../Layout.js'
import {NODE_TYPES} from '../../../../../flow/node/ANode.js'
import World from '../../../../../world/World.js'

export default class AddScriptNodeFormAnimationMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddScriptNodeForm} addNodeForm
     */
    constructor(parent, addNodeForm) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {addNodeForm}
    }

    /**
     * @override
     */
    generateFields() {
        const animations = World.get().getAnimationManager().getAnimations()
            .map(animation => ({
                value: animation.getId(),
                label: animation.getName()
            }))
        return [
            {
                bind: 'value',
                label: 'Animation',
                type: Layout.form.DROPDOWN,
                list: animations
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.addNodeForm
    }

    isValid() {
        return super.isValid() && this.getFormObject().getType() === NODE_TYPES.ANIMATION
    }
}