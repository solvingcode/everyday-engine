define(function () {

    /**
     * ItemUI class
     * Define an item UI which define how to create HTML element
     * @abstract
     */
    class ItemUI {
        /**
         * @abstract
         * Draw the menu item
         * @param {MenuItemUI} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            throw new TypeError('ItemUI.draw must be implemented!')
        }

        /**
         * What to do after create HTML Element
         * @param {MenuItemUI} item 
         * @param {HTMLElement} el 
         * @param {UIRenderer} uiRenderer 
         */
        static postCreate(item, el, uiRenderer = null) { }

        /**
         * What to do after update HTML Element
         * @param {MenuItemUI} item 
         * @param {HTMLElement} el 
         * @param {UIRenderer} uiRenderer 
         */
        static postUpdate(item, el, uiRenderer = null) { }

        /**
         * Get Style for the given menu item
         * @param {MenuItemUI} item
         */
        static getStyle(item) { }

        /**
         * Get class name for the given menu item
         * @param {MenuItemUI} item
         */
        static getClassName(item) { }

        /**
         * Clean HTML element and all childs
         * @param {MenuItemUI} item
         * @param {HTMLElement} el 
         */
        static clean(item, el) { }

        /**
         * Get HTML element properties
         * @return {Object}
         */
        static getProps(){
            return this.props
        }

        /**
         * Get HTML element body
         * @param {HTMLElement} el
         * @return {HTMLElement}
         */
        static getBody(el){
            return el
        }
    }

    return ItemUI
})