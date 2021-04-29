import Parser from '../Parser.js'
import ClassScriptXmlParser from './class/ClassScriptXmlParser.js'
import ClassScriptCodeParser from './class/ClassScriptCodeParser.js'

export default class ScriptParser extends Parser {

    /**
     * @param {Document|string} data
     * @return {AScript}
     */
    static parse(data){
        let type
        switch (data.constructor) {
            case XMLDocument:
                type = data.documentElement.getAttribute('type')
                if(type === 'class'){
                    return ClassScriptXmlParser.parse(data)
                }else{
                    throw new TypeError(`Script data type "${type}" not supported`)
                }
            case String:
                type = 'class'
                if(type === 'class'){
                    return ClassScriptCodeParser.parse(data)
                }else{
                    throw new TypeError(`Script data type "${type}" not supported`)
                }
            default:
                throw new TypeError(`Script data format not supported (${data.constructor.name} given)`)
        }
    }

}