import HtmlFormTextUI from './HtmlFormTextUI.js'

export default class HtmlFormWysiwygUI extends HtmlFormTextUI {
    static props = {
        tag: 'div',
        prefix: 'form-wysiwyg-',
        className: 'form-wysiwyg',
        inputProps: {
            tag: 'div',
            suffix: '-field'
        }
    }

    /**
     * @override
     */
    static setValue(formElement, value){
        formElement.innerHTML = value
    }

    /**
     * @override
     */
    static getValue(formElement) {
        return formElement.innerHTML
    }

    /**
     * @override
     */
    static getCustomAttributes(item){
        return [{
            name: 'contenteditable',
            value: true
        }]
    }
}