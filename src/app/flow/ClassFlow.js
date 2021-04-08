import AFlow from './AFlow.js'
import ClassCompiler from './compiler/ClassCompiler.js'

export default class ClassFlow extends AFlow{

    /**
     * @override
     */
    compile(){
        ClassCompiler.get().run(this)
    }

}