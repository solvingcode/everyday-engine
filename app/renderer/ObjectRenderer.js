define(function (require) {

    import Renderer from './Renderer.js'
    import Vector from '../utils/Vector.js'

    /**
     * ObjectRenderer class
     * Manager the renderer for entities
     * @extends {Renderer}
     */
    class ObjectRenderer extends Renderer{

        constructor() {
            super()
            this.meshes = []
            this.canvas = new OffscreenCanvas(SCENE_WIDTH, SCENE_HEIGHT)
            this.context = this.canvas.getContext(CANVAS_CONTEXT_TYPE)
        }

        /**
         * @override
         */
        draw(object) {
            this.add(object.mesh)
        }

        /**
         * @override
         */
        clear() {
            objectContext.canvas.width = SCENE_WIDTH
            this.context.canvas.width = SCENE_WIDTH
        }

        /**
         * Render the meshes to the screen
         * @param {Camera} camera 
         * @todo Optimize this to not delete all meshes (rerender just entities updated)
         */
        render(camera) {
            this.clear()
            for (let iMesh in this.meshes) {
                if(this.meshes.hasOwnProperty(iMesh)){
                    const mesh = this.meshes[iMesh]
                    const { x, y } = camera.toCanvasCoord(mesh.position)
                    const { x: sceneX, y: sceneY } = this.toSceneCoord({x, y})
                    objectContext.drawImage(mesh.context.canvas, sceneX, sceneY)
                }
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

        /**
         * Convert position to scene coordinates
         * @param {Vector} position
         * @return {Vector}
         */
        toSceneCoord({x, y}){
            const {left: sceneCanvasX, top: sceneCanvasY} = objectContext.canvas.getBoundingClientRect()
            return new Vector({x: x - sceneCanvasX, y: y - sceneCanvasY})
        }
    }

    export default ObjectRenderer
})