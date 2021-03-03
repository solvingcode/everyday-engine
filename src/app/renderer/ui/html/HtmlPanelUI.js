import ItemUI from './ItemUI.js'

class HtmlPanelUI extends ItemUI {
    /**
     * Draw a panel.
     * @param {MenuItem} item
     * @param {UIRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        uiRenderer.getElement(item)
    }

    /**
     * @override
     */
    static postCreate(item, el) {
        const title = item.element.props.name
        if (title) {
            const titleEl = document.createElement('h4')
            titleEl.textContent = title
            el.appendChild(titleEl)
        }
    }

    /**
     * @override
     */
    static postUpdate(item, el) {
        const {name} = item.element.props
        const titleEl = el.getElementsByTagName('h4')[0]
        if (titleEl && titleEl.textContent !== name) {
            titleEl.textContent = name
        }
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
}

HtmlPanelUI.props = {
    tag: 'div',
    width: '100%',
    className: 'panel panel-static'
}

export default HtmlPanelUI