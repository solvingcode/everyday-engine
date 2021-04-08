import FunctionCompiler from './compiler/FunctionCompiler.js'
import AFlow from './AFlow.js'

export default class FunctionFlow extends AFlow{

    /**
     * @override
     */
    compile(){
        FunctionCompiler.get().run(this)
    }

}