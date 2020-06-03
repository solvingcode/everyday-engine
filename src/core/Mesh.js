define(function (require) {

    class Mesh {

        constructor(position, size) {
            this.size = this.getSize(size)
            this.position = position
            this.initCanvas()
        }

        /**
         * Initalize the canvas and the context for the current Mesh
         */
        initCanvas() {
            this.canvas = new OffscreenCanvas(this.size.width, this.size.height)
            this.context = this.canvas.getContext('2d')
            this.imgData = this.context.createImageData(this.size.width, this.size.height)
            this.data = this.imgData.data
        }

        getSize(size) {
            return typeof size === 'number' ? { width: size, height: size } : size
        }

        /**
         * Clear the Mesh
         */
        clear(size) {
            this.size = this.getSize(size)
            this.initCanvas()
        }

        /**
         * Add pixels to the Mesh data
         * @param {Array} pixels 
         */
        add(pixels) {
            const l = this.data.length
            for (var i = 0; i < l; i += 4) {
                var rgb = pixels[i / 4]
                if (rgb) {
                    this.data[i] = rgb[0]
                    this.data[i + 1] = rgb[1]
                    this.data[i + 2] = rgb[2]
                    this.data[i + 3] = rgb[3]
                }
            }
        }
    }

    return Mesh
})