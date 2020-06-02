define(function () {
    class ObjectRenderer {
        constructor() {
            this.meshes = []
            this.canvas = new OffscreenCanvas(WINDOW_WIDTH, WINDOW_HEIGHT)
            this.context = this.canvas.getContext('2d')
            this.imgData = this.context.createImageData(WINDOW_WIDTH, WINDOW_HEIGHT)
            this.data = this.imgData.data
            this.data.fill(0)
        }

        /**
         * Clear the context
         */
        clear() {
            this.context.globalAlpha = 0
            this.context.putImageData(this.imgData, 0, 0)
            this.context.globalAlpha = 1
        }

        /**
         * Render the meshes to the screen
         * @param {Camera} camera 
         */
        render(camera) {
            this.clear()
            for (var iMesh in this.meshes) {
                const mesh = this.meshes[iMesh]
                const { x, y } = mesh.position
                this.context.putImageData(mesh.imgData, x, y)
                objectContext.drawImage(this.canvas, 0, 0)
            }
            this.meshes = []
        }

        /**
         * Add a mesh
         * @param {Mesh} mesh 
         */
        add(mesh) {
            this.meshes.push(mesh)
        }
    }

    return ObjectRenderer
})