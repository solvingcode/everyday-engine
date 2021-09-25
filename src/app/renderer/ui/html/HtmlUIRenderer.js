import UIRenderer from '../UIRenderer.js'
import DefaultButtonUI from './buttons/DefaultButtonUI.js'
import IconButtonUI from './buttons/IconButtonUI.js'
import ColorButtonUI from './buttons/ColorButtonUI.js'
import EntityElementButtonUI from './list/EntityElementButtonUI.js'
import HtmlPanelUI from './ui/HtmlPanelUI.js'
import HtmlTextUI from './ui/HtmlTextUI.js'
import HtmlFormUI from './forms/HtmlFormUI.js'
import HtmlFormElementUI from './forms/HtmlFormElementUI.js'
import Menu from '../../../layout/Menu.js'
import {HTML_ID_PREFIX} from '../../../core/Constant.js'
import HtmlFormInlineUI from './forms/HtmlFormInlineUI.js'
import HtmlTreeUI from './ui/HtmlTreeUI.js'
import HtmlPanelActionUI from './ui/HtmlPanelActionUI.js'
import HtmlWrapperUI from './ui/HtmlWrapperUI.js'
import AssetElementButtonUI from './list/AssetElementButtonUI.js'
import FolderElementButtonUI from './list/FolderElementButtonUI.js'
import HtmlAssetsUI from './ui/HtmlAssetsUI.js'
import UnitElementButtonUI from './list/UnitElementButtonUI.js'
import HtmlTabListUI from './ui/HtmlTabListUI.js'
import HtmlTabItemUI from './ui/HtmlTabItemUI.js'
import HtmlBodyUI from './ui/HtmlBodyUI.js'
import HtmlBodyItemUI from './ui/HtmlBodyItemUI.js'
import IconTextButtonUI from './buttons/IconTextButtonUI.js'
import ListElementButtonUI from './list/ListElementButtonUI.js'
import HtmlAssetViewUI from './ui/HtmlAssetViewUI.js'
import LayerElementButtonUI from './list/LayerElementButtonUI.js'
import Vector from '../../../utils/Vector.js'
import Layout from '../../../layout/Layout.js'
import Size from '../../../pobject/Size.js'
import HtmlListUI from './ui/HtmlListUI.js'

/**
 * HTML UI Renderer class
 * Define the UI renderer for html
 */
class HtmlUIRenderer extends UIRenderer {

    constructor() {
        super()
        this.menu = Menu.get()
        this.menu.setUIRenderer(this)
    }

    /**
     * @override
     */
    getDefaultButtonUI() {
        return DefaultButtonUI
    }

    /**
     * @override
     */
    getIconButtonUI() {
        return IconButtonUI
    }

    /**
     * @override
     */
    getIconTextButtonUI() {
        return IconTextButtonUI
    }

    /**
     * @override
     */
    getWrapperUI() {
        return HtmlWrapperUI
    }

    /**
     * @override
     */
    getListUI() {
        return HtmlListUI
    }

    /**
     * @override
     */
    getPanelUI() {
        return HtmlPanelUI
    }

    /**
     * @override
     */
    getPanelActionUI() {
        return HtmlPanelActionUI
    }

    /**
     * @override
     */
    getTextUI() {
        return HtmlTextUI
    }

    /**
     * @override
     */
    getFormUI() {
        return HtmlFormUI
    }

    /**
     * @override
     */
    getFormInlineUI() {
        return HtmlFormInlineUI
    }

    /**
     * @override
     */
    getFormElementUI() {
        return HtmlFormElementUI
    }

    /**
     * @override
     */
    getColorButtonUI() {
        return ColorButtonUI
    }

    /**
     * @override
     */
    getListElementButtonUI() {
        return ListElementButtonUI
    }

    /**
     * @override
     */
    getEntityElementButtonUI() {
        return EntityElementButtonUI
    }

    /**
     * @override
     */
    getUnitElementButtonUI() {
        return UnitElementButtonUI
    }

    /**
     * @override
     */
    getAssetElementButtonUI() {
        return AssetElementButtonUI
    }

    /**
     * @override
     */
    getFolderElementButtonUI() {
        return FolderElementButtonUI
    }

    /**
     * @override
     */
    getLayerElementButtonUI() {
        return LayerElementButtonUI
    }

