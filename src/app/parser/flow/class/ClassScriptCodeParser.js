import Parser from '../../Parser.js'
import ClassScript from '../../../flow/ClassScript.js'
import World from '../../../world/World.js'
import {NODE_TYPES} from '../../../flow/node/ANode.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import ClientError from '../../../exception/type/ClientError.js'

export default class ClassScriptCodeParser extends Parser {

    static KW_CLASS = 'class'
    static KW_NEW = 'new'
    static KW_VAR = 'var'
    static KW_IF = 'if'

    /**
     * @override
     * @param {string} code
     * @return {AScript}
     */
    static parse(code) {
        let scriptCode = code.trim()
        const name = this.getClassName(scriptCode)
        const script = new ClassScript(name)
        const functionRegistry = World.get().getFunctionRegistry()
        const nodes = this.getNodes(scriptCode)
        nodes.forEach(node => {
            const scriptNode = ScriptHelper.createNode(functionRegistry, script, node.type, node.value)
            node.id = scriptNode.getId()
        })
        const edges = this.getEdges(script, nodes)
        edges.forEach(edge => {
            const nodeSource = script.findNodeById(edge.sourceId)
            const nodeTarget = script.findNodeById(edge.targetId)
            if (!nodeSource) {
                throw new ClientError(`ClassScriptCodeParser Error: Node ${edge.sourceId} not founded`)
            }
            if (!nodeTarget) {
                throw new ClientError(`ClassScriptCodeParser Error: Node ${edge.targetId} not founded`)
            }
            nodeTarget.attach(nodeSource, edge.connectionId)
        })
        return script
    }

    /**
     * @param {string} code
     * @return {string}
     */
    static getClassName(code) {
        const nameRegex = new RegExp(`^${this.KW_CLASS}[\\s]+([a-zA-Z0-9]+)[\\s]*\{.*}$`, 's')
        const nameMatch = code.match(nameRegex)
        return nameMatch[1]
    }

    /**
     * @param {string} code
     * @return {NodeScriptParser[]}
     */
    static getNodes(code) {
        let nodes = []
        const bodyRegex = new RegExp(`^${this.KW_CLASS}[\\s]+\\w+[\\s]*\{(.*)}$`, 's')
        const bodyMatch = code.match(bodyRegex)
        const body = bodyMatch[1].trim()
        const constantNodes = this.getConstantNodes(body)
        const structureNodes = this.getStructureNodes(body)
        const functionNodes = this.getFunctionNodes(body)
        const eventNodes = this.getEventNodes(body)
        const conditionNodes = this.getConditionNodes(body)
        nodes = nodes
            .concat(constantNodes)
            .concat(structureNodes)
            .concat(functionNodes)
            .concat(eventNodes)
            .concat(conditionNodes)
        return nodes
    }

    /**
     * @param {AScript} script
     * @param {NodeScriptParser[]} nodes
     * @return {EdgeScriptParser[]}
     */
    static getEdges(script, nodes) {
        return nodes.reduce((edges, node) => {
            const targetNode = script.findNodeById(node.id)
            const targetSourceNode = NodeHelper.getSourceNode(targetNode)
            const inputs = targetSourceNode.getInputs()
            return edges.concat([]
                .concat(this.getConstantEdges(script, nodes, node, inputs))
                .concat(this.getFunctionEdges(script, nodes, node, inputs))
                .concat(this.getEventEdges(script, nodes, node, inputs))
                .concat(this.getConditionEdges(script, nodes, node, inputs))
                .map(edge => ({targetId: targetNode.getId(), ...edge}))
            )
        }, [])
    }

