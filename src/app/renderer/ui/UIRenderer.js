import Layout from '../../layout/Layout.js'
import {SCENE_WIDTH, SCENE_HEIGHT} from '../../core/Constant.js'

/**
 * UI Renderer class
 * Define the renderer responsible for rendering the layout
 * @abstract
 */
class UIRenderer {

    constructor() {
        this.zones = {
            [Layout.zone.LEFT]: {
                x0: 20,
                y0: 20,
                isVertical: true
            },
            [Layout.zone.TOP]: {
                x0: 160,
                y0: 20,
                isVertical: false
            },
            [Layout.zone.RIGHT]: {
                x0: SCENE_WIDTH - 250,
                y0: 20,
                isVertical: true
            },
            [Layout.zone.BOTTOM]: {
                x0: 20,
                y0: SCENE_HEIGHT - 40
            }
        }
    }

    /**
     * @abstract
     */
    clean() {
        throw new TypeError('"UIRenderer.clean" method must be implemented')
    }

    /**
     * @abstract
     * Create/Update and return the HTML element for the given menu item
     * @param {MenuItemUI} menuItem
     * @return {HTMLElement}
     */
    getElement(menuItem) {
        throw new TypeError('"UIRenderer.getElement" method must be implemented')
    }

    /**
     * @abstract
     * Get the body of a menu item
     * Used to define where to append child elements
     * @param {MenuItemUI} menuItem
     * @param {MenuItemUI} childMenuItem
     * @return {HTMLElement}
     */
    getBody(menuItem, childMenuItem) {
        throw new TypeError('"UIRenderer.getBody" method must be implemented')
    }

    /**
     * Get zone UI properties
     */
    getZoneProps(zone) {
        return this.zones[zone]
    }

    /**
     * @abstract
     * Get MenuItem at a specific position.
     * @param {Mouse} mouse
     * @return {MenuItemUI}
     */
    getItemAt(mouse) {
        throw new TypeError('"UIRenderer.getItemAt" method must be implemented')
    }

    /**
     * @abstract
     * @param {MenuItemUI} item
     * @return {Vector}
     */
    getPosition(item) {
        throw new TypeError('"UIRenderer.getPosition" method must be implemented')
    }

    /**
     * @abstract
     * @param {MenuItemUI} item
     * @return {Size}
     */
    getSize(item) {
        throw new TypeError('"UIRenderer.getSize" method must be implemented')
    }


    /**
     * @abstract
     * Get all MenuItem at a specific position.
     * @param {*} path
     * @return {MenuItemUI[]}
     */
    getItemsAt(path) {
        throw new TypeError('"UIRenderer.getItemsAt" method must be implemented')
    }

