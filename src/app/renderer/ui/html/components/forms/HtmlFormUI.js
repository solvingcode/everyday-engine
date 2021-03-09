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
        this.addCustomAttributes(item, el, uiRenderer)
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
            this.addCustomAttributes(item, el, uiRenderer)
        }
    }

    /**
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     * @param {UIRenderer} uiRenderer
     */
    static addCustomAttributes(item, el, uiRenderer){
        this.getCustomAttributes(item).forEach(({name, value}) => {
            const formElement = this.getFormElementFrom(el)
            formElement.setAttribute(name, value)
        })
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
     * @return {{element: HTMLElement, value: *}}
     */
    static getFormElement(item, uiRenderer) {
        const element = this.getFormElementFrom(uiRenderer.getElement(item))
        return {element, value: this.getValue(element)}
    }

    /**
     * @param {HTMLElement} el
     * @return {HTMLElement}
     */
    static getFormElementFrom(el){
        const {inputProps} = this.props
        const elId = `${el.id}-${inputProps.suffix}`
        return el.querySelector(`#${elId}`)
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

    /**
     * @param {MenuItemUI} item
     * @return {{name: string, value: *}[]}
     */
    static getCustomAttributes(item){
        return []
    }

}

HtmlFormUI.props = {
    version: 'form-version'
}

export default HtmlFormUI