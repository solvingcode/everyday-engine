import ListSelectElementActionsMenuItem from '../../../list/ListSelectElementActionsMenuItem.js'
import Layout from '../../../../Layout.js'

export default class ScriptFunctionElementMenuItem extends ListSelectElementActionsMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            dragStateCode: 'ACTION_DRAG_FUNCTION_ELEMENT',
            type: Layout.type.LIST_ELEMENT
        })
    }
    /**
     * @override
     */
    getIcon() {
        return 'wave-square'
    }

    /**
     * @override
     */
    isButton() {
        return true
    }

    /**
     * @override
     */
    isRightClick() {
        return true
    }

    /**
     * @override
     */
    isDraggable(){
        return true
    }
}