define(function () {

    /**
     * Manage the rendering of hidden type entities for HTML
     */
    class LockEntityUI {
        /**
         * @param {MenuItemUI} item 
         * @param {HTMLElement} el
         */
        static draw(item, el) {
            const entity = item.element.getEntity()
            entity.isLocked() && this.create(el, entity)
            this.clean(el, entity)
        }

        /**
         * Create the element
         * @param {HTMLElement} el
         * @param {Entity} entity
         */
        static create(el, entity) {
            const { tag, className, attrId } = this.props
            const existIcon = this.getElement(el)
            const icon = existIcon || document.createElement(tag)
            if (icon.className !== className) {
                icon.className = className
            }
            if (parseInt(icon.getAttribute(attrId)) !== entity.id) {
                icon.setAttribute(attrId, entity.id)
                el.appendChild(icon)
            }
        }

        /**
         * Clean/Remove float elements
         * @param {HTMLElement} el 
         * @param {Entity} entity
         */
        static clean(el, entity) {
            const { attrId } = this.props
            const existIcon = this.getElement(el)
            if (existIcon && (
                parseInt(existIcon.getAttribute(attrId)) !== entity.id
                || !entity.isLocked())
            ) {
                existIcon.remove()
            }
        }

        /**
         * Get existant element
         * @param {HTMLElement} el 
         */
        static getElement(el) {
            const { tag, attrId } = this.props
            return el.querySelector(`${tag}[${attrId}]`)
        }
    }

    LockEntityUI.props = {
        tag: 'i',
        className: 'fas fa-lock',
        attrId: 'data-lock-entity'
    }

    export default LockEntityUI
})