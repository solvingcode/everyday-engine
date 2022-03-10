import NotImplementedError from '../../exception/type/NotImplementedError.js'

/**
 * @abstract
 */
export default class TypeShapeGenerator {

    /**
     * @abstract
     * @return {Class<ContextTypeShapeGenerator>}
     */
    get2DContext(){
        throw new NotImplementedError(this, this.get2DContext)
    }

    /**
     * @abstract
     * @return {Class<ContextTypeShapeGenerator>}
     */
    getWebGLContext(){
        throw new NotImplementedError(this, this.getWebGLContext)
    }

}