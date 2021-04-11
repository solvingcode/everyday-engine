import FunctionCompiler from './compiler/FunctionCompiler.js'
import AFlow from './AFlow.js'

export default class FunctionFlow extends AFlow{

    /**
     * @override
     */
    doCompile(){
        return FunctionCompiler.get().run(this)
    }

}