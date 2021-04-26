import Layout from '../../Layout.js'
import FormMenuItem from '../form/FormMenuItem.js'
import World from '../../../world/World.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

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
        const meshComponent = this.getFormObject().getComponent(MeshComponent)
        meshComponent.setGenerated(false)
    }

    /**
     * @override
     * @return {Unit}
     */
    getFormObject() {
        return UnitSelector.get().getFirstSelected(World.get())
    }

}