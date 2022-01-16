import HtmlFormUI from './HtmlFormUI.js'

export default class HtmlFormMultiButtonUI extends HtmlFormUI {
    /**
     * @override
     */
    static postCreateFormItem(item, el, uiRenderer) {
        const formEl = this.getFormElementFrom(el)
        this.createOptions(item, formEl)
    }

    /**
     * @param {MenuItemUI} item
     * @param {HTMLElement} formEl
     */
    static createOptions(item, formEl) {
        const {props, value} = item.element
        const {inputProps} = this.props
        formEl.innerHTML = ''
        props.list.forEach(({value: optValue, label: optLabel}) => {
            const optionEl = document.createElement(inputProps.tagOptions)
            optionEl.value = optValue
            optionEl.textContent = optLabel
            optionEl.onclick = () => {
                optionEl.className === inputProps.tagSelectedClassName
                ? optionEl.className = ''
                : optionEl.className = inputProps.tagSelectedClassName
            }
            const actualValues = value()
            if (actualValues && actualValues.includes(optValue)) {
                optionEl.className = inputProps.tagSelectedClassName
            }
            formEl.appendChild(optionEl)
        })
    }

    /**
     * @override
     */
    static setValue(formElement, value) {
        formElement.checked = !!value
    }

    /**
     * @override
     */
    static getValue(formElement) {
        const {inputProps} = this.props
        const values = []
        const elements = formElement.getElementsByClassName(inputProps.tagSelectedClassName)
        for (const iElement in elements) {
            if (elements.hasOwnProperty(iElement)) {
                values.push(elements[iElement].value)
            }
        }
        return values
    }

    /**
     * @override
     */
    static postUpdateFormItem(item, el, uiRenderer) {
        const formElement = this.getFormElement(item, uiRenderer)
        this.createOptions(item, formElement.element)
    }

    static props = {
        tag: 'div',
        prefix: 'form-list-button-',
        className: 'form-input',
        inputProps: {
            tag: 'div',
            tagOptions: 'button',
            tagClassName: 'form-list-button',
            tagSelectedClassName: 'button-selected'
        }
    }
}