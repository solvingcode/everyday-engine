define(function (require) {

    const ItemUI = require('../ItemUI.js')
    const EntityUI = require('../components/entity/EntityUI.js')

    class LayerEntityButtonUI extends ItemUI {
        /**
         * Draw a default button.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            uiRenderer.getElement(item)
        }

        /**
         * @inherit
         */
        static postCreate(item, el, uiRenderer) {
            const entity = item.element.getEntity()
            if (entity) {
                const image = EntityUI.getImage(entity, this.props)
                const title = document.createElement('span')
                const imageWrapper = document.createElement('div')
                imageWrapper.className = 'entity-img-wrapper'
                imageWrapper.appendChild(image)
                title.textContent = entity.name
                el.setAttribute('data-entity-id', entity.id)
                el.setAttribute('id', item.getId())
                el.appendChild(imageWrapper)
                el.appendChild(title)
            }
        }

        /**
         * @inherit
         */
        static postUpdate(item, el, uiRenderer) {
            const entity = item.element.getEntity()
            if (entity) {
                const entityId = el.getAttribute('data-entity-id')
                if (entityId != entity.id) {
                    el.innerHTML = ''
                    this.postCreate(item, el, uiRenderer)
                }
                EntityUI.draw(item, el, uiRenderer)
            }
        }

        /**
         * @inherit
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
        entityWidth: 30,
        entityHeight: 30
    }

    return LayerEntityButtonUI
})