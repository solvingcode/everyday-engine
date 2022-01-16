import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import UnitSelector from '../../../../selector/UnitSelector.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'
import ScriptHelper from '../../../../utils/ScriptHelper.js'

export default class EditAnimationSelectMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
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
        const world = World.get()
        const unit = this.getUnit()
        const animationController = world.getUnitManager().getUnitAnimationController(world, unit)
        let list = []
        if (animationController) {
            list = ScriptHelper.getAnimations(animationController, world)
                .filter(animation => animation)
                .map(animation =>
                ({value: animation.getId(), label: animation.getName()}))
        }
        return [
            {
                bind: 'animation',
                label: '',
                type: Layout.form.DROPDOWN,
                list
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.getUnit().getComponent(AnimationComponent)
    }

    /**
     * @return {Unit}
     */
    getUnit() {
        return UnitSelector.get().getFirstSelected(World.get())
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && !!this.getUnit()
    }

}
