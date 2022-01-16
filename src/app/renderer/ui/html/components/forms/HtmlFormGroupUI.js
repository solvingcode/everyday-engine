import ItemUI from '../../ItemUI.js'

export default class HtmlFormGroupUI extends ItemUI {
    /**
     * @param {MenuItem} item
     * @param {UIRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        uiRenderer.getElement(item)
    }

    /**
     * @override
     */
    static postCreate(item, el, uiRenderer = null) {
        const name = item.element.props.name
        if (name) {
            const label = document.createElement('label')
            label.textContent = name
            label.title = name
            el.appendChild(label)
        }
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer = null) {
        const name = item.element.props.name
        const titleEl = this.getTitle(el)
        if (titleEl && el.getAttribute('data-name') !== name) {
            titleEl.textContent = name
            titleEl.title = name
        }
    }

    /**
     * @param {HTMLElement} el
     * @return {HTMLElement}
     */
    static getTitle(el){
        return el.querySelector('label')
    }

    /**
     * @override
     */
    static getBody(el) {
        const existBody = el.getElementsByTagName('div')[0]
        if(existBody){
            return existBody
        }else{
            const body = document.createElement('div')
            el.appendChild(body)
            return body
        }
    }

    static props = {
        tag: 'div',
        className: 'form-group'
    }
}