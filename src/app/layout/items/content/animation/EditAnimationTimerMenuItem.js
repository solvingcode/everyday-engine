import Layout from '../../../Layout.js'
import FormMenuItem from '../../form/FormMenuItem.js'

export default class EditAnimationTimerMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {KeyFrame} keyframe
     */
    constructor(parent, keyframe) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent)
        this.data = keyframe
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'time',
                label: '',
                type: Layout.form.RANGE,
                options: {
                    min: 0,
                    max: 1,
                    step: 0.1
                }
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