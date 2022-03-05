export default class LightManager {

    static instance

    /**
     * @type {{position: Vector, context: CanvasRenderingContext2D}|null}
     */
    light

    /**
     * @return {{position: Vector, context: CanvasRenderingContext2D}|null}
     */
    getLight() {
        return this.light
    }

    /**
     * @param {{position: Vector, context: CanvasRenderingContext2D}|null} light
     */
    setLight(light) {
        this.light = light
    }

    clear() {
        this.light = null
    }

    /**
     * @return {LightManager}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}