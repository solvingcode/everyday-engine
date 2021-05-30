import World from '../../world/World.js'
import Camera from '../../core/Camera.js'
import Physics from '../../physics/Physics.js'
import AssetsManager from '../../manager/AssetsManager.js'
import Asset from '../../asset/Asset.js'
import Folder from '../../asset/Folder.js'
import Mesh from '../../core/Mesh.js'
import UnitManager from '../../manager/UnitManager.js'
import EmptyUnit from '../../unit/type/EmptyUnit.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MoveXUnitInstant from '../../unit/instant/type/internal/move/MoveXUnitInstant.js'
import MoveYUnitInstant from '../../unit/instant/type/internal/move/MoveYUnitInstant.js'
import MoveFreeUnitInstant from '../../unit/instant/type/internal/move/MoveFreeUnitInstant.js'
import GridUnitInstant from '../../unit/instant/type/internal/grid/GridUnitInstant.js'
import AssetUnitInstant from '../../unit/instant/type/internal/asset/AssetUnitInstant.js'
import GridXUnitInstant from '../../unit/instant/type/internal/grid/GridXUnitInstant.js'
import GridYUnitInstant from '../../unit/instant/type/internal/grid/GridYUnitInstant.js'
import CameraUnitInstant from '../../unit/instant/type/internal/camera/CameraUnitInstant.js'
import DynamicAttribute from '../../pobject/DynamicAttribute.js'
import CameraComponent from '../../component/internal/CameraComponent.js'
import SelectionUnitInstant from '../../unit/instant/type/internal/edit/SelectionUnitInstant.js'
import StyleComponent from '../../component/internal/StyleComponent.js'
import ScriptManager from '../../manager/ScriptManager.js'
import ClassScript from '../../flow/ClassScript.js'
import EventNode from '../../flow/node/EventNode.js'
import FunctionNode from '../../flow/node/FunctionNode.js'
import ConstantNode from '../../flow/node/ConstantNode.js'
import AssetScriptXml from '../../asset/types/script/AssetScriptXml.js'
import AssetImage from '../../asset/types/image/AssetImage.js'
import FunctionRegistry from '../../registry/FunctionRegistry.js'
import AFunction from '../../flow/function/AFunction.js'
import OnMouseClickEvent from '../../flow/event/native/OnMouseClickEvent.js'
import LogFunction from '../../flow/function/native/basic/LogFunction.js'
import AddFunction from '../../flow/function/native/basic/AddFunction.js'
import AConstant from '../../flow/constant/AConstant.js'
import AEmptyStackFunction from '../../flow/function/AEmptyStackFunction.js'
import OnKeyDownEvent from '../../flow/event/native/OnKeyDownEvent.js'
import TrueCondition from '../../flow/condition/TrueCondition.js'
import ConditionNode from '../../flow/node/ConditionNode.js'
import LessThanFunction from '../../flow/function/native/basic/LessThanFunction.js'
import IsKeyDownFunction from '../../flow/function/native/basic/IsKeyDownFunction.js'
import NodeInput from '../../pobject/NodeInput.js'
import UnitNode from '../../flow/node/UnitNode.js'
import AUnit from '../../flow/unit/AUnit.js'
import GetWorldPositionFunction from '../../flow/function/native/unit/GetWorldPositionFunction.js'
import VectorFunction from '../../flow/function/native/structure/VectorFunction.js'
import SetWorldPositionFunction from '../../flow/function/native/unit/SetWorldPositionFunction.js'
import AssetScriptCode from '../../asset/types/script/AssetScriptCode.js'
import GetUnitFunction from '../../flow/function/native/unit/GetUnitFunction.js'
import ScaleXUnitInstant from '../../unit/instant/type/internal/scale/ScaleXUnitInstant.js'
import ScaleYUnitInstant from '../../unit/instant/type/internal/scale/ScaleYUnitInstant.js'
import RotateZUnitInstant from '../../unit/instant/type/internal/rotate/RotateZUnitInstant.js'
import ScaleFreeUnitInstant from '../../unit/instant/type/internal/scale/ScaleFreeUnitInstant.js'
import SystemError from '../../exception/type/SystemError.js'
import TabManager from '../../manager/TabManager.js'
import Tab from '../../content/Tab.js'
import EditScriptCodeContent from '../../content/EditScriptCodeContent.js'
import EditGraphScriptContent from '../../content/EditGraphScriptContent.js'
import KeyCodeNode from '../../flow/node/KeyCodeNode.js'
import AKeyCode from '../../flow/keycode/AKeyCode.js'
import Preference from '../../preference/Preference.js'
import GameInputPreference from '../../preference/gameInput/GameInputPreference.js'
import GameInput from '../../preference/gameInput/GameInput.js'
import OnInputXAxisEvent from '../../flow/event/native/OnInputXAxisEvent.js'
import GetInputXAxisFunction from '../../flow/function/native/input/GetInputXAxisFunction.js'
import ComponentRegistry from '../../registry/ComponentRegistry.js'
import RigidBodyComponent from '../../component/internal/RigidBodyComponent.js'
import RectColliderComponent from '../../component/internal/RectColliderComponent.js'
import RectUnitInstant from '../../unit/instant/type/internal/primitive/RectUnitInstant.js'
import CircleColliderComponent from '../../component/internal/CircleColliderComponent.js'
import CircleUnitInstant from '../../unit/instant/type/internal/primitive/CircleUnitInstant.js'
import MoveXAxisFunction from '../../flow/function/native/physics/MoveXAxisFunction.js'
import MultiplyFunction from '../../flow/function/native/basic/MultiplyFunction.js'
import OnInputYAxisEvent from '../../flow/event/native/OnInputYAxisEvent.js'
import OnInputJumpEvent from '../../flow/event/native/OnInputJumpEvent.js'
import ApplyForceFunction from '../../flow/function/native/physics/ApplyForceFunction.js'

