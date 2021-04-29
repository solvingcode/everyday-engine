import Parser from '../../Parser.js'
import ClassScript from '../../../flow/ClassScript.js'
import World from '../../../world/World.js'
import {NODE_TYPES} from '../../../flow/node/ANode.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import NodeHelper from '../../../utils/NodeHelper.js'

export default class ClassScriptCodeParser extends Parser {

    static KW_CLASS = 'class'
    static KW_NEW = 'new'
    static KW_VAR = 'var'

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
                throw new TypeError(`ClassScriptCodeParser Error: Node ${edge.sourceId} not founded`)
            }
            if (!nodeTarget) {
                throw new TypeError(`ClassScriptCodeParser Error: Node ${edge.targetId} not founded`)
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
        const bodyRegex = new RegExp(`^${this.KW_CLASS}[\\s]+[a-zA-Z0-9]+[\\s]*\{(.*)}$`, 's')
        const bodyMatch = code.match(bodyRegex)
        const body = bodyMatch[1].trim()
        const constantNodes = this.getConstantNodes(body)
        const structureNodes = this.getStructureNodes(body)
        const functionNodes = this.getFunctionNodes(body)
        const eventNodes = this.getEventNodes(body)
        nodes = nodes
            .concat(constantNodes)
            .concat(structureNodes)
            .concat(functionNodes)
            .concat(eventNodes)
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
                        throw new TypeError(`ClassScriptCodeParser: parameter ${index} not found for ${sourceName}`)
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
                        throw new TypeError(`ClassScriptCodeParser: variable "${nodeParam}" undefined`)
                    }
                    const sourceId = sourceNodeParser.id
                    const connection = inputs[iParam]
                    if (!connection) {
                        throw new TypeError(`ClassScriptCodeParser: parameter ${index} not found for ${sourceNodeParser.name}`)
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
                const functionParamMatch = nodeParam.match(/^([a-zA-Z0-9]+)\([^)]*\)$/)
                if(functionParamMatch){
                    const targetNodeParser = nodes.find(pNode => pNode.instruction === nodeParam)
                    if (!targetNodeParser) {
                        throw new TypeError(`ClassScriptCodeParser: instruction "${nodeParam}" undefined`)
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
            `(${this.KW_VAR}[\\s]+([a-zA-Z0-9]+)[\\s]*=[\\s]*)*${this.KW_NEW}[\\s]+([a-zA-Z0-9]+)\\(([^)]*)\\)`, 'g')
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
            `((${this.KW_VAR}[\\s]+([a-zA-Z0-9]+)[\\s]*=[\\s]*)*(?<!${this.KW_NEW})\\s+([a-zA-Z0-9]+)\\(([^(){}]*)\\))\\s*[^{]`, 'g')
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
        const eventRegex = new RegExp(`(?<!${this.KW_NEW})\\s+([a-zA-Z0-9]+)\\(\\s*\\)\\s*{([^}]*)}`, 'g')
        const eventMatches = code.matchAll(eventRegex)
        return Array.from(eventMatches).map(eventMatch => {
            const instruction = eventMatch[0].trim()
            const event = eventMatch[1]
            const params = eventMatch[2]
            return {
                id: null,
                type: NODE_TYPES.EVENT,
                value: event,
                name: event,
                params: params.split(';'),
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