import Layout from '../../Layout.js'
import InputMenuItem from './InputMenuItem.js'
import {MouseButton} from '../../../core/Mouse.js'

/**
 * Color Input Menu Item
 */
export default class RangeMenuItem extends InputMenuItem {
    /**
     * @override
     */
    constructor(parent, props, value, event) {
        super(parent, props, value, event)
        this.field = Layout.form.RANGE
    }

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isButtonPressed(MouseButton.LEFT)
    }
}