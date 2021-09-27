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
     * @return {void}
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
    static postCreate(item, el, uiRenderer = null) {
    }

    /**
     * What to do after update HTML Element
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     * @param {UIRenderer} uiRenderer
     */
    static postUpdate(item, el, uiRenderer = null) {
    }

    /**
     * Get Style for the given menu item
     * @param {MenuItemUI} item
     */
    static getStyle(item) {
        const {position, size} = item.element
        let style = {}
        if (position) {
            style = {
                x0: position.x,
                y0: position.y,
                width: size.width,
                height: size.height,

            }
        }
        style = {...style, ...(this.getCustomStyle(item) || {})}
        return style
    }

    /**
     * Get Style for the given menu item
     * @param {MenuItemUI} item
     */
    static getCustomStyle(item){
    }

    /**
     * Get class name for the given menu item
     * @param {MenuItemUI} item
     */
    static getClassName(item) {
    }

    /**
     * @param {MenuItemUI} item
     * @return {boolean}
     */
    static hasChild(item) {
        return true
    }

    /**
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     * @return {HTMLElement}
     */
    static getTriggerClickElement(item, el){
        return el
    }

    /**
     * Clean HTML element and all childs
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     */
    static clean(item, el) {
    }

    /**
     * Get HTML element properties
     * @return {Object}
     */
    static getProps() {
        return this.props
    }

    /**
     * Get HTML element body
     * @param {HTMLElement} el
     * @param {MenuItemUI} menuItem
     * @return {HTMLElement}
     */
    static getBody(el, menuItem) {
        return el
    }
}

export default ItemUI