    /**
     * @override
     */
    getTreeUI() {
        return HtmlTreeUI
    }

    /**
     * @override
     */
    getAssetsUI() {
        return HtmlAssetsUI
    }

    /**
     * @override
     */
    getTabListUI() {
        return HtmlTabListUI
    }

    /**
     * @override
     */
    getTabItemUI() {
        return HtmlTabItemUI
    }

    /**
     * @override
     */
    getBodyUI() {
        return HtmlBodyUI
    }

    /**
     * @override
     */
    getBodyItemUI() {
        return HtmlBodyItemUI
    }

    /**
     * @override
     */
    getAssetViewUI() {
        return HtmlAssetViewUI
    }

    /**
     * Get/Create zone DIV
     * @param {String} zone
     */
    getZoneDiv(zone) {
        const id = `${HTML_ID_PREFIX}${zone}`
        const existDiv = document.getElementById(id)
        const div = existDiv || document.createElement('div')
        if (!existDiv) {
            div.setAttribute('id', id)
            const wrapper = document.createElement('div')
            wrapper.className = 'app-zone-wrapper'
            div.appendChild(wrapper)
            document.body.appendChild(div)
        }
        return div.getElementsByClassName('app-zone-wrapper')[0]
    }

    /**
     * @override
     */
    getElement(item) {
        const {element} = item
        const type = this.getType(item)
        const tag = type.getProps().tag
        const parentHTML = item.parent && this.getBody(item.parent, item)
        const zoneDiv = parentHTML || this.getZoneDiv(element.zone)
        const id = item.getId()
        const existEl = document.getElementById(id)
        const el = existEl || document.createElement(tag)
        if (!existEl) {
            this.postCreate(item, el)
            zoneDiv.appendChild(el)
        } else {
            this.postUpdate(item, el)
        }
        return el
    }

    /**
     * @override
     */
    getBody(item, childItem) {
        const type = this.getType(item)
        return type.getBody(this.getElement(item), childItem)
    }

    /**
     * What to do after create HTML Element
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     */
    postCreate(item, el) {
        const {element, index} = item
        const type = this.getType(item)
        el.setAttribute('id', item.getId())
        el.setAttribute('data-index', index)
        el.setAttribute('data-root-el', 'true')
        el.setAttribute('data-parent-index', item.parent ? item.parent.index : 0)
        el.setAttribute('data-name', element.props.name)
        el.setAttribute('data-zone', element.zone)
        type.postCreate(item, el, this)
        this.setupTriggerClick(type, item, el)
    }

    /**
     * @param {ItemUI} type
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     */
    setupTriggerClick(type, item, el) {
        const triggerEl = type.getTriggerClickElement(item, el)
        if (triggerEl !== el) {
            if (triggerEl.getAttribute('data-index') !== el.getAttribute('data-index')) {
                triggerEl.setAttribute('data-index', el.getAttribute('data-index'))
            }
            if (triggerEl.getAttribute('data-zone') !== el.getAttribute('data-zone')) {
                triggerEl.setAttribute('data-zone', el.getAttribute('data-zone'))
            }
        }
        if (triggerEl.getAttribute('data-index-trigger-click') !== 'true') {
            triggerEl.setAttribute('data-index-trigger-click', 'true')
        }
    }

    /**
     * What to do after update HTML Element
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     */
    postUpdate(item, el) {
        const style = this.getStyle(item)
        const className = this.getClassName(item)
        const type = this.getType(item)
        if (el.style.cssText !== style) {
            el.style = style
        }
        if (el.className !== className) {
            el.className = className
        }
        type.postUpdate(item, el, this)
        this.setupTriggerClick(type, item, el)
    }


    /**
     * Get class names for the given menu item
     * @param {MenuItemUI} item
     * @return {string}
     */
    getClassName(item) {
        const classNames = []
        const type = this.getType(item)
        const hasChild = this.hasChild(item)
        if (item.element.isSelected()) {
            classNames.push('selected')
        }
        if (item.element.isCollapsed()) {
            classNames.push('collapsed')
        }
        if (item.element.isStartDragging()) {
            classNames.push('start-drag')
        }
        if (item.element.isEndDragging()) {
            classNames.push('end-drag')
        }
        !item.element.isEnabled() && classNames.push('disabled')
        item.element.isReadOnly() && classNames.push('readonly')
        item.element.isLocked() && classNames.push('locked')
        item.element.isHidden() && classNames.push('hidden')
        hasChild && classNames.push('has-child')
        classNames.push(type.getProps().className)
        classNames.push(type.getClassName(item))
        return classNames.join(' ')
    }

