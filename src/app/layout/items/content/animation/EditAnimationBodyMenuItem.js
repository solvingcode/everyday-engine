import PanelMenuItem from '../../panel/PanelMenuItem.js'
import EditAnimationFormWrapperMenuItem from './EditAnimationFormWrapperMenuItem.js'
import World from '../../../../world/World.js'
import UnitSelector from '../../../../selector/UnitSelector.js'
import CloseWindowMenuItem from '../../window/CloseWindowMenuItem.js'
import {WINDOWS} from '../../../../manager/WindowManager.js'
import CreateAnimationWrapperMenuItem from './CreateAnimationWrapperMenuItem.js'
import ObjectHelper from '../../../../utils/ObjectHelper.js'
import EditAnimationTimelineWrapperMenuItem from './EditAnimationTimelineWrapperMenuItem.js'

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
        const animationController = this.getAnimationController()
        const data = {unit, animationController, animation}
        if (animation && !ObjectHelper.isEqual(this.data, data)) {
            this.data = data
            this.items = [
                new CloseWindowMenuItem(WINDOWS.ANIMATION, this),
                new EditAnimationFormWrapperMenuItem(this, animation),
                new EditAnimationTimelineWrapperMenuItem(this, animation)
            ]
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
        const animationController = this.getAnimationController()
        if (animationController) {
            const animations = world.getAnimationManager().findAnimationsByControllerAssetId(animationController.getAssetId())
            if (animations.length > 0) {
                return animations.find(animation => animation.getSelected()) || animations[0]
            }
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