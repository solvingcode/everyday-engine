import Material from './Material.js'
import MaterialType from './MaterialType.js'

export default class DefaultMaterial extends Material {

    constructor() {
        super(MaterialType.DEFAULT)
    }

    /**
     * @override
     */
    generate(dataContext, meshComponent, transformComponent) {
        return dataContext.context
    }
}