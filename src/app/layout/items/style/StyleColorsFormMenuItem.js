import Layout from '../../Layout.js'
import EntitySelector from '../../../world/manager/EntitySelector.js'
import FormMenuItem from '../form/FormMenuItem.js'
import World from '../../../world/World.js'

/**
 * @class {StyleColorsFormMenuItem}
 */
export default class StyleColorsFormMenuItem extends FormMenuItem {
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
                bind: 'props.style.color',
                label: 'Stroke Color',
                type: Layout.form.COLOR
            },
            {
                bind: 'props.style.colorOpacity',
                label: 'Stroke Opacity',
                type: Layout.form.RANGE,
                options: {
                    min: 0,
                    max: 1,
                    step: 0.01
                }
            },
            {
                bind: 'props.style.fillColor',
                label: 'Fill Color',
                type: Layout.form.COLOR
            },
            {
                bind: 'props.style.fillColorOpacity',
                label: 'Fill Opacity',
                type: Layout.form.RANGE,
                options: {
                    min: 0,
                    max: 1,
                    step: 0.01
                }
            }
        ]
    }

    /**
     * @override
     */
    postUpdate(value) {
        this.getFormObject().setGenerated(false)
    }

    /**
     * @override
     */
    getFormObject() {
        return EntitySelector.get().getFirstSelected(World.get())
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && World.get().getEntityManager().isBodyEntity(this.getFormObject())
    }

}