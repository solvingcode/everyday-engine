import HtmlFormUI from './HtmlFormUI.js'

class HtmlFormCheckboxUI extends HtmlFormUI {
    /**
     * @override
     */
    static postCreate(item, el, uiRenderer) {
        const {props, value} = item.element
        const {inputProps} = this.props
        const input = document.createElement(inputProps.tag)
        input.type = inputProps.type
        input.id = `${el.id}-${inputProps.suffix}`
        input.checked = value()
        const labelEl = document.createElement('label')
        labelEl.textContent = props.name
        labelEl.htmlFor = input.id
        el.appendChild(input)
        el.appendChild(labelEl)
    }

    /**
     * @override
     */
    static getValue(formElement) {
        return formElement.checked
    }
}

HtmlFormCheckboxUI.props = {
    tag: 'div',
    prefix: 'form-checkbox-',
    className: 'form-input',
    inputProps: {
        tag: 'input',
        type: 'checkbox',
        suffix: '-field'
    }
}

export default HtmlFormCheckboxUI