define(function (require) {

    import AttachEntityUI from './AttachEntityUI.js'
    import HideEntityUI from './HideEntityUI.js'
    import LockEntityUI from './LockEntityUI.js'
    import ImageUI from '../image/ImageUI.js'

    /**
     * EntityUI class
     * Manage the rendering of entities for HTML
     */
    class EntityUI {
        /**
         * What to do after create HTML Element
         * @param {MenuItemUI} item 
         * @param {HTMLElement} el 
         * @param {UIRenderer} uiRenderer 
         */
        static draw(item, el, uiRenderer) {
            AttachEntityUI.draw(item, el, uiRenderer)
            HideEntityUI.draw(item, el)
            LockEntityUI.draw(item, el)
        }

        /**
         * Get screen shot of the entity as image
         * @param {Entity} entity
         * @param {{width: number, height: number}} props
         */
        static getImage(entity, props) {
            return ImageUI.getImage(entity, props)
        }

    }

    export default EntityUI
})