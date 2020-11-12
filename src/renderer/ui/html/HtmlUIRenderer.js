define(function (require) {

    const UIRenderer = require('../UIRenderer.js')
    const DefaultButtonUI = require('./buttons/DefaultButtonUI.js')
    const IconButtonUI = require('./buttons/IconButtonUI.js')
    const ColorButtonUI = require('./buttons/ColorButtonUI.js')
    const LayerEntityButtonUI = require('./buttons/LayerEntityButtonUI.js')
    const HtmlPanelUI = require('./HtmlPanelUI.js')
    const HtmlTextUI = require('./HtmlTextUI.js')
    const HtmlGraphUI = require('./HtmlGraphUI.js')
    const HtmlFormUI = require('./forms/HtmlFormUI.js')
    const HtmlFormElementUI = require('./forms/HtmlFormElementUI.js')
    const Menu = require('../../../layout/Menu.js')

    /**
     * HTML UI Renderer class
     * Define the UI renderer for html
     */
    class HtmlUIRenderer extends UIRenderer {

        /**
         * @param {CanvasRenderingContext2D} context
         */
        constructor(context) {
            super()
            this.context = context
            this.menu = Menu.get()
            this.menu.setUIRenderer(this)
        }

        /**
         * @inheritDoc
         */
        getDefaultButtonUI() {
            return DefaultButtonUI
        }

        /**
         * @inheritDoc
         */
        getIconButtonUI() {
            return IconButtonUI
        }

        /**
         * @inheritDoc
         */
        getPanelUI() {
            return HtmlPanelUI
        }

        /**
         * @inheritDoc
         */
        getTextUI() {
            return HtmlTextUI
        }

        /**
         * @inheritDoc
         */
        getGraphUI() {
            return HtmlGraphUI
        }

        /**
         * @inheritDoc
         */
        getFormUI() {
            return HtmlFormUI
        }

        /**
         * @inheritDoc
         */
        getFormElementUI() {
            return HtmlFormElementUI
        }

        /**
         * @inheritDoc
         */
        getColorButtonUI() {
            return ColorButtonUI
        }

        /**
         * @inheritDoc
         */
        getLayerEntityButtonUI() {
            return LayerEntityButtonUI
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
                document.body.appendChild(div)
            }
            return div
        }

        /**
         * @inheritDoc
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
         * @inheritDoc
         */
        getBody(item){
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
         */
        getClassName(item) {
            const classNames = []
            const type = this.getType(item)
            item.element.isSelected() && classNames.push('selected')
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
         * @inheritDoc
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

    return HtmlUIRenderer
})