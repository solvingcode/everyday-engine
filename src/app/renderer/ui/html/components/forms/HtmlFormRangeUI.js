import HtmlFormTextUI from './HtmlFormTextUI.js'

export default class HtmlFormRangeUI extends HtmlFormTextUI {
    static props = {
        tag: 'div',
        prefix: 'form-range-',
        className: 'form-input',
        inputProps: {
            tag: 'input',
            type: 'range',
            suffix: '-field'
        }
    }
}