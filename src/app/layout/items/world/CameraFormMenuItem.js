import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import FormMenuItem from '../form/FormMenuItem.js'
import CameraEntity from '../../../entity/types/component/CameraEntity.js'

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
        const cameraEntities = World.get().getEntityManager().getComponentEntities()
            .filter(entity => entity instanceof CameraEntity)
            .map(entity => ({value: entity.id, label: entity.name}))

        return [
            {
                bind: 'cameraEntityId',
                label: 'Camera',
                type: Layout.form.DROPDOWN,
                list: cameraEntities
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