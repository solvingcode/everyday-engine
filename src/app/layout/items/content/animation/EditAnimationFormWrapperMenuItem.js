import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import EditAnimationFormMenuItem from './EditAnimationFormMenuItem.js'
import EditAnimationActionsMenuItem from './EditAnimationActionsMenuItem.js'

export default class EditAnimationFormWrapperMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     */
    constructor(parent, animation) {
        super({
            name: 'animation-form-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new EditAnimationActionsMenuItem(this, animation),
            new EditAnimationFormMenuItem(this, animation)
        ]
    }

}
