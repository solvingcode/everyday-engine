import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import UnitSelector from '../../../../selector/UnitSelector.js'

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
        const form = new SelectAnimationForm()
        form.setAnimationId(animation.getId())
        this.data = form
    }

    /**
     * @override
     */
    generateFields() {
        const world = World.get()
        const unit = this.getUnit()
        const animationController = world.getUnitManager().getUnitAnimationController(world, unit)
        const list = world.getAnimationManager()
            .findAnimationsByControllerAssetId(animationController.getAssetId())
            .map(pAnimation => ({value: pAnimation.getId(), label: pAnimation.getName()}))
        return [
            {
                bind: 'animationId',
                label: 'Animation',
                type: Layout.form.DROPDOWN,
                list
            }
        ]
    }

    /**
     * @override
     */
    postUpdate(value) {
        const world = World.get()
        const animation = world.getAnimationManager().findById(this.data.getAnimationId())
        world.getAnimationManager().selectAnimation(animation)
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data
    }

    /**
     * @return {Unit}
     */
    getUnit(){
        return UnitSelector.get().getFirstSelected(World.get())
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && !!this.getUnit()
    }

}

class SelectAnimationForm {

    /**
     * @type {number}
     */
    animationId

    /**
     * @return {number}
     */
    getAnimationId() {
        return this.animationId
    }

    /**
     * @param {number} animationId
     */
    setAnimationId(animationId) {
        this.animationId = animationId
    }

}