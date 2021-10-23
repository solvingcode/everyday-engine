import PanelMenuItem from '../../panel/PanelMenuItem.js'
import EditAnimationFormWrapperMenuItem from './EditAnimationFormWrapperMenuItem.js'
import World from '../../../../world/World.js'
import UnitSelector from '../../../../selector/UnitSelector.js'
import CloseWindowMenuItem from '../../window/CloseWindowMenuItem.js'
import {WINDOWS} from '../../../../manager/WindowManager.js'
import CreateAnimationWrapperMenuItem from './CreateAnimationWrapperMenuItem.js'
import ObjectHelper from '../../../../utils/ObjectHelper.js'
import EditAnimationTimelineWrapperMenuItem from './EditAnimationTimelineWrapperMenuItem.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'

export default class EditAnimationBodyMenuItem extends PanelMenuItem {
    /**
     * @param {MenuItem} parent
     */
    constructor(parent) {
        super({
            name: 'Animation',
            zone: parent.zone
        })
        this.items = []
        this.data = {unit: null, animationController: null, animation: null}
    }

    /**
     * @override
     */
    doUpdate() {
        const unit = this.getUnit()
        const animation = this.getAnimation()
        const animations = this.getAnimations()
        const animationController = this.getAnimationController()
        const data = {unit, animationController, animation}
        if (animations && animations.length > 0 && !ObjectHelper.isEqual(this.data, data)) {
            this.data = data
            this.items = [
                new CloseWindowMenuItem(WINDOWS.ANIMATION, this),
                new EditAnimationFormWrapperMenuItem(this, animation)
            ]
            if(animation){
                this.items = [...this.items, ...[
                    new EditAnimationTimelineWrapperMenuItem(this, animation)
                ]]
            }
        } else if (!ObjectHelper.isEqual(this.data, data)) {
            this.data = data
            this.items = [
                new CloseWindowMenuItem(WINDOWS.ANIMATION, this),
                new CreateAnimationWrapperMenuItem(this, this.getUnit(), this.getAnimationController(), this.getAnimation())
            ]
        }
    }

    /**
     * @return {Animation}
     */
    getAnimation() {
        const world = World.get()
        const unit = this.getUnit()
        const animationController = this.getAnimationController()
        if (animationController) {
            const animationComponent = unit.getComponent(AnimationComponent)
            return world.getAnimationManager().findById(animationComponent.getAnimation())
        }
    }

    /**
     * @return {Animation[]}
     */
    getAnimations(){
        const world = World.get()
        const animationController = this.getAnimationController()
        if (animationController) {
            return world.getAnimationManager().findAnimationsByControllerAssetId(animationController.getAssetId())
        }
    }

    /**
     * @return {Unit}
     */
    getUnit() {
        return UnitSelector.get().getFirstSelected(World.get())
    }

    /**
     * @return {AScript}
     */
    getAnimationController() {
        const world = World.get()
        const unit = this.getUnit()
        if (unit) {
            return world.getUnitManager().getUnitAnimationController(world, this.getUnit())
        }
    }
}