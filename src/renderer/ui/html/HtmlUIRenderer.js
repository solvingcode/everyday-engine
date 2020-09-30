define(function (require) {

    const UIRenderer = require('../UIRenderer.js')
    const DefaultButtonUI = require('./buttons/DefaultButtonUI.js')

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
        }

        /**
         * Get/Create zone DIV
         * @param {String} zone 
         */
        getZoneDiv(zone) {
            const id = `${HTML_ID_PREFIX}${zone}`
            const div = document.getElementById(id) || document.createElement('div')
            div.setAttribute('id', id)
            document.body.appendChild(div)
            return div
        }

        /**
         * @inheritdoc
         */
        getDefaultButtonUI() {
            return DefaultButtonUI
        }

    }

    return HtmlUIRenderer
})