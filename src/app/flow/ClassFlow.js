import AFlow from './AFlow.js'
import ClassCompiler from './compiler/ClassCompiler.js'

export default class ClassFlow extends AFlow{

    /**
     * @override
     */
    doCompile(){
        return ClassCompiler.get().run(this)
    }

}