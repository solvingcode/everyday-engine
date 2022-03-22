import JsCompiler from './JsCompiler.js'
import {EEClass} from './EEClass.js'

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

    /**
     * @param {World} world
     */
    static init(world) {
        world.getCompiledClassRegistry().getInstances().forEach(instance => {
            this.save(world, instance.getName())
        })
    }

    /**
     * @param {World} world
     * @param {string} className
     */
    static save(world, className) {
        EEClass[className] = this.load(world, className)
    }

}