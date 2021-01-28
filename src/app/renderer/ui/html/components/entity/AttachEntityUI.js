import Color from '../../../../../utils/Color.js'
import World from '../../../../../world/World.js'

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
        const attachEntities = World.get().getEntityManager().getAllAttachTypeEntity(entity)
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
        const {tag, className, attrId} = this.props
        attachEntities.map(aEntity => {
            const existIcon = this.getElements(el)
                .find(node => node.getAttribute(attrId) == aEntity.id)
            const attachIcon = existIcon || document.createElement(tag)
            if (attachIcon.className !== className) {
                attachIcon.className = className
            }
            if (attachIcon.getAttribute(attrId) != aEntity.id) {
                attachIcon.setAttribute(attrId, aEntity.id)
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
    static clean(el, attachEntities) {
        const {attrId} = this.props
        this.getElements(el).forEach(existIcon => {
            const attachEntitiesIds = attachEntities.map(aEntity => aEntity.id)
            if (!attachEntitiesIds.includes(parseInt(existIcon.getAttribute(attrId)))) {
                existIcon.remove()
            }
        })
    }

    /**
     * Get existant elements for attached type items
     * @param {HTMLElement} el
     */
    static getElements(el) {
        const {tag, className, attrId} = this.props
        return Array.from(el.querySelectorAll(`${tag}[${attrId}].${className}`))
    }
}

AttachEntityUI.props = {
    tag: 'i',
    className: 'attach-entity',
    attrId: 'data-attach-entity'
}

export default AttachEntityUI