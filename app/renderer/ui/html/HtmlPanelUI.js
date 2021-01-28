define(function (require) {

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
            const body = document.createElement('div')
            if(title){
                const titleEl = document.createElement('h4')
                titleEl.textContent = title
                el.appendChild(titleEl)
            }
            el.appendChild(body)
        }

        /**
         * @override
         */
        static postUpdate(item, el) {
            const { name } = item.element.props
            const titleEl = el.getElementsByTagName('h4')[0]
            if (titleEl && titleEl.textContent !== name) {
                titleEl.textContent = name
            }
        }

        /**
         * @override
         */
        static getBody(el){
            return el.getElementsByTagName('div')[0]
        }
    }

    HtmlPanelUI.props = {
        tag: 'div',
        width: '100%',
        className: 'panel panel-static'
    }

    export default HtmlPanelUI
})