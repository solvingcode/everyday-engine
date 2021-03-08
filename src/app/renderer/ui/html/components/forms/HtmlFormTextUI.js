import HtmlFormUI from './HtmlFormUI.js'

class HtmlFormTextUI extends HtmlFormUI {
    /**
     * @override
     */
    static postCreate(item, el, uiRenderer) {
        const {props, value} = item.element
        const {inputProps} = this.props
        const input = document.createElement(inputProps.tag)
        input.type = inputProps.type
        input.id = `${el.id}-${inputProps.suffix}`
        this.setValue(input, value())
        const labelEl = document.createElement('label')
        labelEl.textContent = props.name
        labelEl.setAttribute('title', props.name)
        labelEl.htmlFor = input.id
        el.appendChild(labelEl)
        el.appendChild(input)
    }
}

HtmlFormTextUI.props = {
    tag: 'div',
    prefix: 'form-text-',
    className: 'form-input',
    inputProps: {
        tag: 'input',
        type: 'text',
        suffix: '-field'
    }
}

export default HtmlFormTextUI