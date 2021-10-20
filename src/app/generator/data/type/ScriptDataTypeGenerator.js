import World from '../../../world/World.js'

export default class ScriptDataTypeGenerator {

    /**
     * @param {AScript} script
     */
    static generate(script){
        World.get().getScriptManager().add(script)
    }

}