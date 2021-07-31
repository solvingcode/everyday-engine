import Layout from '../../Layout.js'
import InputMenuItem from './InputMenuItem.js'
import {MouseButton} from '../../../core/Mouse.js'

export default class NumberMenuItem extends InputMenuItem {
    /**
     * @override
     */
    constructor(parent, props, value, event) {
        super(parent, props, value, event)
        this.field = Layout.form.NUMBER
    }

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isButtonClicked(MouseButton.LEFT) || window.mouse.isMouseWheelMove()
    }
}