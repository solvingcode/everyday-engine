/**
 * @abstract
 * Renderer class
 * Render elements (entities, menus, ...) to the screen
 */
class Renderer {

    /**
     * @type {Renderer}
     */
    static instance

    /**
     * @abstract
     * @param {Mesh} mesh
     * @param {Vector} position
     * @return {void}
     */
    draw(mesh, position) {
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

    /**
     * @return {*}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}

export default Renderer