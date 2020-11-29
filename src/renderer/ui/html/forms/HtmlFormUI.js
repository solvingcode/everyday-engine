define(function (require) {

    const ItemUI = require('../ItemUI.js')

    class HtmlFormUI extends ItemUI {
        /**
         * Draw a graph.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const parentEl = uiRenderer.getElement(item.parent)
            uiRenderer.getElement(item, parentEl)
        }

        /**
         * @override
         */
        static postCreate(item, el) {
            const { version } = item.element
            el.setAttribute(this.props.version, version)
        }

        /**
         * @override
         */
        static postUpdate(item, el) {
            const { version } = item.element
            const currentVersion = el.getAttribute(this.props.version)
            if (version !== parseInt(currentVersion)) {
                el.innerHTML = ''
                this.postCreate(item, el)
            }
        }
    }

    HtmlFormUI.props = {
        tag: 'div',
        className: 'form',
        prefix: 'form-',
        version: 'form-version',
        width: '100%'
    }

    return HtmlFormUI
})