    /**
     * @abstract
     * Get the button UI for color
     * @return {ItemUI}
     */
    getColorButtonUI() {
        throw new TypeError('"UIRenderer.getColorButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getListElementButtonUI() {
        throw new TypeError('"UIRenderer.getListElementButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getEntityElementButtonUI() {
        throw new TypeError('"UIRenderer.getEntityElementButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getUnitElementButtonUI() {
        throw new TypeError('"UIRenderer.getUnitElementButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getAssetElementButtonUI() {
        throw new TypeError('"UIRenderer.getAssetElementButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getFolderElementButtonUI() {
        throw new TypeError('"UIRenderer.getFolderElementButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getLayerElementButtonUI() {
        throw new TypeError('"UIRenderer.getLayerElementButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * Get the button UI for default
     * @return {ItemUI}
     */
    getDefaultButtonUI() {
        throw new TypeError('"UIRenderer.getDefaultButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * Get the button UI for icons
     * @return {ItemUI}
     */
    getIconButtonUI() {
        throw new TypeError('"UIRenderer.getIconButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * Get the button UI for icons
     * @return {ItemUI}
     */
    getIconTextButtonUI() {
        throw new TypeError('"UIRenderer.getIconTextButtonUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getWrapperUI() {
        throw new TypeError('"UIRenderer.getWrapperUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getListUI() {
        throw new TypeError('"UIRenderer.getListUI" method must be implemented')
    }

    /**
     * @abstract
     * Get the panel UI
     * @return {ItemUI}
     */
    getPanelUI() {
        throw new TypeError('"UIRenderer.getPanelUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getPanelActionUI() {
        throw new TypeError('"UIRenderer.getPanelActionUI" method must be implemented')
    }

    /**
     * @abstract
     * Get the text UI
     * @return {ItemUI}
     */
    getTextUI() {
        throw new TypeError('"UIRenderer.getTextUI" method must be implemented')
    }

    /**
     * @abstract
     * Get the graph UI
     * @return {ItemUI}
     */
    getGraphUI() {
        throw new TypeError('"UIRenderer.getGraphUI" method must be implemented')
    }

    /**
     * @abstract
     * Get the form UI
     * @return {ItemUI}
     */
    getFormUI() {
        throw new TypeError('"UIRenderer.getFormUI" method must be implemented')
    }

    /**
     * @abstract
     * Get the form input UI
     * @return {ItemUI}
     */
    getFormElementUI() {
        throw new TypeError('"UIRenderer.getFormElementUI" method must be implemented')
    }

    /**
     * @abstract
     * Get the form UI
     * @return {ItemUI}
     */
    getFormInlineUI() {
        throw new TypeError('"UIRenderer.getFormInlineUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getTreeUI() {
        throw new TypeError('"UIRenderer.getTreeUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getAssetsUI() {
        throw new TypeError('"UIRenderer.getAssetsUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getTabListUI() {
        throw new TypeError('"UIRenderer.getTabListUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getTabItemUI() {
        throw new TypeError('"UIRenderer.getTabItemUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getBodyUI() {
        throw new TypeError('"UIRenderer.getBodyUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getBodyItemUI() {
        throw new TypeError('"UIRenderer.getBodyItemUI" method must be implemented')
    }

    /**
     * @abstract
     * @return {ItemUI}
     */
    getAssetViewUI() {
        throw new TypeError('"UIRenderer.getAssetViewUI" method must be implemented')
    }

    /**
     * Get the UI type of the given menu item
     * @param {MenuItemUI} item
     * @return {ItemUI}
     */
    getType(item) {
        const {element} = item
        if (element.type === Layout.type.PANEL) {
            return this.getPanelUI()
        } else if (element.type === Layout.type.PANEL_ACTION) {
            return this.getPanelActionUI()
        } else if (element.type === Layout.type.WRAPPER) {
            return this.getWrapperUI()
        } else if (element.type === Layout.type.LIST) {
            return this.getListUI()
        } else if (element.type === Layout.type.STYLE_COLOR) {
            return this.getColorButtonUI()
        } else if (element.type === Layout.type.LIST_ELEMENT) {
            return this.getListElementButtonUI()
        } else if (element.type === Layout.type.ENTITY_ELEMENT) {
            return this.getEntityElementButtonUI()
        } else if (element.type === Layout.type.UNIT_ELEMENT) {
            return this.getUnitElementButtonUI()
        } else if (element.type === Layout.type.FOLDER_ELEMENT) {
            return this.getFolderElementButtonUI()
        } else if (element.type === Layout.type.LAYER_ELEMENT) {
            return this.getLayerElementButtonUI()
        } else if (element.type === Layout.type.ASSET_ELEMENT) {
            return this.getAssetElementButtonUI()
        } else if (element.type === Layout.type.TEXT) {
            return this.getTextUI()
        } else if (element.type === Layout.type.GRAPH) {
            return this.getGraphUI()
        } else if (element.type === Layout.type.FORM) {
            return this.getFormUI()
        } else if (element.type === Layout.type.FORM_ELEMENT) {
            return this.getFormElementUI().getType(item)
        } else if (element.type === Layout.type.ICON) {
            return this.getIconButtonUI()
        } else if (element.type === Layout.type.ICON_TEXT) {
            return this.getIconTextButtonUI()
        } else if (element.type === Layout.type.FORM_INLINE) {
            return this.getFormInlineUI()
        } else if (element.type === Layout.type.TREE) {
            return this.getTreeUI()
        } else if (element.type === Layout.type.ASSETS) {
            return this.getAssetsUI()
        } else if (element.type === Layout.type.TAB_LIST) {
            return this.getTabListUI()
        } else if (element.type === Layout.type.TAB_ITEM) {
            return this.getTabItemUI()
        } else if (element.type === Layout.type.BODY_CONTAINER) {
            return this.getBodyUI()
        } else if (element.type === Layout.type.BODY_ITEM) {
            return this.getBodyItemUI()
        } else if(element.type === Layout.type.ASSET_VIEW){
            return this.getAssetViewUI()
        } else if(element.type === Layout.type.BUTTON){
            return this.getDefaultButtonUI()
        } else {
            throw new TypeError(`Layout type "${element.type}" not supported!`)
        }
    }
}

export default UIRenderer