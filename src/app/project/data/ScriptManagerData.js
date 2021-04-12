import Data from './Data.js'

/**
 * @extends {Data}
 */
export default class ScriptManagerData extends Data {

    /**
     * @type {AScript[]}
     */
    scripts

    constructor() {
        super()
        this.scripts = []
    }

    /**
     * @return {AScript[]}
     */
    getScripts(){
        return this.scripts
    }

    /**
     * @param {AScript[]} scripts
     */
    setScripts(scripts){
        this.scripts = scripts
    }

    /**
     * @param {AScript[]} scripts
     */
    concatScripts(scripts) {
        this.setScripts(scripts)
    }

}