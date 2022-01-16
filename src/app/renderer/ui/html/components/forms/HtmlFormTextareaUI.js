import HtmlFormTextUI from './HtmlFormTextUI.js'

export default class HtmlFormTextareaUI extends HtmlFormTextUI {
    static props = {
        tag: 'div',
        prefix: 'form-textarea-',
        className: 'form-textarea',
        inputProps: {
            tag: 'textarea',
            suffix: '-field'
        }
    }
}