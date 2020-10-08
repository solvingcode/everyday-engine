define(function () {

    /**
     * ObjectRenderer class
     * Manager the renderer for entities
     */
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
         * @todo Optimize this to not delete all meshes (rerender just entities updates)
         */
        render(camera) {
            this.clear()
            for (var iMesh in this.meshes) {
                const mesh = this.meshes[iMesh]
                const { x, y } = camera.toCanvasCoord(mesh.position)
                objectContext.drawImage(mesh.context.canvas, x, y)
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