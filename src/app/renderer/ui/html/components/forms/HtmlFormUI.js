import ItemUI from '../../ItemUI.js'

class HtmlFormUI extends ItemUI {

    /**
     * Draw the form element.
     * @param {MenuItemUI} item
     * @param {UIRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        uiRenderer.getElement(item)
    }

    /**
     * @override
     */
    static postCreate(item, el, uiRenderer = null) {
        const {version} = item.element
        el.setAttribute(HtmlFormUI.props.version, version)
        this.postCreateFormItem(item, el, uiRenderer)
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer = null) {
        const {version} = item.element
        const currentVersion = el.getAttribute(HtmlFormUI.props.version)
        if (version !== parseInt(currentVersion)) {
            el.setAttribute(HtmlFormUI.props.version, version)
            this.postUpdateFormItem(item, el, uiRenderer)
        }
    }

    /**
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     * @param {UIRenderer} uiRenderer
     */
    static postCreateFormItem(item, el, uiRenderer = null){
        throw new TypeError('HtmlFormUI.postCreateFormItem must be implemented')
    }

    /**
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     * @param {UIRenderer} uiRenderer
     */
    static postUpdateFormItem(item, el, uiRenderer = null){
        throw new TypeError('HtmlFormUI.postUpdateFormItem must be implemented')
    }

    /**
     * Get HTML form element
     * @param {MenuItemUI} item
     * @param {UIRenderer} uiRenderer
     */
    static getFormElement(item, uiRenderer) {
        const {inputProps} = this.props
        const el = uiRenderer.getElement(item)
        const elId = `${el.id}-${inputProps.suffix}`
        const element = document.getElementById(elId)
        return {element, value: this.getValue(element)}
    }

    /**
     * Get HTML value form element
     * @param {HTMLElement | HTMLInputElement} formElement
     * @return {string | boolean}
     */
    static getValue(formElement) {
        return formElement.value
    }

    /**
     * @param {HTMLElement | HTMLInputElement} formElement
     * @param {string | boolean} value
     */
    static setValue(formElement, value){
        formElement.value = value
    }

}

HtmlFormUI.props = {
    version: 'form-version'
}

export default HtmlFormUI