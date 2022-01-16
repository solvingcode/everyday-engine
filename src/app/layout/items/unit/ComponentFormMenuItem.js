import Layout from '../../Layout.js'
import FormMenuItem from '../form/FormMenuItem.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import World from '../../../world/World.js'
import CameraComponent from '../../../component/internal/CameraComponent.js'
import LightComponent from '../../../component/internal/LightComponent.js'
import StyleComponent from '../../../component/internal/StyleComponent.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import Storage from '../../../core/Storage.js'
import UITransformComponent from '../../../component/internal/ui/UITransformComponent.js'
import AnimationComponent from '../../../component/internal/AnimationComponent.js'
import TextComponent from '../../../component/internal/TextComponent.js'

export default class ComponentFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {*} data
     */
    constructor(parent, data) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        }, parent, data)
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
            const animationComponent = unitRecording.getComponent(AnimationComponent)
            const targetUnit = UnitSelector.get().getFirstSelected(world)
            const childUnit = unitRecording !== targetUnit ? targetUnit : null
            animation.setFrame(animationComponent.getTime(), childUnit, bindObject.getName(),
                bindAttribute, bindObject.get(bindAttribute))
            AssetHelper.regenerate(animationAsset, animation, Storage.get())
            return false
        }
        return true
    }

    /**
     * @override
     */
    postUpdate(value, menuItem) {
        const formObject = this.getFormObject()
        const world = World.get()
        const selectedUnit = UnitSelector.get().getFirstSelected(world)
        this.postUpdateUnit(formObject, selectedUnit)
    }

    /**
     * @param {Component} component
     * @param {Unit} unit
     */
    postUpdateUnit(component, unit) {
        if (component instanceof MeshComponent ||
            component instanceof TransformComponent ||
            component instanceof CameraComponent ||
            component instanceof StyleComponent ||
            component instanceof TextComponent) {
            const meshComponent = unit.getComponent(MeshComponent)
            meshComponent && meshComponent.setGenerated(false)
            if (component instanceof TransformComponent) {
                const uiTransformComponent = unit.getComponent(UITransformComponent)
                if (uiTransformComponent) {
                    uiTransformComponent.setLastAnchorMin(null)
                    uiTransformComponent.setLastAnchorMax(null)
                }
            }
        } else if (component instanceof LightComponent) {
            component.setGenerated(false)
            const meshComponent = unit.getComponent(MeshComponent)
            if (meshComponent) {
                meshComponent.setGenerated(false)
            }
        }
    }

    /**
     * @override
     * @param {Component} object
     * @param {string} fieldName
     */
    cleanFloatingField(object, fieldName) {
        object.deleteAttribute(fieldName)
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.bind
    }
}