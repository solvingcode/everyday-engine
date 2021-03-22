import UIRenderer from '../UIRenderer.js'
import DefaultButtonUI from './buttons/DefaultButtonUI.js'
import IconButtonUI from './buttons/IconButtonUI.js'
import ColorButtonUI from './buttons/ColorButtonUI.js'
import EntityElementButtonUI from './list/EntityElementButtonUI.js'
import HtmlPanelUI from './ui/HtmlPanelUI.js'
import HtmlTextUI from './ui/HtmlTextUI.js'
import HtmlGraphUI from './ui/HtmlGraphUI.js'
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
    getWrapperUI() {
        return HtmlWrapperUI
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
    getGraphUI() {
        return HtmlGraphUI
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
        const parentHTML = item.parent && this.getBody(item.parent)
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
    getBody(item) {
        const type = this.getType(item)
        return type.getBody(this.getElement(item))
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
        el.setAttribute('data-name', element.props.name)
        el.setAttribute('data-zone', element.zone)
        type.postCreate(item, el, this)
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
        if (el.style !== style) {
            el.style = style
        }
        if (el.className !== className) {
            el.className = className
        }
        type.postUpdate(item, el, this)
    }


    /**
     * Get class names for the given menu item
     * @param {MenuItemUI} item
     * @return {string}
     */
    getClassName(item) {
        const classNames = []
        const type = this.getType(item)
        item.element.isSelected() && classNames.push('selected')
        item.element.isCollapsed() && classNames.push('collapsed')
        classNames.push(type.getProps().className)
        classNames.push(type.getClassName(item))
        return classNames.join(' ')
    }

    /**
     * Get style from props
     * @param {MenuItemUI} item
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
        const target = path && path.find(el => el.getAttribute && el.getAttribute('data-index'))
        const index = target && parseInt(target.getAttribute('data-index'))
        const zone = target && target.getAttribute('data-zone')
        if (index !== null && zone) {
            return this.menu.items.find((item) =>
                item.index === index && item.element.zone === zone
            )
        }
    }

    /**
     * Clean HTML element and all childs
     */
    clean() {
        const childs = document.querySelectorAll('[data-index]')
        childs.forEach(node => {
            const index = parseInt(node.getAttribute('data-index'))
            const item = Menu.get().findItemByZone(index, node.getAttribute('data-zone'))
            if (!item) {
                node.remove()
            } else {
                const {tag} = this.getType(item).getProps()
                if (tag !== node.tagName.toLowerCase() ||
                    item.element.props.name !== node.getAttribute('data-name')) {
                    node.remove()
                }
            }
        })
    }
}

export default HtmlUIRenderer