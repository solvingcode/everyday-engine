define(function (require) {

    const ItemUI = require('../ItemUI.js')
    const EntityManager = require('../../../../world/manager/EntityManager.js')
    const Color = require('../../../../utils/Color.js')

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
            const entity = item.element.getEntity()
            const image = uiRenderer.getEntityImage(item)
            const title = document.createElement('span')
            title.textContent = entity.name
            el.setAttribute('data-entity-id', entity.id)
            el.setAttribute('id', item.getId())
            el.appendChild(image)
            el.appendChild(title)
        }

        /**
         * @inheritdoc
         */
        static postUpdate(item, el, uiRenderer) {
            const entity = item.element.getEntity()
            const entityId = el.getAttribute('data-entity-id')
            if (entityId != entity.id) {
                el.innerHTML = ''
                this.postCreate(item, el, uiRenderer)
            }
            this.getAttachElementIndicator(item, el)
        }

        /**
         * Get/Create HTML element which indicate attached items 
         * @param {MenuItemUI} item
         * @param {HTMLElement} el
         */
        static getAttachElementIndicator(item, el) {
            const entity = item.element.getEntity()
            const attachedEntities = entity.getAttachedEntities(EntityManager.get())
            const existIcon = Array.from(el.getElementsByTagName('i'))
                .find(node => node.getAttribute('data-attach-entity'))
            if (attachedEntities.length > 1) {
                const attachIds = attachedEntities.map(pEntity => pEntity && pEntity.id).join(',')
                const attachIcon = existIcon || document.createElement('i')
                if (attachIcon.getAttribute('data-attach-entity') !== attachIds) {
                    attachIcon.setAttribute('data-attach-entity', attachIds)
                    attachIcon.style.backgroundColor = Color.fromArrayInt(attachIds.split(','))
                    el.appendChild(attachIcon)
                }
            } else if (existIcon) {
                existIcon.remove()
            }
        }

        /**
         * @inheritdoc 
         */
        static getClassName(item) {
            const entity = item.element.getEntity()
            let classNames = []
            entity.locked && classNames.push('locked')
            !entity.visible && classNames.push('hidden')
            return classNames.join(' ')
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