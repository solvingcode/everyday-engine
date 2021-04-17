import HtmlFormUI from './HtmlFormUI.js'

class HtmlFormTextUI extends HtmlFormUI {

    /**
     * @override
     */
    static postCreateFormItem(item, el, uiRenderer) {
        const {props, value} = item.element
        const {inputProps} = this.props
        const formEl = document.createElement(inputProps.tag)
        if(inputProps.type){
            formEl.type = inputProps.type
        }
        formEl.id = `${el.id}-${inputProps.suffix}`
        this.setValue(formEl, value())
        if(props.name){
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
    static postUpdateFormItem(item, el, uiRenderer) {
        const {value} = item.element
        const formElement = this.getFormElement(item, uiRenderer)
        this.setValue(formElement.element, value())
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