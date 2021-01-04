define(function () {

    /**
     * @class {ImageUI}
     */
    class ImageUI {

        /**
         * @param {Object} object
         * @param {{width: number, height: number}} props
         * @return {HTMLImageElement}
         */
        static getImage(object, props) {
            return this.getImageFromMesh(object.mesh, props)
        }

        /**
         * @param {Mesh} mesh
         * @param {{width: number, height: number}} props
         * @return {HTMLImageElement}
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

    return ImageUI
})