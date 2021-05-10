import UnitHelper from '../../utils/UnitHelper.js'
import World from '../../world/World.js'
import GraphNodeUnitInstant from '../../unit/instant/type/internal/graph/GraphNodeUnitInstant.js'
import Vector from '../../utils/Vector.js'
import ScriptGraphSelector from '../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../component/internal/gui/node/NodeComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import ObjectHelper from '../../utils/ObjectHelper.js'
import NodeInputComponent from '../../component/internal/gui/node/NodeInputComponent.js'
import GraphEdgeUnitInstant from '../../unit/instant/type/internal/graph/GraphEdgeUnitInstant.js'

export default class ScriptGraph {

    /**
     * @type {ScriptGraph}
     */
    static instance

    /**
     * @type {GraphNodeUnitInstant[]}
     */
    graphUnits

    /**
     * @type {GraphEdgeUnitInstant[]}
     */
    graphEdges

    /**
     * @type {AScript}
     */
    script

    /**
     * @type {Asset}
     */
    asset

    constructor() {
        this.graphUnits = []
        this.graphEdges = []
    }

    /**
     * @return {GraphNodeUnitInstant[]}
     */
    getGraphUnits() {
        return this.graphUnits
    }

    /**
     * @return {GraphEdgeUnitInstant[]}
     */
    getGraphEdges() {
        return this.graphEdges
    }

    /**
     * @param {AScript} script
     * @param {MeshRenderer} renderer
     */
    draw(script, renderer) {
        const world = World.get()
        this.update(script)
        this.graphUnits.forEach(gUnit => {
            UnitHelper.drawUnit(gUnit, world, renderer)
        })
        this.graphEdges.forEach(gUnit => {
            UnitHelper.drawUnit(gUnit, world, renderer)
        })
    }

    /**
     * @param {AScript} script
     * @return {boolean}
     * @todo To be revisited
     */
    updateGraphNodes(script) {
        let updated = false
        const graphNodeIds = this.getGraphUnits()
            .map(graphUnit => graphUnit.getComponent(NodeComponent).getNodeId())
        const nodeIds = script.getNodes().map(node => node.getId())
        script.getNodes().forEach(node => {
            const isGraphUnitExist = graphNodeIds.includes(node.getId())
            if (!isGraphUnitExist) {
                this.createGraphNodeUnit(node)
                updated = true
            } else {
                const graphUnit = this.getGraphUnits()
                    .find(gUnit => gUnit.getComponent(NodeComponent).getNodeId() === node.getId())
                const position = graphUnit.getComponent(TransformComponent).getPosition()
                if (!ObjectHelper.isEqual(node.getPosition(), position)) {
                    node.setPosition(position)
                    updated = true
                }
            }
        })
        graphNodeIds.forEach(graphNodeId => {
            if (!nodeIds.includes(graphNodeId)) {
                this.deleteGraphNodeUnitByNodeId(graphNodeId)
                updated = true
            }
        })
        return updated
    }

    /**
     * @param {AScript} script
     * @return {boolean}
     */
    updateGraphEdges(script) {
        let updated = false
        const graphEdgeIds = this.getGraphEdges()
            .map(graphUnit => graphUnit.getComponent(NodeInputComponent).getNodeInputId())
        const nodeInputIds = script.getInputs().map(nodeInput => nodeInput.getId())
        script.getInputs().forEach(nodeInput => {
            const graphUnitExist = graphEdgeIds.includes(nodeInput.getId())
            if (!graphUnitExist) {
                this.createGraphEdgeUnit(script, nodeInput)
                updated = true
            } else {
                const graphUnit = this.getGraphEdges()
                    .find(gUnit =>
                        gUnit.getComponent(NodeInputComponent).getNodeInputId() === nodeInput.getId())
                graphUnit.update(script, nodeInput)
            }
        })
        graphEdgeIds.forEach(graphEdgeId => {
            if (!nodeInputIds.includes(graphEdgeId)) {
                this.deleteGraphEdgeUnitByNodeId(graphEdgeId)
                updated = true
            }
        })
        return updated
    }

    /**
     * @param {ANode} node
     */
    createGraphNodeUnit(node) {
        const unit = new GraphNodeUnitInstant()
        const position = node.getPosition()
        unit.instantiate(position, node)
        this.graphUnits.push(unit)
        return unit
    }

    /**
     * @param {AScript} script
     * @param {NodeInput} nodeInput
     */
    createGraphEdgeUnit(script, nodeInput) {
        const unit = new GraphEdgeUnitInstant()
        unit.instantiate(script, nodeInput)
        this.graphEdges.push(unit)
        return unit
    }

    /**
     * @param {number} graphNodeId
     */
    deleteGraphNodeUnitByNodeId(graphNodeId) {
        const index = this.graphUnits
            .findIndex(graphUnit => graphUnit.getComponent(NodeComponent).getNodeId() === graphNodeId)
        this.graphUnits.splice(index, 1)
    }

    /**
     * @param {number} graphEdgeId
     */
    deleteGraphEdgeUnitByNodeId(graphEdgeId) {
        const index = this.graphEdges
            .findIndex(graphUnit => graphUnit.getComponent(NodeInputComponent).getNodeInputId() === graphEdgeId)
        this.graphEdges.splice(index, 1)
    }

    /**
     * @param {Vector} position
     * @return {Unit}
     */
    findFirstUnitByPosition(position) {
        return ScriptGraphSelector.get().get(null, position)
    }

    /**
     * @param {Mouse} mouse
     * @return {Unit[]}
     */
    focusUnits(mouse) {
        const unitSelector = ScriptGraphSelector.get()
        const world = World.get()
        unitSelector.unfocusAll(null)
        const currentScenePosition = new Vector(mouse.currentScenePosition)
        const vector3d = world.getCamera().fromCameraScale(currentScenePosition)
        unitSelector.focus(null, world.getWorldPosition(vector3d))
    }

    /**
     * @param {Mouse} mouse
     * @return {Unit[]}
     */
    selectUnits(mouse) {
        const unitSelector = ScriptGraphSelector.get()
        const world = World.get()
        const currentScenePosition = new Vector(mouse.currentScenePosition)
        const vector3d = world.getCamera().fromCameraScale(currentScenePosition)
        unitSelector.unselectAll(null)
        return unitSelector.select(null, world.getWorldPosition(vector3d), null)
    }

    /**
     * @param {AScript} script
     */
    update(script) {
        if (script) {
            let updated = false
            updated = this.updateGraphNodes(script) || updated
            updated = this.updateGraphEdges(script) || updated
            if (updated) {
                this.save(script)
            }
        }
    }

    /**
     * @param {AScript} script
     */
    save(script) {
        const asset = World.get().getTabManager().getSelectedContentData()
        asset.generate(script)
    }

    reset(){
        this.graphEdges = []
        this.graphUnits = []
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