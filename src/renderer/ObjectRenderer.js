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

        clear(){
            this.context.globalAlpha = 0
            this.context.putImageData(this.imgData, 0, 0)
            this.context.globalAlpha = 1
        }

        render(camera) {
            this.clear()
            for (var iMesh in this.meshes) {
                const mesh = this.meshes[iMesh]
                const { x, y } = camera.toCanvasCoord(mesh.position)
                this.context.putImageData(mesh.imgData, x, y)
                objectContext.drawImage(this.canvas, 0, 0)
            }
            this.meshes = []
        }

        add(mesh) {
            this.meshes.push(mesh)
        }
    }

    return ObjectRenderer
})