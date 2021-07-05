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
    static postUpdate(item, el, uiRenderer){
        super.postUpdate(item, el, uiRenderer)
        const focusedElement = this.getFocused(el)
        if (!item.element.isEditing() && focusedElement) {
            focusedElement.blur()
        } else if (item.element.isEditing() && !focusedElement) {
            this.getFormElementFrom(el).focus()
        }
    }

    /**
     * @override
     */
    static postUpdateFormItem(item, el, uiRenderer) {
        const {value} = item.element
        const formElement = this.getFormElement(item, uiRenderer)
        this.setValue(formElement.element, value())
    }

    /**
     * @override
     */
    static getCustomAttributes(item){
        const {props} = item.element
        const options = props.options || {}
        const attrs = []

        if(options.min !== null){
            attrs.push({
                name: 'min',
                value: options.min
            })
        }
        if(options.max !== null){
            attrs.push({
                name: 'max',
                value: options.max
            })
        }
        if(options.step !== null){
            attrs.push({
                name: 'step',
                value: options.step
            })
        }
        if(options.readonly){
            attrs.push({
                name: 'disabled',
                value: options.readonly
            })
        }

        return attrs
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