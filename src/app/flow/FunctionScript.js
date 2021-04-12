import FunctionCompiler from './compiler/FunctionCompiler.js'
import AScript from './AScript.js'

export default class FunctionScript extends AScript{

    /**
     * @override
     */
    doCompile(){
        return FunctionCompiler.get().run(this)
    }

}