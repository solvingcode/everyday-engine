import HtmlFormTextUI from './HtmlFormTextUI.js'

class HtmlFormCheckboxUI extends HtmlFormTextUI {
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