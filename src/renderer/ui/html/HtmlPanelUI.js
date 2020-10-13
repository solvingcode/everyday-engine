define(function (require) {

    const ItemUI = require('./ItemUI.js')

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
        static postUpdate(item, el) {
            const { name } = item.element.props
            const titleEl = el.getElementsByTagName('h4')[0]
            if (titleEl.textContent !== name) {
                titleEl.textContent = name
            }
        }
    }

    HtmlPanelUI.props = {
        tag: 'div',
        width: '200px',
        className: 'panel'
    }

    return HtmlPanelUI
})