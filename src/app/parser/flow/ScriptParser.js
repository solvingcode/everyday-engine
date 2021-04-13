import Parser from '../Parser.js'
import ClassScriptXmlParser from './class/ClassScriptXmlParser.js'

export default class ScriptParser extends Parser {

    /**
     * @param {Document} data
     */
    static parse(data){
        switch (data.constructor) {
            case XMLDocument:
                const type = data.documentElement.getAttribute('type')
                if(type === 'class'){
                    return ClassScriptXmlParser.parse(data)
                }else{
                    throw new TypeError(`Script data type "${type}" not supported`)
                }
            default:
                throw new TypeError(`Script data format not supported`)
        }
    }

}