/**
 * @class {DataSchema}
 * Used to protect loading data when importing a project
 * the dataId will be generated when the project is saved, and used to instantiate data and check the validity
 */
class DataSchema {

    static schema = [
        {id: 10, type: World},
        {id: 20, type: UnitManager},
        {id: 4, type: Camera},
        {id: 5, type: Physics},
        {id: 16, type: AssetsManager},
        {id: 17, type: Asset},
        {id: 23, type: Folder},
        {id: 24, type: Mesh},
        {id: 25, type: DynamicAttribute},
        {id: 30, type: EmptyUnit},
        {id: 40, type: MeshComponent},
        {id: 50, type: TransformComponent},
        {id: 60, type: AssetUnitInstant},
        {id: 70, type: CameraUnitInstant},
        {id: 80, type: CameraComponent},
        {id: 90, type: StyleComponent},
        {id: 100, type: ScriptManager},
        {id: 110, type: ClassScript},
        {id: 120, type: EventNode},
        {id: 130, type: FunctionNode},
        {id: 140, type: ConstantNode},
        {id: 150, type: AssetScriptXml},
        {id: 160, type: AssetImage},
        {id: 170, type: FunctionRegistry},
        {id: 180, type: AFunction},
        {id: 190, type: OnMouseClickEvent},
        {id: 200, type: LogFunction},
        {id: 210, type: AddFunction},
        {id: 220, type: AConstant},
        {id: 230, type: AEmptyStackFunction},
        {id: 240, type: OnKeyDownEvent},
        {id: 250, type: TrueCondition},
        {id: 260, type: ConditionNode},
        {id: 270, type: LessThanFunction},
        {id: 280, type: IsKeyDownFunction},
        {id: 290, type: NodeInput},
        {id: 300, type: UnitNode},
        {id: 310, type: AUnit},
        {id: 320, type: GetWorldPositionFunction},
        {id: 330, type: VectorFunction},
        {id: 340, type: SetWorldPositionFunction},
        {id: 350, type: AssetScriptCode},
        {id: 360, type: GetUnitFunction},
        {id: 370, type: TabManager},
        {id: 380, type: Tab},
        {id: 390, type: EditScriptCodeContent},
        {id: 400, type: EditGraphScriptContent},
        {id: 410, type: KeyCodeNode},
        {id: 420, type: AKeyCode},
        {id: 430, type: Preference},
        {id: 440, type: GameInputPreference},
        {id: 450, type: GameInput},
        {id: 460, type: OnInputXAxisEvent},
        {id: 470, type: GetInputXAxisFunction},
        {id: 480, type: ComponentRegistry},
        {id: 490, type: RigidBodyComponent},
        {id: 500, type: RectColliderComponent},
        {id: 510, type: CircleColliderComponent},
        {id: 520, type: MoveXAxisFunction},
        {id: 530, type: MultiplyFunction},
        {id: 540, type: OnInputYAxisEvent},
        {id: 550, type: OnInputJumpEvent},
        {id: 560, type: ApplyForceFunction}
    ]

    /**
     * Class to be excluded during serialization
     */
    static exclude = [
        GUIPropertyComponent,
        MoveXUnitInstant,
        MoveYUnitInstant,
        MoveFreeUnitInstant,
        GridUnitInstant,
        GridXUnitInstant,
        GridYUnitInstant,
        SelectionUnitInstant,
        ScaleXUnitInstant,
        ScaleYUnitInstant,
        ScaleFreeUnitInstant,
        RotateZUnitInstant,
        RectUnitInstant,
        CircleUnitInstant
    ]

    /**
     * Class to be excluded during serialization for exported game
     */
    static excludeGame = [
        AssetScriptXml,
        AssetScriptCode,
        ClassScript,
        TabManager
    ]

    /**
     * @param {Class} type
     * @return {number}
     */
    static getId(type) {
        const schemaType = this.schema.find(vSchema => vSchema.type === type)
        if (!schemaType) {
            throw new SystemError(`Type ${type.name} not found in DataSchema!`)
        }
        return schemaType.id
    }

    /**
     * @param {*} type
     * @param {boolean} isForGame
     * @return {boolean}
     */
    static isExcluded(type, isForGame = false) {
        return this.exclude.includes(type) ||
            (isForGame && this.excludeGame.includes(type))
    }

    /**
     * @param {number|string} pDataId
     * @param {Data} prototype
     * @return {Data}
     */
    static newInstance(pDataId, prototype) {
        const dataId = parseInt(pDataId)
        if (!dataId) return null
        const schemaType = this.schema.find(vSchema => vSchema.id === dataId)
        if (!schemaType) {
            throw new SystemError(`ID ${dataId} not found in DataSchema!`)
        }
        const {type} = schemaType
        if (type !== prototype && !(type.prototype instanceof prototype)) {
            throw new SystemError(`Type ${type.name} attached to ID ${dataId} not match the given prototype ${prototype.name} !`)
        }
        return new type()
    }

}

export default DataSchema