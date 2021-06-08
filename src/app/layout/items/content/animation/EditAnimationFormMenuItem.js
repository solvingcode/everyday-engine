import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class EditAnimationFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} form
     */
    constructor(parent, form) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent)
        this.data = form
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'samples',
                label: 'Samples',
                type: Layout.form.TEXT
            }
        ]
    }

    /**
     * @override
     */
    postUpdate(value) {
        const animation = this.getFormObject()
        const animationAsset = World.get().getTabManager().getSelectedContentData()
        animationAsset.generate(animation)
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data
    }

}