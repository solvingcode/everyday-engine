import HtmlFormTextUI from './HtmlFormTextUI.js'

export default class HtmlFormNumberUI extends HtmlFormTextUI {
    static props = {
        tag: 'div',
        prefix: 'form-range-',
        className: 'form-input',
        inputProps: {
            tag: 'input',
            type: 'number',
            suffix: '-field'
        }
    }
}