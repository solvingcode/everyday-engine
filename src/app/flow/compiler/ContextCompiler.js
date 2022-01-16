export default class ContextCompiler {
    /**
     * @type {AScript}
     */
    script
    /**
     * @type {ANode}
     */
    node
    /**
     * @type {NodeInput}
     */
    input
    /**
     * @type {AFunction}
     */
    sourceElement
    /**
     * @type {AFunction}
     */
    element
    /**
     * @type {AStackFunction}
     */
    stackFunction
    /**
     * @type {ANode}
     */
    sourceNode
    /**
     * @type {World}
     */
    world
    /**
     * @type {AScriptFunction}
     */
    scriptFunction
    /**
     * @type {string}
     */
    scriptFunctionName
    /**
     * @type {string}
     */
    sourceElementName
    /**
     * @type {AStackFunction}
     */
    sourceStackFunction
    /**
     * @type {string}
     */
    functionName
    
    constructor(script, node, input, sourceElement, element, stackFunction, sourceNode, world, scriptFunction,
                scriptFunctionName, sourceElementName, sourceStackFunction, functionName) {
        this.script = script
        this.node = node
        this.input = input
        this.sourceElement = sourceElement
        this.element = element
        this.stackFunction = stackFunction
        this.sourceNode = sourceNode
        this.world = world
        this.scriptFunction = scriptFunction
        this.scriptFunctionName = scriptFunctionName
        this.sourceElementName = sourceElementName
        this.sourceStackFunction = sourceStackFunction
        this.functionName = functionName
    }
}