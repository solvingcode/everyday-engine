import UnitHelper from '../../utils/UnitHelper.js'
import World from '../../world/World.js'
import GraphNodeUnitInstant from '../../unit/instant/type/internal/graph/GraphNodeUnitInstant.js'
import Vector from '../../utils/Vector.js'
import UnitSelector from '../../selector/UnitSelector.js'

export default class ScriptGraph {

    /**
     * @type {ScriptGraph}
     */
    static instance

    /**
     * @type {GraphNodeUnitInstant[]}
     */
    graphUnits

    constructor() {
        this.graphUnits = []
    }

    /**
     * @return {GraphNodeUnitInstant[]}
     */
    getGraphUnits(){
        return this.graphUnits
    }

    /**
     * @param {AScript} script
     */
    init(script){
        this.createGraphNodes(script)
    }

    /**
     * @param {AScript} script
     * @param {MeshRenderer} renderer
     */
    draw(script, renderer){
        const world = World.get()
        this.graphUnits.forEach(gNode => {
            UnitHelper.drawUnit(gNode, world, renderer)
        })
    }

    /**
     * @param {AScript} script
     */
    createGraphNodes(script){
        this.graphUnits = []
        script.getNodes().forEach(node => {
            this.createGraphNodeUnit(node)
        })
    }

    /**
     * @param {ANode} node
     */
    createGraphNodeUnit(node) {
        const unit = new GraphNodeUnitInstant()
        const position = new Vector()
        unit.instantiate(position, node)
        this.graphUnits.push(unit)
        return unit
    }

    /**
     * @param {Mouse} mouse
     * @return {Unit[]}
     */
    focusUnits(mouse) {
        const unitSelector = UnitSelector.get()
        unitSelector.unfocusAll(this)
        const currentScenePosition = new Vector(mouse.currentScenePosition)
        const vector3d = this.getCamera().fromCameraScale(currentScenePosition)
        unitSelector.focus(this, this.getWorldPosition(vector3d))
    }

    /**
     * @return {ScriptGraph}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}