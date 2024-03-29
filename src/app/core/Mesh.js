import ImageHelper from '../utils/ImageHelper.js'
import Size from '../pobject/Size.js'
import Vector from '../utils/Vector.js'
import BlobData from '../project/data/BlobData.js'
import Canvas from './Canvas.js'

/**
 * Define a block of pixels loaded to the VRAM.
 * Attached to an entity, and used to draw pixels by the GPU
 * @extends {BlobData}
 * @property {Vector} position
 * @property {{width: number, height: number}} size
 * @property {OffscreenCanvasRenderingContext2D} context
 */
class Mesh extends BlobData {

    constructor(position = new Vector(), size = 1) {
        super()
        this.size = this.initSize(size)
        this.position = position
        this.initCanvas()
    }

    /**
     * @param {number|Size} size
     * @return {Size}
     */
    initSize(size) {
        return _.isNumber(size) ? new Size({width: size, height: size}) : size
    }

    /**
     * Initialize the canvas and the context for the current Mesh
     */
    initCanvas() {
        const canvas = new Canvas(this.size.width, this.size.height)
        this.context = canvas.getContext('2d')
    }

    /**
     * Copy a given canvas to the mesh
     * @param {Canvas | HTMLImageElement} canvas
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
     * @param {number|Size} size
     */
    clear(size = 0) {
        this.size = this.initSize(size || this.size)
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
    copyFromMesh(mesh) {
        this.copy(mesh.context.canvas, 0, 0, this.size.width, this.size.height)
    }

    /**
     * Create a mesh from a image URL
     * @param {string} imageInput Image url or blob
     * @return {boolean}
     */
    async fromImage(imageInput) {
        if (imageInput) {
            const image = new Image()
            image.src = imageInput
            await image.decode()
            const {width, height} = image
            if (width && height) {
                this.clear(new Size({width, height}))
                this.copy(image, 0, 0, width, height)
                return true
            }
        }
        return false
    }

    /**
     * @override
     */
    async setDataUrl(dataUrl) {
        await this.fromImage(dataUrl)
    }

    /**
     * @override
     */
    getDataUrl() {
        return ImageHelper.getDataURL(this.context.canvas, this.size)
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     */
    setContext(context) {
        this.context = context
    }

    /**
     * Instantiate new Mesh from image URL
     * @param {string} imageInput Image url or blob
     * @return {Mesh}
     */
    static async fromImage(imageInput) {
        const mesh = new Mesh()
        await mesh.fromImage(imageInput)
        return mesh
    }

}

export default Mesh