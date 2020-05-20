define(function () {
    class Camera {
        constructor(position) {
            this.position = position
            this.speed = 5
        }
        move(dx, dy) {
            this.position.x += dx * this.speed
            this.position.y += dy * this.speed
        }
        update(position) {
            this.position = {
                x: position.x,
                y: WINDOW_HEIGHT - position.y
            }
        }
        getCameraView() {
            const cameraViewX = this.position.x - WINDOW_WIDTH / 2
            const cameraViewY = this.position.y - WINDOW_HEIGHT / 2
            return { cameraViewX, cameraViewY }
        }
        toCanvasCoord(position) {
            const { cameraViewX, cameraViewY } = this.getCameraView()
            const x = parseInt(position.x) - cameraViewX
            const y = WINDOW_HEIGHT - parseInt(position.y) - cameraViewY
            return { x, y }
        }
        fromCanvasCoord(position) {
            const { cameraViewX, cameraViewY } = this.getCameraView()
            const x = position.x + cameraViewX
            const y = WINDOW_HEIGHT - cameraViewY - position.y
            return { x, y }
        }
    }

    return Camera
})