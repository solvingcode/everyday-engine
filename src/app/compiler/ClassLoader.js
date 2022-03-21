import JsCompiler from './JsCompiler.js'

export default class ClassLoader {

    /**
     * @param {World} world
     * @param {string} className
     * @return {UnitActor}
     */
    static load(world, className) {
        const classCompiled = world.getCompiledClassRegistry().getInstance(className)
        if (classCompiled) {
            return JsCompiler.compile(classCompiled.getCode())
        }
    }

}