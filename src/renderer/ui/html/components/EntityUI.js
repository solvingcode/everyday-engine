define(function (require) {

    const AttachEntityUI = require('./AttachEntityUI.js')
    const StaticEntityUI = require('./StaticEntityUI.js')

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
            StaticEntityUI.draw(item, el, uiRenderer)
        }
    }

    return EntityUI
})