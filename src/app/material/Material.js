import MaterialData from '../project/data/MaterialData.js'
import Maths from '../utils/Maths.js'
import SystemError from '../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class Material extends MaterialData{

    /**
     * @param {string} name
     */
    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name
    }

    /**
     * @abstract
     * @param {DataContext} dataContext
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @return {CanvasRenderingContext2D}
     */
    generate(dataContext, meshComponent, transformComponent){
        throw new SystemError(`${this.constructor.name}.generate must be implement`)
    }

}