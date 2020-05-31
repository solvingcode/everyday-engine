define(function (require) {

    class Mesh {
        constructor(position, size) {
            this.size = size
            this.position = position
            this.canvas = new OffscreenCanvas(this.size, this.size)
            this.context = this.canvas.getContext('2d')
            this.imgData = this.context.createImageData(this.size, this.size)
            this.data = this.imgData.data
        }

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