define(function (require) {

    const HtmlFormTextUI = require('./HtmlFormTextUI.js')

    class HtmlFormFileUI extends HtmlFormTextUI {
        /**
         * @override
         */
        static getValue(formElement) {
            const file = formElement.files && formElement.files[0]
            return file && URL.createObjectURL(file)
        }
    }

    HtmlFormFileUI.props = {
        tag: 'div',
        prefix: 'form-text-',
        className: 'form-input',
        inputProps: {
            tag: 'input',
            type: 'file',
            suffix: '-field'
        },
        imageProps: {
            width: 20,
            height: 20
        }
    }

    return HtmlFormFileUI
})