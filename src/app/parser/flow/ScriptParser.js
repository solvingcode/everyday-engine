import Parser from '../Parser.js'
import ClassScriptXmlParser from './class/ClassScriptXmlParser.js'
import ClassScriptCodeParser from './class/ClassScriptCodeParser.js'
import ClientError from '../../exception/type/ClientError.js'

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
                    throw new ClientError(`Script data type "${type}" not supported`)
                }
            case String:
                type = 'class'
                if(type === 'class'){
                    const dataStrip = data
                        .replace(/(<([^>]+)>)/gi, '')
                        .replace(/&nbsp;/g, ' ')
                    return ClassScriptCodeParser.parse(dataStrip)
                }else{
                    throw new ClientError(`Script data type "${type}" not supported`)
                }
            default:
                throw new ClientError(`Script data format not supported (${data.constructor.name} given)`)
        }
    }

}