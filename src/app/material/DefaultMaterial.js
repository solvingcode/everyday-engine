import Material from './Material.js'

export default class DefaultMaterial extends Material {

    constructor() {
        super('default')
    }

    /**
     * @override
     */
    generate(canvas, dataContext, meshComponent, transformComponent) {
    }
}