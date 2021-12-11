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
import NodeHelper from '../utils/NodeHelper.js'

export default class GraphManager {

    /**
     * @type {Unit[]}
     */
    units

    constructor() {
        this.units = []
    }

    /**
     * @return {Unit[]}
     */
    getUnits() {
        return this.units
    }

    /**
     * @return {Unit[]}
     */
    getGraphUnits() {
        return this.getUnits()
            .filter(unit => unit.hasComponents([NodeComponent]))
    }

    /**
     * @return {Unit[]}
     */
    getGraphEdges() {
        return this.getUnits()
            .filter(unit => unit.hasComponents([NodeInputComponent]))
    }

    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */
    getUnitsHasComponents(componentClasses) {
        return this.getUnits().filter(unit => unit.hasComponents(componentClasses))
    }

    /**
     * @param {Unit[]} units
     */
    deleteUnits(units) {
        units.forEach(unit => this.deleteUnit(unit))
    }

    /**
     * @param {AScriptFunction} script
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
     * @param {AScriptFunction} script
     * @return {boolean}
     * @todo To be revisited
     */
    updateGraphNodes(script) {
        let updated = false
        const units = this.getGraphUnits()
        const nodes = script.getNodes()
        nodes.forEach(node => {
            if (!node.isInitialized()) {
                const unit = this.createGraphNodeUnit(node, script)
                node.setInitialized(true)
                node.setGraphUnit(unit)
                updated = true
            }else{
                if(!units.includes(node.getGraphUnit())){
                    this.units.push(node.getGraphUnit())
                }
            }
        })
        units.forEach(unit => {
            const position = unit.getComponent(TransformComponent).getPosition()
            const node = unit.getComponent(NodeComponent).getNode()
            if (!node || !script.hasNode(node)) {
                this.deleteUnit(unit)
                updated = true
            } else if (!ObjectHelper.isEqual(node.getPosition(), position)) {
                node.setPosition(position)
                updated = true
            }
            unit.update(node.getPosition(), node, script, World.get())
        })
        return updated
    }

    /**
     * @param {AScriptFunction} script
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
                graphUnit.update(script, nodeInput, World.get())
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
     * @param {AScriptFunction} script
     * @return {Unit}
     */
    createGraphNodeUnit(node, script) {
        const unit = new GraphNodeUnitInstant()
        const position = node.getPosition()
        unit.instantiate(position, node, script, World.get())
        if (NodeHelper.isHidden(node)) {
            unit.getComponent(MeshComponent).setEnabled(false)
        }
        this.getUnits().push(unit)
        return unit
    }

    /**
     * @param {AScriptFunction} script
     * @param {NodeInput} nodeInput
     */
    createGraphEdgeUnit(script, nodeInput) {
        const unit = new GraphEdgeUnitInstant()
        unit.instantiate(script, nodeInput, World.get())
        if (NodeHelper.isHidden(script.findNodeById(nodeInput.getSourceNodeId()))) {
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
     * @param {Vector} position
     * @return {Unit[]}
     */
    findUnitsByPosition(position) {
        return ScriptGraphSelector.get().getAll(World.get(), position)
    }

    /**
     * @param {AScriptFunction} script
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
     * @param {AScriptFunction} script
     * @param {{position: Vector, size: Size}} dragArea
     * @return {Unit[]}
     */
    selectUnits(script, dragArea) {
        const unitSelector = ScriptGraphSelector.get()
        const world = World.get()
        world.getGraphManager().getSelected().forEach(unit => unit.getComponent(MeshComponent).setGenerated(false))
        unitSelector.unselectAll(world)
        const units = unitSelector.select(world, script.getCamera().fromCanvasCoord(dragArea.position), dragArea.size)
        units.forEach(unit => unit.getComponent(MeshComponent).setGenerated(false))
        return units
    }

    /**
     * @return {MeshUnitInstant[]}
     */
    getSelected() {
        return this.getGraphUnits().filter(unit => unit.isSelected())
    }

    /**
     * @param {AScriptFunction} script
     */
    update(script) {
        if (script) {
            let updated = false
            updated = this.updateGraphNodes(script) || updated
            updated = this.updateGraphEdges(script) || updated
            script.setUpdated(updated)
        }
    }

    reset() {
        this.units = []
    }

    regenerateAll() {
        this.getUnits().forEach(unit => unit.getComponent(MeshComponent).setGenerated(false))
    }
}