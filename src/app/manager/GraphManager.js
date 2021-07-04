import UnitHelper from '../utils/UnitHelper.js'
import World from '../world/World.js'
import GraphNodeUnitInstant from '../unit/instant/type/internal/graph/GraphNodeUnitInstant.js'
import Vector from '../utils/Vector.js'
import ScriptGraphSelector from '../selector/ScriptGraphSelector.js'
import NodeComponent from '../component/internal/gui/node/NodeComponent.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import ObjectHelper from '../utils/ObjectHelper.js'
import NodeInputComponent from '../component/internal/gui/node/NodeInputComponent.js'
import GraphEdgeUnitInstant from '../unit/instant/type/internal/graph/GraphEdgeUnitInstant.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import Unit from '../unit/Unit.js'
import ClientError from '../exception/type/ClientError.js'
import ConstantNode from '../flow/node/ConstantNode.js'

export default class GraphManager {

    /**
     * @type {UnitInstant[]}
     */
    units

    constructor() {
        this.units = []
    }

    /**
     * @return {UnitInstant[]}
     */
    getUnits() {
        return this.units
    }

    /**
     * @return {UnitInstant[]}
     */
    getGraphUnits() {
        return this.getUnits()
            .filter(unit => unit.hasComponents([NodeComponent]))
    }

    /**
     * @return {UnitInstant[]}
     */
    getGraphEdges() {
        return this.getUnits()
            .filter(unit => unit.hasComponents([NodeInputComponent]))
    }

    /**
     * @param {AScript} script
     * @param {MeshRenderer} renderer
     */
    draw(script, renderer) {
        const world = World.get()
        this.update(script)
        this.getUnits().forEach(gUnit => {
            UnitHelper.drawUnit(gUnit, script.getCamera(), world.getMeshManager(), renderer)
        })
    }

    /**
     * @param {AScript} script
     * @return {boolean}
     * @todo To be revisited
     */
    updateGraphNodes(script) {
        let updated = false
        const units = this.getGraphUnits()
        const nodes = script.getNodes()
        const graphNodeIds = units
            .map(graphUnit => graphUnit.getComponent(NodeComponent).getNodeId())
        const nodeIds = nodes.map(node => node.getId())
        nodes.forEach(node => {
            const isGraphUnitExist = graphNodeIds.includes(node.getId())
            if (!isGraphUnitExist) {
                this.createGraphNodeUnit(node, script)
                updated = true
            } else {
                const graphUnit = units
                    .find(gUnit => gUnit.getComponent(NodeComponent).getNodeId() === node.getId())
                const position = graphUnit.getComponent(TransformComponent).getPosition()
                if (!ObjectHelper.isEqual(node.getPosition(), position)) {
                    node.setPosition(position)
                    updated = true
                }
                graphUnit.update(node.getPosition(), node, script)
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
        const units = this.getGraphEdges()
        const graphEdgeIds = units
            .map(graphUnit => graphUnit.getComponent(NodeInputComponent).getNodeInputId())
        const nodeInputIds = script.getInputs().map(nodeInput => nodeInput.getId())
        script.getInputs().forEach(nodeInput => {
            const graphUnitExist = graphEdgeIds.includes(nodeInput.getId())
            if (!graphUnitExist) {
                this.createGraphEdgeUnit(script, nodeInput)
                updated = true
            } else {
                const graphUnit = units
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
     * @param {AScript} script
     */
    createGraphNodeUnit(node, script) {
        const unit = new GraphNodeUnitInstant()
        const position = node.getPosition()
        unit.instantiate(position, node, script)
        if (node instanceof ConstantNode) {
            unit.getComponent(MeshComponent).setEnabled(false)
        }
        this.getUnits().push(unit)
        return unit
    }

    /**
     * @param {AScript} script
     * @param {NodeInput} nodeInput
     */
    createGraphEdgeUnit(script, nodeInput) {
        const unit = new GraphEdgeUnitInstant()
        unit.instantiate(script, nodeInput)
        if (script.findNodeById(nodeInput.getSourceNodeId()) instanceof ConstantNode) {
            unit.getComponent(MeshComponent).setEnabled(false)
        }
        this.getUnits().push(unit)
        return unit
    }

    /**
     * @template T
     * @param {Class} T
     * @param {...any} props
     * @return {T}
     */
    createUnitInstant(T, ...props) {
        if (!(T.prototype instanceof Unit)) {
            throw new ClientError(`Unit type must be child of Unit class (${type} given)`)
        }
        const unit = new T()
        unit.instantiate(...props)
        this.getUnits().push(unit)
        return unit
    }

    /**
     * @param {Unit} unit
     */
    deleteUnit(unit) {
        const index = this.getUnits().findIndex((element) =>
            element.getId() === unit.getId()
        )
        return this.getUnits().splice(index, 1)
    }

    /**
     * @param {number} graphNodeId
     */
    deleteGraphNodeUnitByNodeId(graphNodeId) {
        const units = this.getUnits()
        const index = units
            .findIndex(graphUnit => {
                const nodeComponent = graphUnit.getComponent(NodeComponent)
                return nodeComponent && nodeComponent.getNodeId() === graphNodeId
            })
        units.splice(index, 1)
    }

    /**
     * @param {number} graphEdgeId
     */
    deleteGraphEdgeUnitByNodeId(graphEdgeId) {
        const units = this.getUnits()
        const index = units
            .findIndex(graphUnit => {
                const nodeInputComponent = graphUnit.getComponent(NodeInputComponent)
                return nodeInputComponent && nodeInputComponent.getNodeInputId() === graphEdgeId
            })
        units.splice(index, 1)
    }

    /**
     * @param {Vector} position
     * @return {Unit}
     */
    findFirstUnitByPosition(position) {
        return ScriptGraphSelector.get().get(World.get(), position)
    }

    /**
     * @param {AScript} script
     * @param {Mouse} mouse
     * @return {Unit[]}
     */
    focusUnits(script, mouse) {
        const unitSelector = ScriptGraphSelector.get()
        const world = World.get()
        unitSelector.unfocusAll(world)
        const currentScenePosition = new Vector(mouse.currentScenePosition)
        const vector3d = script.getCamera().fromCameraScale(currentScenePosition)
        unitSelector.focus(world, script.getCamera().fromCanvasCoord(vector3d))
    }

    /**
     * @param {AScript} script
     * @param {{position: Vector, size: Size}} dragArea
     * @return {Unit[]}
     */
    selectUnits(script, dragArea) {
        const unitSelector = ScriptGraphSelector.get()
        const world = World.get()
        unitSelector.unselectAll(world)
        return unitSelector.select(world, script.getCamera().fromCanvasCoord(dragArea.position), dragArea.size)
    }

    /**
     * @return {UnitInstant[]}
     */
    getSelected() {
        return this.getGraphUnits().filter(unit => unit.isSelected())
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
                script.reset()
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

    reset() {
        this.units = []
    }

    regenerateAll() {
        this.getUnits().forEach(unit => unit.getComponent(MeshComponent).setGenerated(false))
    }
}