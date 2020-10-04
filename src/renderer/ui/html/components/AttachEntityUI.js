define(function (require) {

    const EntityManager = require('../../../../world/manager/EntityManager.js')
    const Color = require('../../../../utils/Color.js')

    /**
     * AttachEntityUI class
     * Manage the rendering of attach type entities for HTML
     */
    class AttachEntityUI {
        /**
         * What to do after create HTML Element
         * @param {MenuItemUI} item 
         * @param {HTMLElement} el 
         * @param {UIRenderer} uiRenderer 
         */
        static draw(item, el, uiRenderer) {
            const entity = item.element.getEntity()
            const attachEntities = EntityManager.get().getAllAttachTypeEntity(entity)
            if (attachEntities.length) {
                this.create(el, attachEntities)
            }
            this.clean(el, attachEntities)
        }

        /**
         * 
         * @param {HTMLElement} el 
         * @param {AttachEntity[]} attachEntities 
         */
        static create(el, attachEntities) {
            attachEntities.map(aEntity => {
                const existIcon = this.getElements(el)
                    .find(node => node.getAttribute('data-attach-entity') == aEntity.id)
                const attachIcon = existIcon || document.createElement('i')
                if (attachIcon.getAttribute('data-attach-entity') != aEntity.id) {
                    attachIcon.setAttribute('data-attach-entity', aEntity.id)
                    attachIcon.style.backgroundColor = Color.fromArrayInt([aEntity.id])
                    el.appendChild(attachIcon)
                }
            })
        }

        /**
         * Clean/Remove flotant elements
         * @param {HTMLElement} el 
         * @param {AttachEntity[]} attachEntities 
         */
        static clean(el, attachEntities){
            this.getElements(el).forEach(existIcon => {
                const attachEntitiesIds = attachEntities.map(aEntity => aEntity.id)
                if (!attachEntitiesIds.includes(parseInt(existIcon.getAttribute('data-attach-entity')))) {
                    existIcon.remove()
                }
            })
        }

        /**
         * Get existant elements for attached type items
         * @param {HTMLElement} el 
         */
        static getElements(el) {
            return Array.from(el.getElementsByTagName('i'))
                .filter(node => node.getAttribute('data-attach-entity'))
        }
    }

    return AttachEntityUI
})