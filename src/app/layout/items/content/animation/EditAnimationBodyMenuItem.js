import PanelMenuItem from '../../panel/PanelMenuItem.js'
import EditAnimationFormWrapperMenuItem from './EditAnimationFormWrapperMenuItem.js'
import World from '../../../../world/World.js'
import UnitSelector from '../../../../selector/UnitSelector.js'
import CloseWindowMenuItem from '../../window/CloseWindowMenuItem.js'
import {WINDOWS} from '../../../../manager/WindowManager.js'
import CreateAnimationWrapperMenuItem from './CreateAnimationWrapperMenuItem.js'
import ObjectHelper from '../../../../utils/ObjectHelper.js'
import EditAnimationTimelineWrapperMenuItem from './EditAnimationTimelineWrapperMenuItem.js'
import UnitHelper from '../../../../utils/UnitHelper.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'

export default class EditAnimationBodyMenuItem extends PanelMenuItem {
    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            name: 'Animation',
            zone: parent.zone
        }, parent)
        this.items = []
        this.data = {unit: null, animationController: null, animation: null}
    }

    /**
     * @override
     */
    doUpdate() {
        const unit = this.getUnit()
        if (unit) {
            const animation = this.getAnimation()
            const animations = this.getAnimations()
            const animationController = this.getAnimationController()
            const animationComponent = unit.getComponent(AnimationComponent)
            const data = {unit, animationController, animation}
            if (animations && animations.length > 0 && !ObjectHelper.isEqual(this.data, data)) {
                this.data = data
                this.items = [
                    new CloseWindowMenuItem(WINDOWS.ANIMATION, this),
                    new EditAnimationFormWrapperMenuItem(this, animation, animationComponent, unit)
                ]
                if (animation) {
                    this.items = [...this.items, ...[
                        new EditAnimationTimelineWrapperMenuItem(this, animation, animationComponent)
                    ]]
                }
                return true
            } else if (!ObjectHelper.isEqual(this.data, data)) {
                this.data = data
                this.items = [
                    new CloseWindowMenuItem(WINDOWS.ANIMATION, this),
                    new CreateAnimationWrapperMenuItem(this, this.getUnit(), this.getAnimationController(), this.getAnimation())
                ]
                return true
            }
        }
    }

    /**
     * @return {Animation}
     */
    getAnimation() {
        const world = World.get()
        return world.getAnimationManager().getAnimationRecording() || UnitHelper.getAnimation(world, this.getUnit())
    }

    /**
     * @return {Animation[]}
     */
    getAnimations() {
        return UnitHelper.getAnimations(World.get(), this.getUnit())
    }

    /**
     * @return {Unit}
     */
    getUnit() {
        const world = World.get()
        return world.getAnimationManager().getUnitRecording() || UnitSelector.get().getFirstSelected(World.get())
    }

    /**
     * @return {AScript}
     */
    getAnimationController() {
        return UnitHelper.getAnimationController(World.get(), this.getUnit())
    }
}