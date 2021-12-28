import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import EditAnimationFormMenuItem from './EditAnimationFormMenuItem.js'
import EditAnimationActionsMenuItem from './EditAnimationActionsMenuItem.js'
import EditAnimationSelectMenuItem from './EditAnimationSelectMenuItem.js'

export default class EditAnimationFormWrapperMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AnimationComponent} animationComponent
     * @param {Animation} animation
     * @param {Unit} unit
     */
    constructor(parent, animation, animationComponent, unit) {
        super({
            name: 'animation-form-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new EditAnimationSelectMenuItem(this, animation)
        ]
        if (animation) {
            this.items = [...this.items, ...[
                new EditAnimationActionsMenuItem(this, animation, animationComponent, unit),
                new EditAnimationFormMenuItem(this, animation)
            ]]
        }
    }

}
