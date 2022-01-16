import HtmlFormUI from './HtmlFormUI.js'

/**
 * @class {HtmlFormInlineUI}
 */
export default class HtmlFormInlineUI extends HtmlFormUI {
    static props = {
        tag: 'div',
        className: 'form form-inline',
        prefix: 'form-',
        version: 'form-version',
        width: '100%'
    }
}