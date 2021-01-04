define(function (require) {

    const AttachEntityUI = require('./AttachEntityUI.js')
    const HideEntityUI = require('./HideEntityUI.js')
    const LockEntityUI = require('./LockEntityUI.js')
    const ImageUI = require('../image/ImageUI.js')

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

    return EntityUI
})