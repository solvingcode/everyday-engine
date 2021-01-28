define(function () {

    /**
     * StaticEntityUI class
     * Manage the rendering of static type entities for HTML
     */
    class StaticEntityUI {
        /**
         * What to do after create HTML Element
         * @param {MenuItemUI} item 
         * @param {HTMLElement} el
         */
        static draw(item, el) {
            const entity = item.element.getEntity()
            entity.isFixed() && this.create(el, entity)
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
            if (icon.getAttribute(attrId) != entity.id) {
                icon.setAttribute(attrId, entity.id)
                el.appendChild(icon)
            }
        }

        /**
         * Clean/Remove flotant elements
         * @param {HTMLElement} el 
         * @param {Entity} entity
         */
        static clean(el, entity) {
            const { attrId } = this.props
            const existIcon = this.getElement(el)
            if (existIcon && (
                parseInt(existIcon.getAttribute(attrId)) !== entity.id
                || !entity.isFixed())
            ) {
                existIcon.remove()
            }
        }

        /**
         * Get existant element
         * @param {HTMLElement} el 
         */
        static getElement(el) {
            const { tag, className, attrId } = this.props
            return el.querySelector(`${tag}[${attrId}].${className}`)
        }
    }

    StaticEntityUI.props = {
        tag: 'i',
        className: 'static-entity',
        attrId: 'data-props-entity'
    }

    export default StaticEntityUI
})