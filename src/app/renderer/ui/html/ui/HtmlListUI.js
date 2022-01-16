import ItemUI from '../ItemUI.js'

export default class HtmlListUI extends ItemUI {
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
    static getClassName(item) {
        return item.element.props.name
    }

    /**
     * @override
     */
    static getBody(el, menuItem) {
        const dataIndex = menuItem.index
        const existBody = el.querySelector(`#li-${dataIndex}`)
        if(existBody){
            return existBody
        }else{
            const body = document.createElement('li')
            body.id = `li-${dataIndex}`
            el.appendChild(body)
            return body
        }
    }

    static props = {
        tag: 'ul',
        className: 'wrapper'
    }
}