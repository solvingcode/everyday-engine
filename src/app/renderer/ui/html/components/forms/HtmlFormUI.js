import ItemUI from '../../ItemUI.js'
import SystemError from '../../../../../exception/type/SystemError.js'

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
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     * @param {UIRenderer} uiRenderer
     */
    static createFormItem(item, el, uiRenderer = null) {
        const {props} = item.element
        const {inputProps} = this.props
        const formEl = document.createElement(inputProps.tag)
        if (inputProps.type) {
            formEl.type = inputProps.type
        }
        if(inputProps.tagClassName){
            formEl.className = inputProps.tagClassName
        }
        formEl.id = `${el.id}-${inputProps.suffix}`
        if (props.name) {
            const labelEl = document.createElement('label')
            labelEl.textContent = props.name
            labelEl.setAttribute('title', props.name)
            labelEl.htmlFor = formEl.id
            el.appendChild(labelEl)
        }
        el.appendChild(formEl)
    }

    /**
     * @override
     */
    static postCreate(item, el, uiRenderer = null) {
        const {version} = item.element
        el.setAttribute(HtmlFormUI.props.version, version)
        this.createFormItem(item, el, uiRenderer)
        this.addCustomAttributes(item, el, uiRenderer)
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
            this.addCustomAttributes(item, el, uiRenderer)
        }
    }

    /**
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     * @param {UIRenderer} uiRenderer
     */
    static addCustomAttributes(item, el, uiRenderer) {
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
    static postCreateFormItem(item, el, uiRenderer = null) {
        throw new SystemError('HtmlFormUI.postCreateFormItem must be implemented')
    }

    /**
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     * @param {UIRenderer} uiRenderer
     */
    static postUpdateFormItem(item, el, uiRenderer = null) {
        throw new SystemError('HtmlFormUI.postUpdateFormItem must be implemented')
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
    static getFormElementFrom(el) {
        const {inputProps} = this.props
        const elId = `${el.id}-${inputProps.suffix}`
        return el.querySelector(`#${elId}`)
    }

    /**
     * Get HTML value form element
     * @param {HTMLElement | HTMLInputElement} formElement
     * @return {string | boolean | string[]}
     */
    static getValue(formElement) {
        return formElement.value
    }

    /**
     * @param {HTMLElement | HTMLInputElement} formElement
     * @param {string | boolean} value
     */
    static setValue(formElement, value) {
        formElement.value = value
    }

    /**
     * @param {MenuItemUI} item
     * @return {{name: string, value: *}[]}
     */
    static getCustomAttributes(item) {
        return []
    }

    /**
     * @param {MenuItemUI} item
     */
    static getCustomStyle(item){
        const {props} = item.element
        if(props.size){
            return {
                width: `${props.size * 100}%`
            }
        }
    }

    /**
     * @override
     */
    static getClassName(item) {
        return item.element.isEditing() ? 'form-element-editing' : ''
    }

    /**
     * @param {HTMLElement} el
     * @return {HTMLElement}
     */
    static getFocused(el) {
        let focusedElement = null
        if (el === document.activeElement) {
            focusedElement = el
        } else {
            el.childNodes.forEach(childNode => {
                if (childNode === document.activeElement) {
                    focusedElement = childNode
                    return null
                }
            })
        }
        return focusedElement
    }

}

HtmlFormUI.props = {
    version: 'form-version'
}

export default HtmlFormUI