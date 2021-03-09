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

    /**
     * @override
     */
    static getCustomAttributes(item){
        const {props} = item.element
        const {options} = props
        return [
            {
                name: 'min',
                value: options.min
            },
            {
                name: 'max',
                value: options.max
            }
        ]
    }
}