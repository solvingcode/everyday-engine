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
            },
            {
                bind: 'lengthSecond',
                label: 'Length (sec)',
                type: Layout.form.TEXT
            }
        ]
    }

    /**
     * @override
     */
    postUpdate(value) {
        const world = World.get()
        const animation = this.data
        const animationAsset = world.getAssetsManager().findAssetById(animation.getAssetId())
        animationAsset.generate(animation)
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data
    }

}