import Layout from '../../Layout.js'
import FormMenuItem from '../form/FormMenuItem.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import World from '../../../world/World.js'
import CameraComponent from '../../../component/internal/CameraComponent.js'
import LightComponent from '../../../component/internal/LightComponent.js'
import StyleComponent from '../../../component/internal/StyleComponent.js'
import UITextComponent from '../../../component/internal/ui/UITextComponent.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import Storage from '../../../core/Storage.js'
import UITransformComponent from '../../../component/internal/ui/UITransformComponent.js'

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
    preUpdate(value, menuItem) {
        const world = World.get()
        const animationManager = world.getAnimationManager()
        const animation = animationManager.getAnimationRecording()
        if (animation) {
            const animationAsset = world.getAssetsManager().findAssetById(animation.getAssetId())
            const formMenuItem = menuItem.getFormMenuItem()
            const bindObject = _.cloneDeep(formMenuItem.getBindObject())
            const bindFields = menuItem.getDataBind().bind.split('.')
            const bindAttribute = bindFields[0]
            const setter = formMenuItem.getSetter(menuItem.getDataBind(), {bindObject})
            setter(value)
            const unitRecording = animationManager.getUnitRecording()
            const targetUnit = UnitSelector.get().getFirstSelected(world)
            const childUnit = unitRecording !== targetUnit ? targetUnit : null
            animation.setFrame(animation.getTime(), childUnit, bindObject.getName(),
                bindAttribute, bindObject.get(bindAttribute))
            AssetHelper.regenerate(animationAsset, animation, Storage.get())
            return false
        }
        return true
    }

    /**
     * @override
     */
    postUpdate(value) {
        const formObject = this.getFormObject()
        const world = World.get()
        const selectedUnit = UnitSelector.get().getFirstSelected(world)
        if (formObject instanceof MeshComponent ||
            formObject instanceof TransformComponent ||
            formObject instanceof CameraComponent ||
            formObject instanceof StyleComponent ||
            formObject instanceof UITextComponent) {
            const meshComponent = selectedUnit.getComponent(MeshComponent)
            meshComponent && meshComponent.setGenerated(false)
            if(formObject instanceof TransformComponent){
                const uiTransformComponent = selectedUnit.getComponent(UITransformComponent)
                if (uiTransformComponent) {
                    uiTransformComponent.setLastAnchorMin(null)
                    uiTransformComponent.setLastAnchorMax(null)
                }
            }
        } else if (formObject instanceof LightComponent) {
            formObject.setGenerated(false)
            const meshComponent = selectedUnit.getComponent(MeshComponent)
            if (meshComponent) {
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