define(function () {
    class ObjectRenderer {
        constructor() {
            this.meshes = []
            this.canvas = new OffscreenCanvas(WINDOW_WIDTH, WINDOW_HEIGHT)
            this.context = this.canvas.getContext('2d')
            this.imgData = this.context.createImageData(WINDOW_WIDTH, WINDOW_HEIGHT)
        }

        /**
         * Clear the context
         */
        clear() {
            this.context.canvas.width = WINDOW_WIDTH
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
                this.context.drawImage(mesh.context.canvas, x, y)
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