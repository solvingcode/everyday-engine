import Menu from '../layout/Menu.js'
import Layout from '../layout/Layout.js'

export default class FormHelper {

    /**
     * @param {MenuItem} item
     * @return {boolean}
     */
    static isFieldChanged(item) {
        const menu = Menu.get()
        const menuItemUI = menu.findItemByElement(item)
        if (menuItemUI) {
            const uiRenderer = menu.getUIRenderer()
            const formElement = uiRenderer.getType(menuItemUI).getFormElement(menuItemUI, uiRenderer)
            const oldValue = item.value()
            const newValue = formElement.value
            return oldValue !== newValue
        }
        return false
    }

    /**
     * Check if the update event must be triggered instantly
     * when is clicked
     * @param {string} field
     * @return {boolean}
     */
    static isInstantField(field) {
        return ![
            Layout.form.TEXT,
            Layout.form.NUMBER,
            Layout.form.TEXTAREA,
            Layout.form.COLOR,
            Layout.form.FILE,
            Layout.form.WYSIWYG,
            Layout.form.TEXT_INSTANT,
            Layout.form.DROPDOWN
        ].includes(field)
    }

    /**
     * Check if the update event must be triggered when the field's value is changed
     * @param {string} field
     * @return {boolean}
     */
    static isAtChangeField(field) {
        return [
            Layout.form.COLOR, Layout.form.NUMBER, Layout.form.TEXT_INSTANT
        ].includes(field)
    }

    /**
     * Check if the update event must be triggered when the field's clicked (like dropdown)
     * @param {string} field
     * @return {boolean}
     */
    static isAtClickChange(field) {
        return [Layout.form.DROPDOWN].includes(field)
    }

}