define(function (require) {

    const UIRenderer = require('../UIRenderer.js')
    const DefaultButtonUI = require('./buttons/DefaultButtonUI.js')
    const ColorButtonUI = require('./buttons/ColorButtonUI.js')
    const LayerEntityButtonUI = require('./buttons/LayerEntityButtonUI.js')
    const HtmlPanelUI = require('./HtmlPanelUI.js')
    const HtmlTextUI = require('./HtmlTextUI.js')
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
        getTextUI() {
            return HtmlTextUI
        }

        /**
         * @inheritdoc
         */
        getColorButtonUI() {
            return ColorButtonUI
        }

        /**
         * @inheritdoc
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
         * Get HTML element for the given menu item
         * @param {MenuItemUI} item 
         * @param {HTMLElement} parentHTML 
         */
        getElement(item, parentHTML) {
            const { element } = item
            const type = this.getType(item)
            const tag = type.props.tag
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
         * What to do after create HTML Element
         * @param {MenuItemUI} item 
         * @param {HTMLElement} el 
         */
        postCreate(item, el) {
            const { element, index } = item
            const type = this.getType(item)
            el.setAttribute('id', item.getId())
            el.setAttribute('data-index', index)
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
            classNames.push(type.props.className)
            classNames.push(type.getClassName(item))
            return classNames.join(' ')
        }

        /**
         * Get screen shot of the entity as image
         * @param {MenuItemUI} item 
         */
        getEntityImage(item) {
            const entity = item.element.getEntity()
            const { entityWidth, entityHeight } = this.getType(item).props
            const { canvas } = entity.mesh

            const isWidthGtHeight = canvas.width > canvas.height
            const coefResize = isWidthGtHeight ? entityWidth / canvas.width : entityHeight / canvas.height
            const width = isWidthGtHeight ? entityWidth : canvas.width * coefResize
            const height = isWidthGtHeight ? canvas.height * coefResize : entityHeight

            const canvasEl = document.createElement('canvas')
            canvasEl.width = entityWidth
            canvasEl.height = entityHeight

            const contextEl = canvasEl.getContext('2d')
            contextEl.drawImage(canvas, 0, 0, width, height)

            const image = new Image()
            image.src = canvasEl.toDataURL('image/png')

            canvasEl.remove()

            return image
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
            } = { ...type.props, ...itemStyle }
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
         * @inheritdoc
         */
        getItemAt(mouse) {
            const { path } = mouse
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
                    const { tag } = this.getType(item).props
                    tag !== node.tagName.toLowerCase() && node.remove()
                }
            })
        }

    }

    return HtmlUIRenderer
})