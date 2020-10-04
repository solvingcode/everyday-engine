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

        /**
         * @inheritdoc
         */
        static postCreate(item, el, uiRenderer) {
            const { entity } = item.element.data
            const image = uiRenderer.getEntityImage(item)
            const title = document.createElement('span')
            title.textContent = entity.name
            el.appendChild(image)
            el.appendChild(title)
        }
    }

    LayerEntityButtonUI.props = {
        tag: 'button',
        className: 'layer-entity',
        prefix: 'layer-entity-',
        width: '100%',
        height: '40px',
        entityWidth: 30,
        entityHeight: 30
    }

    return LayerEntityButtonUI
})