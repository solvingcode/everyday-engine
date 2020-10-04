define(function () {

    /**
     * ItemUI class
     * Define an item UI which define how to create HTML element
     */
    class ItemUI {
        /**
         * What to do after create HTML Element
         * @param {MenuItemUI} item 
         * @param {HTMLElement} el 
         * @param {UIRenderer} uiRenderer 
         */
        static postCreate(item, el, uiRenderer) { }

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
    }

    return ItemUI
})