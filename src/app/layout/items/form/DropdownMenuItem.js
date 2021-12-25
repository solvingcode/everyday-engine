import Layout from '../../Layout.js'
import InputMenuItem from './InputMenuItem.js'
import {MouseButton} from '../../../core/Mouse.js'

/**
 * Checkbox Menu Item
 */
class DropdownMenuItem extends InputMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Object} props
     * @param {any} value The default value
     * @param {Function} event The event binded to the field
     */
    constructor(parent, props, value, event) {
        super(parent, props, value, event)
        this.field = Layout.form.DROPDOWN
    }

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isButtonPressed(MouseButton.LEFT)
    }
}

export default DropdownMenuItem