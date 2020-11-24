define(function (require) {

    const ItemUI = require('./ItemUI.js')

    class HtmlTextUI extends ItemUI {
        /**
         * Draw a panel.
         * @param {MenuItemUI} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            uiRenderer.getElement(item)
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