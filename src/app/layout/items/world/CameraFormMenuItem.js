import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import FormMenuItem from '../form/FormMenuItem.js'
import CameraComponent from '../../../component/internal/CameraComponent.js'

/**
 * @class {CameraFormMenuItem}
 */
export default class CameraFormMenuItem extends FormMenuItem {
    constructor(parent) {
        super({
            name: 'Camera',
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
        const cameraUnits = World.get().getUnitManager().getUnitsHasComponents([CameraComponent])
            .map(unit => ({value: unit.getId(), label: unit.getName()}))

        return [
            {
                bind: 'cameraUnitId',
                label: 'Camera',
                type: Layout.form.DROPDOWN,
                list: cameraUnits
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get()
    }
}