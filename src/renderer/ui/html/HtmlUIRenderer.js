define(function (require) {

    const UIRenderer = require('../UIRenderer.js')
    const DefaultButtonUI = require('./buttons/DefaultButtonUI.js')
    const ColorButtonUI = require('./buttons/ColorButtonUI.js')
    const HtmlPanelUI = require('./HtmlPanelUI.js')
    const Menu = require('../../../layout/Menu.js')

    /**
     * HTML UI Renderer class
     * Define the UI renderer for html
     * @abstract
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
         * @inheritdoc
         */
        getDefaultButtonUI() {
            return DefaultButtonUI
        }

        /**
         * @inheritdoc
         */
        getPanelUI() {
            return HtmlPanelUI
        }

        /**
         * @inheritdoc
         */
        getColorButtonUI() {
            return ColorButtonUI
        }

        /**
         * Get/Create zone DIV
         * @param {String} zone 
         */
        getZoneDiv(zone) {
            const id = `${HTML_ID_PREFIX}${zone}`
            const props = this.getZoneProps(zone)
            const existDiv = document.getElementById(id)
            const div = existDiv || document.createElement('div')
            const style = this.getStyle(props)
            if (!existDiv) {
                div.setAttribute('id', id)
                div.style = style
                document.body.appendChild(div)
            }
            return div
        }

        /**
         * Get HTML element for the given menu item
         * @param {MenuItemUI} item 
         * @param {Class} type 
         */
        getElement(item, type) {
            const { element, index } = item
            const tag = type.props.tag
            const zoneDiv = this.getZoneDiv(element.zone)
            const id = item.getId()
            const existEl = document.getElementById(id)
            const el = existEl || document.createElement(tag)
            const style = this.getStyle(type.props)
            const className = item.element.isSelected() ? 'selected' : ''
            if (el.style !== style) {
                el.style = style
            }
            if (el.className !== className) {
                el.className = className
            }
            if (!existEl) {
                el.setAttribute('id', id)
                el.setAttribute('data-index', index)
                el.setAttribute('data-zone', element.zone)
                tag !== 'div' && (el.textContent = element.props.name)
                zoneDiv.appendChild(el)
            }
            return el
        }

        /**
         * Get style from props
         * @param {Object} props
         */
        getStyle(props) {
            const { x0, y0, width, height, margin, padding } = props
            let style = []
            if (x0 || y0) {
                style.push('position: absolute')
                style.push('z-index: 9999')
            }
            x0 && style.push(`left: ${x0}px`)
            y0 && style.push(`top: ${y0}px`)
            width && style.push(`width: ${width}px`)
            height && style.push(`height: ${height}px`)
            margin && margin.x
                && style.push(`margin-left: ${margin.x}px`)
                && style.push(`margin-right: ${margin.x}px`)
            margin && margin.y
                && style.push(`margin-top: ${margin.y}px`)
                && style.push(`margin-bottom: ${margin.y}px`)
            padding && padding.x
                && style.push(`padding-left: ${padding.x}px`)
                && style.push(`padding-right: ${padding.x}px`)
            padding && padding.y
                && style.push(`padding-top: ${padding.y}px`)
                && style.push(`padding-bottom: ${padding.y}px`)
            return style.join(';')
        }

        /**
         * @inheritdoc
         */
        getItemAt(mouse) {
            const { target } = mouse
            const index = target && parseInt(target.getAttribute('data-index'))
            const zone = target && target.getAttribute('data-zone')
            if (index !== null && zone) {
                return this.menu.items.find((item) =>
                    item.index === index && item.element.zone === zone
                )
            }
        }

    }

    return HtmlUIRenderer
})