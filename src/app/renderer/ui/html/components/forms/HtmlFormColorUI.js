import HtmlFormTextUI from './HtmlFormTextUI.js'

export default class HtmlFormColorUI extends HtmlFormTextUI {
    static props = {
        tag: 'div',
        prefix: 'form-color-',
        className: 'form-input',
        inputProps: {
            tag: 'input',
            type: 'color',
            suffix: '-field'
        }
    }
}