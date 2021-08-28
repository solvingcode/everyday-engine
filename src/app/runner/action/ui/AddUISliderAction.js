import Action from '../Action.js'
import World from '../../../world/World.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'
import Vector from '../../../utils/Vector.js'
import UISliderUnitInstant from '../../../unit/instant/type/internal/ui/slider/UISliderUnitInstant.js'
import UISliderFillUnitInstant from '../../../unit/instant/type/internal/ui/slider/UISliderFillUnitInstant.js'
import UISliderHandleUnitInstant from '../../../unit/instant/type/internal/ui/slider/UISliderHandleUnitInstant.js'
import UIImageUnitInstant from '../../../unit/instant/type/internal/ui/UIImageUnitInstant.js'

export default class AddUISliderAction extends Action {

    static STATE = 'ACTION_ADD_UI_SLIDER'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const unitSlider = world.createUnitInstant(UISliderUnitInstant)
        const unitSliderBackground = world.createChildUnitInstant(UIImageUnitInstant, unitSlider)
        const unitSliderFill = world.createChildUnitInstant(UISliderFillUnitInstant, unitSlider)
        const unitSliderHandle = world.createChildUnitInstant(UISliderHandleUnitInstant, unitSlider)
        unitSlider.getComponent(TransformComponent).setScale(new Vector({x: 10, y: 2}))
        unitSliderBackground.getComponent(TransformComponent).setScale(new Vector({x: 10, y: 2}))
        unitSliderFill.getComponent(TransformComponent).setScale(new Vector({x: 1, y: 2}))
        unitSliderHandle.getComponent(TransformComponent).setScale(new Vector({x: 2, y: 2}))
        return true
    }

}