    /**
     * @param {AScript} script
     * @param {NodeScriptParser[]} nodes
     * @param {NodeScriptParser} node
     * @param {DynamicAttribute[]} inputs
     * @return {EdgeScriptParser[]}
     */
    static getConstantEdges(script, nodes, node, inputs) {
        let edges = []
        if(node.type === NODE_TYPES.FUNCTION){
            node.params.forEach((param, iParam) => {
                const nodeParam = param.trim()
                const constantParamMatch = nodeParam.match(/^(\d+)$/) || nodeParam.match(/"([^"]+)"/)
                if (constantParamMatch) {
                    const constantParam = constantParamMatch[1]
                    const sourceName = constantParam.replace(/["']/g, '')
                    const sourceNode = script.findNodeByName(sourceName)
                    const connection = inputs[iParam]
                    if (!connection) {
                        throw new ClientError(`ClassScriptCodeParser: parameter ${index} not found for ${sourceName}`)
                    }
                    edges.push({
                        sourceId: sourceNode.getId(),
                        connectionId: connection.getId()
                    })
                }
            })
        }
        return edges
    }

    /**
     * @param {AScript} script
     * @param {NodeScriptParser[]} nodes
     * @param {NodeScriptParser} node
     * @param {DynamicAttribute[]} inputs
     * @return {EdgeScriptParser[]}
     */
    static getFunctionEdges(script, nodes, node, inputs) {
        let edges = []
        if(node.type === NODE_TYPES.FUNCTION) {
            node.params.forEach((param, iParam) => {
                const nodeParam = param.trim()
                const variableParamMatch = !nodeParam.match(/^\d+$/) && !nodeParam.match(/"[^"]+"/)
                if (variableParamMatch) {
                    const sourceNodeParser = nodes.find(pNode => pNode.name === nodeParam)
                    if (!sourceNodeParser) {
                        throw new ClientError(`ClassScriptCodeParser: variable "${nodeParam}" undefined`)
                    }
                    const sourceId = sourceNodeParser.id
                    const connection = inputs[iParam]
                    if (!connection) {
                        throw new ClientError(`ClassScriptCodeParser: parameter ${index} not found for ${sourceNodeParser.name}`)
                    }
                    edges.push({
                        sourceId: sourceId,
                        connectionId: connection.getId()
                    })
                }
            })
        }
        return edges
    }

    /**
     * @param {AScript} script
     * @param {NodeScriptParser[]} nodes
     * @param {NodeScriptParser} node
     * @param {DynamicAttribute[]} inputs
     * @return {EdgeScriptParser[]}
     */
    static getEventEdges(script, nodes, node, inputs) {
        let edges = []
        if(node.type === NODE_TYPES.EVENT) {
            node.params.forEach(param => {
                const nodeParam = param.trim()
                const conditionRegex = new RegExp(`^${this.KW_IF}\\s*\\(\\w+\\)`)
                const functionParamMatch = nodeParam.match(/^(\w+)\([^)]*\)$/)
                const conditionParamMatch = nodeParam.match(conditionRegex)
                if(functionParamMatch || conditionParamMatch){
                    let targetNodeParser
                    if(conditionParamMatch){
                        const conditionInstruction = conditionParamMatch[0]
                        targetNodeParser = nodes.find(pNode => pNode.instruction === conditionInstruction)
                    }else{
                        targetNodeParser = nodes.find(pNode => pNode.instruction === nodeParam)
                    }
                    if (!targetNodeParser) {
                        throw new ClientError(`ClassScriptCodeParser: instruction "${nodeParam}" undefined`)
                    }
                    const targetId = targetNodeParser.id
                    edges.push({
                        targetId,
                        sourceId: node.id,
                        connectionId: null
                    })
                }
            })
        }
        return edges
    }

