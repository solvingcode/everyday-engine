import UnitHelper from '../../utils/UnitHelper.js'
import World from '../../world/World.js'
import GraphNodeUnitInstant from '../../unit/instant/type/internal/graph/GraphNodeUnitInstant.js'
import Vector from '../../utils/Vector.js'
import Size from '../../pobject/Size.js'
import Style from '../../pobject/Style.js'
import EventNode from '../node/EventNode.js'

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
        const size = new Size({width: 150, height: 80})
        const style = new Style()
        let color = '#4877c9'
        let bgColor = '#0d1d34'
        if (node instanceof EventNode){
            color = '#ec7c7c'
            bgColor = '#150a0a'
        }
        style.setColor(color)
        style.setFillColor(bgColor)
        style.setBorderSize(1)
        unit.instantiate(position, size, style)
        this.graphUnits.push(unit)
        return unit
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