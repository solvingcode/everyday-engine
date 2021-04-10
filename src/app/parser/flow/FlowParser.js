import Parser from '../Parser.js'
import ClassFlowXmlParser from './class/ClassFlowXmlParser.js'

export default class FlowParser extends Parser {

    /**
     * @param {XMLDocument} data
     */
    static parse(data){
        switch (data.constructor) {
            case XMLDocument:
                const type = data.documentElement.getAttribute('type')
                if(type === 'class'){
                    return ClassFlowXmlParser.parse(data)
                }else{
                    throw new TypeError(`Flow data type "${type}" not supported`)
                }
            default:
                throw new TypeError(`Flow data format not supported`)
        }
    }

}