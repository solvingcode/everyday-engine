define(function (require) {

    const ItemUI = require('../ItemUI.js')

    class LayerEntityButtonUI extends ItemUI {
        /**
         * Draw a default button.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const parentEl = uiRenderer.getElement(item.parent)
            uiRenderer.getElement(item, parentEl)
        }
    }

    LayerEntityButtonUI.props = {
        tag: 'button',
        prefix: 'layer-entity-',
        width: '100%',
        height: '40px'
    }

    return LayerEntityButtonUI
})