import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import TextMenuItem from '../../basic/TextMenuItem.js'
import ButtonMenuItem from '../../basic/ButtonMenuItem.js'
import AddAnimationAction from '../../../../runner/action/animation/AddAnimationAction.js'

export default class CreateAnimationWrapperMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Unit} unit
     * @param {AScript} animationController
     * @param {Animation} animation
     */
    constructor(parent, unit, animationController, animation) {
        super({
            name: 'animation-create-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        if (!unit) {
            this.items = [
                new TextMenuItem(this, 'Select a Unit with an Animation Controller')
            ]
        } else if (!animationController) {
            this.items = [
                new TextMenuItem(this, 'The selected Unit must have an Animation Controller')
            ]
        } else if (!animation) {
            this.items = [
                new TextMenuItem(this, 'No animation found for the selected Unit'),
                new ButtonMenuItem(this, 'Create new animation', AddAnimationAction.STATE, animationController)
            ]
        }
    }

}