    /**
     * @param {AScript} script
     * @param {NodeScriptParser[]} nodes
     * @param {NodeScriptParser} node
     * @param {DynamicAttribute[]} inputs
     * @return {EdgeScriptParser[]}
     */
    static getConditionEdges(script, nodes, node, inputs) {
        let edges = []
        if(node.type === NODE_TYPES.CONDITION) {
            node.params.forEach((param, iParam) => {
                const nodeParam = param.trim()
                const functionParamMatch = nodeParam.match(/^(\w+)\([^)]*\)$/)
                if(functionParamMatch || iParam === 0){
                    if(iParam === 0){
                        const sourceNodeParser = nodes.find(pNode => pNode.name === nodeParam)
                        if (!sourceNodeParser) {
                            throw new ClientError(`ClassScriptCodeParser: variable "${nodeParam}" undefined`)
                        }
                        const sourceId = sourceNodeParser.id
                        const connection = inputs[iParam]
                        edges.push({
                            sourceId,
                            connectionId: connection.getId()
                        })
                    }else{
                        const targetNodeParser = nodes.find(pNode => pNode.instruction === nodeParam)
                        if (!targetNodeParser) {
                            throw new ClientError(`ClassScriptCodeParser: instruction "${nodeParam}" undefined`)
                        }
                        const targetId = targetNodeParser.id
                        edges.push({
                            targetId,
                            sourceId: node.id,
                            connectionId: null
                        })
                    }
                }
            })
        }
        return edges
    }

    /**
     * @param {string} code
     * @return {NodeScriptParser[]}
     */
    static getConstantNodes(code) {
        const constantRegex = new RegExp('(\\d+|"[^"]*"|\'[^\']*\')', 'g')
        const constantMatches = code.matchAll(constantRegex)
        return _.uniqWith(Array.from(constantMatches).map(constantMatch => {
            const constant = constantMatch[0].replace(/["']/g, '')
            return {
                id: null,
                type: NODE_TYPES.CONSTANT,
                value: constant,
                name: constant,
                params: [],
                instruction: ''
            }
        }), (prev, current) => prev.name === current.name)
    }

    /**
     * @param {string} code
     * @return {NodeScriptParser[]}
     */
    static getStructureNodes(code) {
        const structRegex = new RegExp(
            `(${this.KW_VAR}[\\s]+(\\w+)[\\s]*=[\\s]*)*${this.KW_NEW}[\\s]+(\\w+)\\(([^)]*)\\)`, 'g')
        const structMatches = code.matchAll(structRegex)
        return Array.from(structMatches).map(structMatch => {
            const instruction = structMatch[0].trim()
            const name = structMatch[2]
            const struct = structMatch[3]
            const params = structMatch[4]
            return {
                id: null,
                type: NODE_TYPES.FUNCTION,
                value: struct,
                name: name,
                params: params.split(','),
                instruction
            }
        })
    }

    /**
     * @param {string} code
     * @return {NodeScriptParser[]}
     */
    static getFunctionNodes(code) {
        const functionRegex = new RegExp(
            `((${this.KW_VAR}[\\s]+(\\w+)[\\s]*=[\\s]*)*(?<!${this.KW_NEW})\\s+(\\w+)\\(([^(){}]*)\\))\\s*[^{]`, 'g')
        const functionMatches = code.matchAll(functionRegex)
        return Array.from(functionMatches).map(functionMatch => {
            const instruction = functionMatch[1].trim()
            const name = functionMatch[3]
            const func = functionMatch[4]
            const params = functionMatch[5]
            return {
                id: null,
                type: NODE_TYPES.FUNCTION,
                value: func,
                name: name,
                params: params.split(','),
                instruction
            }
        })
    }

    /**
     * @param {string} code
     * @return {NodeScriptParser[]}
     */
    static getEventNodes(code) {
        const eventRegex = new RegExp(`(?<!${this.KW_NEW})\\s+(\\w+)\\(\\s*\\)\\s*{([^}]*)}`, 'g')
        const insideBlockRegex = new RegExp('(?<!{[^{]*)([^{}]*)', 'g')
        const eventMatches = code.matchAll(eventRegex)
        return Array.from(eventMatches).map(eventMatch => {
            const instruction = eventMatch[0].trim()
            const event = eventMatch[1]
            const params = eventMatch[2]
            let paramsInsideBlock = []
            const paramsInsideBlockMatches = params.matchAll(insideBlockRegex)
            Array.from(paramsInsideBlockMatches).forEach(paramsInsideBlockMatch => {
                paramsInsideBlock = paramsInsideBlock.concat(paramsInsideBlockMatch[1].split(';'))
            })
            return {
                id: null,
                type: NODE_TYPES.EVENT,
                value: event,
                name: event,
                params: paramsInsideBlock.filter(param => param.trim() !== ''),
                instruction
            }
        })
    }

    /**
     * @param {string} code
     * @return {NodeScriptParser[]}
     */
    static getConditionNodes(code) {
        const conditionRegex = new RegExp(
            `(${this.KW_IF}\\s*\\((\\w+)\\)){([^}]*)}`, 'g')
        const conditionMatches = code.matchAll(conditionRegex)
        return Array.from(conditionMatches).map(conditionMatch => {
            const instruction = conditionMatch[1].trim()
            const name = conditionMatch[1]
            const params = conditionMatch[3].trim()
            const condition = conditionMatch[2]
            return {
                id: null,
                type: NODE_TYPES.CONDITION,
                value: 'True',
                name: name,
                params: [condition, ...params.split(';')],
                instruction
            }
        })
    }

    /**
     * @typedef {{
     *  id: number|null,
     *  type: string,
     *  value: string,
     *  name: string,
     *  params: string[]
     *  instruction: string
     * }} NodeScriptParser
     *
     * @typedef {{
     *  sourceId: number
     *  targetId: number
     *  connectionId: number
     * }} EdgeScriptParser
     */
}