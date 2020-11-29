define(function (require) {

    const AttachEntityUI = require('./AttachEntityUI.js')
    const HideEntityUI = require('./HideEntityUI.js')
    const LockEntityUI = require('./LockEntityUI.js')

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
            HideEntityUI.draw(item, el)
            LockEntityUI.draw(item, el)
        }

        /**
         * Get screen shot of the entity as image
         * @param {Entity} entity
         * @param {{width: number, height: number}} props
         */
        static getImage(entity, props) {
            return this.getImageFromMesh(entity.mesh, props)
        }

        /**
         * Get image from a mesh
         * @param {Mesh} mesh
         * @param {{width: number, height: number}} props
         */
        static getImageFromMesh(mesh, props = {}){
            const { context } = mesh
            const canvas = context.canvas

            const entityWidth = props.width || mesh.size.width
            const entityHeight = props.height || mesh.size.height

            const isWidthGtHeight = canvas.width > canvas.height
            const coefResize = isWidthGtHeight ? entityWidth / canvas.width : entityHeight / canvas.height
            const width = isWidthGtHeight ? entityWidth : canvas.width * coefResize
            const height = isWidthGtHeight ? canvas.height * coefResize : entityHeight

            const canvasEl = document.createElement('canvas')
            canvasEl.width = width
            canvasEl.height = height

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