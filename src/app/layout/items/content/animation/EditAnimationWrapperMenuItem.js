import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import EditAnimationBodyMenuItem from './EditAnimationBodyMenuItem.js'
import WindowManager, {WINDOWS} from '../../../../manager/WindowManager.js'

export default class EditAnimationWrapperMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'animation-wrapper',
            stateCode: '',
            zone: Layout.zone.BODY_BOTTOM,
            type: Layout.type.WRAPPER
        })
        this.items = [
            new EditAnimationBodyMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isValid() {
        return !!WindowManager.get().hasWindow(WINDOWS.ANIMATION)
    }
}