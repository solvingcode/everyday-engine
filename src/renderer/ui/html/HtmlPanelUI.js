define(function (require) {

    const ItemUI = require('./ItemUI.js')
    const Menu = require('../../../layout/Menu.js')

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
         * @inheritdoc
         */
        static postCreate(item, el) {
            const title = item.element.props.name
            const titleEl = document.createElement('h4')
            const body = document.createElement('div')
            titleEl.textContent = title
            el.appendChild(titleEl)
            el.appendChild(body)
        }

        /**
         * @inheritdoc 
         */
        static clean(item, el) {
            const childs = Array.from(el.childNodes).filter(node => node.getAttribute('data-index'))
            childs.forEach(node => {
                const index = parseInt(node.getAttribute('data-index'))
                if (!Menu.get().findItemByZone(index, item.element.zone)) {
                    node.remove()
                }
            })
        }
    }

    HtmlPanelUI.props = {
        tag: 'div',
        width: '200px',
        className: 'panel'
    }

    return HtmlPanelUI
})