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
            .filter(unit => this.isNodeUnit(unit))
    }

    /**
     * @return {Unit[]}
     */
    getGraphEdges() {
        return this.getUnits()
            .filter(unit => this.isEdgeUnit(unit))
    }

    /**
     * @param {Unit} unit
     * @return {boolean}
     */
    isNodeUnit(unit){
        return unit.hasComponents([NodeComponent])
    }

    /**
     * @param {Unit} unit
     * @return {boolean}
     */
    isEdgeUnit(unit){
        return unit.hasComponents([NodeInputComponent])
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
        const inputs = script.getInputs()
        inputs.forEach(input => {
            if (!input.isInitialized()) {
                const unit = this.createGraphEdgeUnit(script, input)
                input.setInitialized(true)
                input.setGraphUnit(unit)
                updated = true
            }else{
                if(!units.includes(input.getGraphUnit())){
                    this.units.push(input.getGraphUnit())
                }
            }
        })
        units.forEach(unit => {
            const nodeInput = unit.getComponent(NodeInputComponent).getNodeInput()
            if (!nodeInput || !script.hasNodeInput(nodeInput)) {
                this.deleteUnit(unit)
                updated = true
            }
            unit.update(script, nodeInput, World.get())
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
    sortUnit(unit){
        UnitHelper.sortUnit(this.units, unit)
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
     * @return {Unit[]}
     */
    getSelectedNodes(){
        return this.getSelected().filter(this.isNodeUnit)
    }

    /**
     * @return {Unit[]}
     */
    getSelectedEdges(){
        return this.getSelected().filter(this.isEdgeUnit)
    }

    /**
     * @param {Vector} position
     * @return {Unit}
     */
    findFirstNodeUnitByPosition(position) {
        const units = this.findUnitsByPosition(position)
            .filter(unit => this.isNodeUnit(unit))
        return units.length && units[units.length - 1]
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
     * @param {boolean} forEdge
     * @return {Unit[]}
     */
    selectUnits(script, dragArea, forEdge) {
        const unitSelector = ScriptGraphSelector.get()
        const world = World.get()
        world.getGraphManager().getSelected().forEach(unit => unit.getComponent(MeshComponent).setGenerated(false))
        unitSelector.unselectAll(world)
        const units = unitSelector.select(world,
            script.getCamera().fromCanvasCoord(dragArea.position),
            dragArea.size,
            forEdge ? this.isEdgeUnit : this.isNodeUnit
        )
        units.forEach(unit => unit.getComponent(MeshComponent).setGenerated(false))
        return units
    }

    /**
     * @return {Unit[]}
     */
    getSelected() {
        return this.getUnits().filter(unit => unit.isSelected())
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