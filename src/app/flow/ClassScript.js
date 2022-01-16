import AScript from './AScript.js'
import ClassCompiler from './compiler/ClassCompiler.js'

export default class ClassScript extends AScript{

    /**
     * @override
     */
    doCompile(world){
        return ClassCompiler.get().run(this, world)
    }

}