    /**
     * @param {MenuItemUI} item
     * @return {boolean}
     */
    hasChild(item) {
        const type = this.getType(item)
        return !!(item.element.items && item.element.items.length) && type.hasChild(item)
    }

    /**
     * Get style from props
     * @param {MenuItemUI} item
     * @return {string}
     */
    getStyle(item) {
        const type = this.getType(item)
        const itemStyle = type.getStyle(item)
        const {
            x0, y0,
            width, height,
            backgroundColor
        } = {...type.getProps(), ...itemStyle}
        let style = []
        if (x0 || y0) {
            style.push('position: absolute')
            style.push('z-index: 9999')
        }
        x0 && style.push(`left: ${x0}px`)
        y0 && style.push(`top: ${y0}px`)
        width && style.push(`width: ${width}`)
        height && style.push(`height: ${height}`)
        backgroundColor && style.push(`background-color: ${backgroundColor}`)
        return style.join(';')
    }

    /**
     * @override
     */
    getItemAt(mouse) {
        const {path} = mouse
        const target = path && path.find(el => el.getAttribute &&
            el.getAttribute('data-index') && el.getAttribute('data-index-trigger-click'))
        const index = target && parseInt(target.getAttribute('data-index'))
        const zone = target && target.getAttribute('data-zone')
        if (index !== null && zone) {
            return this.menu.items.find((item) =>
                item.index === index && item.element.zone === zone
            )
        }
    }

    /**
     * @param {MenuItemUI} item
     * @return {HTMLElement}
     */
    getHtmlElement(item) {
        const id = item.getId()
        return document.getElementById(id)
    }

    /**
     * @override
     */
    getPosition(item) {
        const htmlElement = this.getHtmlElement(item)
        const boundClient = htmlElement.getBoundingClientRect()
        return new Vector({
            x: boundClient.x,
            y: boundClient.y
        })
    }

    /**
     * @override
     */
    getSize(item) {
        const htmlElement = this.getHtmlElement(item)
        const boundClient = htmlElement.getBoundingClientRect()
        return new Size({
            width: boundClient.width,
            height: boundClient.height
        })
    }

    /**
     * @override
     */
    getItemsAt(path) {
        const targets = (path && path.filter(el => el.getAttribute &&
            el.getAttribute('data-index') && el.getAttribute('data-index-trigger-click'))) || []
        const indexZones = []
        targets.forEach(target => {
            const index = target && parseInt(target.getAttribute('data-index'))
            const zone = target && target.getAttribute('data-zone')
            indexZones.push({index, zone})
        })
        if (indexZones.length) {
            return this.menu.items.filter(item =>
                indexZones.find(indexZone =>
                    item.index === indexZone.index &&
                    item.element.zone === indexZone.zone
                )
            )
        }
        return []
    }

    /**
     * Clean HTML element and all childs
     */
    clean() {
        const childs = document.querySelectorAll('[data-index][data-root-el]')
        childs.forEach(node => {
            const index = parseInt(node.getAttribute('data-index'))
            const parentIndex = parseInt(node.getAttribute('data-parent-index'))
            const item = Menu.get().findItemByIndex(index)
            if (!item || (item.parent && item.parent.index !== parentIndex)) {
                node.remove()
            } else {
                const {tag} = this.getType(item).getProps()
                if (tag !== node.tagName.toLowerCase() ||
                    item.element.props.name !== node.getAttribute('data-name')) {
                    node.remove()
                }
            }
        })
        this.updateZones()
    }

    updateZones() {
        for (const iZone in Layout.zone) {
            if (Layout.zone.hasOwnProperty(iZone)) {
                const zone = Layout.zone[iZone]
                const id = `${HTML_ID_PREFIX}${zone}`
                const zoneDiv = document.getElementById(id)
                const hasChild = !!Menu.get().findItemsByZone(zone).filter(item => item.element.isValid()).length
                if (zoneDiv) {
                    if (hasChild) {
                        zoneDiv.className = 'has-child'
                    } else {
                        zoneDiv.className = ''
                    }
                }
            }
        }
    }
}

export default HtmlUIRenderer