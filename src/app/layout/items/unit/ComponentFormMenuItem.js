import Layout from '../../Layout.js'
import FormMenuItem from '../form/FormMenuItem.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import World from '../../../world/World.js'
import CameraComponent from '../../../component/internal/CameraComponent.js'
import LightComponent from '../../../component/internal/LightComponent.js'

export default class ComponentFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent)
    }

    /**
     * @override
     */
    generateFields() {
        return this.getFormObject().getFormFields(World.get(), UnitSelector.get())
    }

    /**
     * @override
     */
    postUpdate(value) {
        const formObject = this.getFormObject()
        const selectedUnit = UnitSelector.get().getFirstSelected(World.get())
        if (formObject instanceof MeshComponent ||
            formObject instanceof TransformComponent||
            formObject instanceof CameraComponent) {
            selectedUnit.getComponent(MeshComponent).setGenerated(false)
        } else if(formObject instanceof LightComponent){
            formObject.setGenerated(false)
            const meshComponent = selectedUnit.getComponent(MeshComponent)
            if(meshComponent){
                meshComponent.setGenerated(false)
            }
        }
    }

    /**
     * @override
     */
    getFormObject() {
        return this.parent.data.bind
    }
}