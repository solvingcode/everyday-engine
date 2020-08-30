define(function (require) {

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
         * Initalize the canvas and the context for the current Mesh
         */
        initCanvas() {
            this.canvas = new OffscreenCanvas(this.size.width, this.size.height)
            this.context = this.canvas.getContext('2d')
            this.imgData = this.context.createImageData(this.size.width, this.size.height)
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
            this.imgData = this.context.createImageData(this.size.width, this.size.height)
        }

        /**
         * Clear the Mesh
         */
        clear(size = 0) {
            this.size = this.getSize(size || this.size)
            if (this.size.width > 0 && this.size.height > 0) {
                this.initCanvas()
                return true
            }
            return false
        }
    }

    return Mesh
})