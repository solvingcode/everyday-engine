define(function () {

    /**
     * Define a block of pixels loaded to the VRAM.
     * Attached to an entity, and used to draw pixels by the GPU
     * @property {{x: number, y: number}} position
     * @property {{width: number, height: number}} size
     */
    class Mesh {

        constructor(position, size) {
            this.size = this.getSize(size)
            this.position = position
            this.initCanvas()
        }

        getSize(size) {
            return typeof size === 'number' ? { width: size, height: size } : size
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
         * @param {OffscreenCanvas} canvas 
         * @param {Number} x 
         * @param {Number} y 
         * @param {Number} sw 
         * @param {Number} sh 
         */
        copy(canvas, x, y, sw, sh){
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
    }

    return Mesh
})