import HtmlFormUI from './HtmlFormUI.js'

class HtmlFormDropdownUI extends HtmlFormUI {
    /**
     * @override
     */
    static postCreateFormItem(item, el, uiRenderer) {
        const {props} = item.element
        const {inputProps} = this.props
        const formEl = document.createElement(inputProps.tag)
        this.createOptions(item, formEl)
        formEl.id = `${el.id}-${inputProps.suffix}`
        const labelEl = document.createElement('label')
        labelEl.textContent = props.name
        labelEl.setAttribute('title', props.name)
        labelEl.htmlFor = formEl.id
        el.appendChild(labelEl)
        el.appendChild(formEl)
    }

    /**
     * Create options for the dropdown
     * @param {MenuItemUI} item
     * @param {HTMLElement} formEl
     */
    static createOptions(item, formEl) {
        const {props, value} = item.element
        const {inputProps} = this.props
        formEl.innerHTML = ''
        formEl.appendChild(document.createElement(inputProps.tagOption))
        props.list.forEach(({value: optValue, label: optLabel}) => {
            const optionEl = document.createElement(inputProps.tagOption)
            optionEl.value = optValue
            optionEl.textContent = optLabel
            optionEl.selected = optValue == value()
            formEl.appendChild(optionEl)
        })
    }

    /**
     * @override
     */
    static postUpdateFormItem(item, el, uiRenderer) {
        const formElement = this.getFormElement(item, uiRenderer)
        this.createOptions(item, formElement.element)
    }
}

HtmlFormDropdownUI.props = {
    tag: 'div',
    prefix: 'form-dropdown-',
    className: 'form-input',
    inputProps: {
        tag: 'select',
        tagOption: 'option',
        suffix: '-dropdown'
    }
}

export default HtmlFormDropdownUI