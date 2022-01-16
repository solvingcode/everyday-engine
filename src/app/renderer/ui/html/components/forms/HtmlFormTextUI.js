import HtmlFormUI from './HtmlFormUI.js'

class HtmlFormTextUI extends HtmlFormUI {

    /**
     * @override
     */
    static postCreateFormItem(item, el, uiRenderer) {
        const {value} = item.element
        const formEl = this.getFormElementFrom(el)
        this.applyOptions(item)
        this.setValue(formEl, value())
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer){
        super.postUpdate(item, el, uiRenderer)
        this.updateFocus(item, el)
    }

    /**
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     */
    static updateFocus(item, el){
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

    /**
     * @override
     */
    static getCustomElementStyle(item){
        const {props} = item.element
        const options = props.options || {}
        const style = []

        if(options.fullwidth){
            style.push({
                name: 'width',
                value: '100%'
            })
        }

        return style
    }

    static applyOptions(item) {
        const {props} = item.element
        const options = props.options || {}
        if(options.autofocus){
            item.element.run()
        }
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