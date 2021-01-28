define(function () {

    /**
     * @abstract
     * Renderer class
     * Render elements (entities, menus, ...) to the screen
     */
    class Renderer {

        /**
         * @abstract
         * @param {Entity} object
         */
        draw(object) {
            throw new TypeError('Renderer.draw must be implemented')
        }

        /**
         * @abstract
         */
        clear() {
            throw new TypeError('Renderer.clear must be implemented')
        }

        /**
         * @abstract
         * Render the meshes to the screen (layout, entities, ...)
         * @param {Camera|Menu} object
         */
        render(object) {
            throw new TypeError('Renderer.render must be implemented')
        }
    }

    export default Renderer
})