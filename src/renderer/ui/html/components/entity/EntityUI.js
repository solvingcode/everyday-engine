define(function (require) {

    const AttachEntityUI = require('./AttachEntityUI.js')
    const StaticEntityUI = require('./StaticEntityUI.js')

    /**
     * EntityUI class
     * Manage the rendering of entities for HTML
     */
    class EntityUI {
        /**
         * What to do after create HTML Element
         * @param {MenuItemUI} item 
         * @param {HTMLElement} el 
         * @param {UIRenderer} uiRenderer 
         */
        static draw(item, el, uiRenderer) {
            AttachEntityUI.draw(item, el, uiRenderer)
            StaticEntityUI.draw(item, el, uiRenderer)
        }

        /**
         * Get screen shot of the entity as image
         * @param {MenuItemUI} item 
         */
        static getImage(entity, props) {
            const { entityWidth, entityHeight } = props
            const { context } = entity.mesh
            const canvas = context.canvas

            const isWidthGtHeight = canvas.width > canvas.height
            const coefResize = isWidthGtHeight ? entityWidth / canvas.width : entityHeight / canvas.height
            const width = isWidthGtHeight ? entityWidth : canvas.width * coefResize
            const height = isWidthGtHeight ? canvas.height * coefResize : entityHeight

            const canvasEl = document.createElement('canvas')
            canvasEl.width = entityWidth
            canvasEl.height = entityHeight

            const contextEl = canvasEl.getContext(CANVAS_CONTEXT_TYPE)
            contextEl.drawImage(canvas, 0, 0, width, height)

            const image = new Image()
            image.src = canvasEl.toDataURL('image/png')

            canvasEl.remove()

            return image
        }
    }

    return EntityUI
})