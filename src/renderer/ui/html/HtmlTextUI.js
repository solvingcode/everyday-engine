define(function (require) {

    const ItemUI = require('./ItemUI.js')

    class HtmlTextUI extends ItemUI {
        /**
         * Draw a panel.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const parentEl = uiRenderer.getElement(item.parent)
            uiRenderer.getElement(item, parentEl)
        }

        /**
         * @inherit
         */
        static postCreate(item, el) {
            const { text } = item.element
            const pText = text.join('<br/>')
            const pTextHtml = document.createElement('p')
            pTextHtml.innerHTML = pText
            el.appendChild(pTextHtml)
        }

        /**
         * @inherit
         */
        static postUpdate(item, el) {
            const { text } = item.element
            const pText = text.join(' ')
            const pTextHtml = el.getElementsByTagName('p')[0]
            if (!pTextHtml || pTextHtml.textContent !== pText) {
                pTextHtml && pTextHtml.remove()
                this.postCreate(item, el)
            }
        }
    }

    HtmlTextUI.props = {
        tag: 'div',
        width: '200px',
        className: 'text'
    }

    return HtmlTextUI
})