define(function (require) {

    const ItemUI = require('../ItemUI.js')
    const AttachEntityUI = require('../components/AttachEntityUI.js')

    class LayerEntityButtonUI extends ItemUI {
        /**
         * Draw a default button.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const parentEl = uiRenderer.getElement(item.parent)
            uiRenderer.getElement(item, parentEl.getElementsByTagName('div')[0])
        }

        /**
         * @inheritdoc
         */
        static postCreate(item, el, uiRenderer) {
            const entity = item.element.getEntity()
            if (entity) {
                const image = uiRenderer.getEntityImage(item)
                const title = document.createElement('span')
                title.textContent = entity.name
                el.setAttribute('data-entity-id', entity.id)
                el.setAttribute('id', item.getId())
                el.appendChild(image)
                el.appendChild(title)
            }
        }

        /**
         * @inheritdoc
         */
        static postUpdate(item, el, uiRenderer) {
            const entity = item.element.getEntity()
            if (entity) {
                const entityId = el.getAttribute('data-entity-id')
                if (entityId != entity.id) {
                    el.innerHTML = ''
                    this.postCreate(item, el, uiRenderer)
                }
                AttachEntityUI.draw(item, el, uiRenderer)
            }
        }

        /**
         * @inheritdoc 
         */
        static getClassName(item) {
            const entity = item.element.getEntity()
            if (entity) {
                let classNames = []
                entity.locked && classNames.push('locked')
                !entity.visible && classNames.push('hidden')
                return classNames.join(' ')
            }
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