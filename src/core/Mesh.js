define(function (require) {

    const MeshData = require('../project/data/MeshData.js')
    const ImageHelper = require('../utils/ImageHelper.js')

    /**
     * Define a block of pixels loaded to the VRAM.
     * Attached to an entity, and used to draw pixels by the GPU
     * @extends {MeshData}
     * @property {{x: number, y: number}} position
     * @property {{width: number, height: number}} size
     * @property {OffscreenCanvasRenderingContext2D} context
     */
    class Mesh extends MeshData{

        constructor(position = {x: 0, y: 0}, size = 1) {
            super()
            this.size = this.getSize(size)
            this.position = position
            this.initCanvas()
        }

        getSize(size) {
            return typeof size === 'number' ? {width: size, height: size} : size
        }

        /**
         * Initialize the canvas and the context for the current Mesh
         */
        initCanvas() {
            const canvas = new OffscreenCanvas(this.size.width, this.size.height)
            this.context = canvas.getContext(CANVAS_CONTEXT_TYPE)
        }

        /**
         * Copy a given canvas to the mesh
         * @param {OffscreenCanvas | HTMLImageElement} canvas
         * @param {Number} x
         * @param {Number} y
         * @param {Number} sw
         * @param {Number} sh
         */
        copy(canvas, x, y, sw, sh) {
            this.context.drawImage(canvas, x, y, sw, sh)
        }

        /**
         * Clear the Mesh
         * @param {number|{ width: number, height: number }} size
         */
        clear(size = 0) {
            this.size = this.getSize(size || this.size)
            if (this.size.width > 0 && this.size.height > 0) {
                this.context.canvas.width = this.size.width
                this.context.canvas.height = this.size.height
                return true
            }
            return false
        }

        /**
         * Create a mesh from another Mesh
         * @param {Mesh} mesh
         */
        copyFromMesh(mesh){
            this.copy(mesh.context.canvas, 0, 0, this.size.width, this.size.height)
        }

        /**
         * Create a mesh from a image URL
         * @param {string} imageInput Image url or blob
         * @return {boolean}
         */
        async fromImage(imageInput) {
            if(imageInput){
                const image = new Image()
                image.src = imageInput
                await image.decode()
                const {width, height} = image
                if(width && height) {
                    this.clear({width, height})
                    this.copy(image, 0, 0, width, height)
                    return true
                }
            }
            return false
        }

        /**
         * @override
         */
        async setDataUrl(dataUrl){
            await this.fromImage(dataUrl)
        }

        /**
         * @override
         */
        getDataUrl(){
            return ImageHelper.getDataURL(this.context.canvas, this.size)
        }

        /**
         * Instantiate new Mesh from image URL
         * @param {string} imageInput Image url or blob
         * @return {Mesh}
         */
        static async fromImage(imageInput){
            const mesh = new Mesh()
            await mesh.fromImage(imageInput)
            return mesh
        }

    }

    return Mesh
})