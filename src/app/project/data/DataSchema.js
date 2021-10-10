import World from '../../world/World.js'
import Camera from '../../core/Camera.js'
import Physics from '../../physics/Physics.js'
import AssetsManager from '../../manager/AssetsManager.js'
import Asset from '../../asset/Asset.js'
import Folder from '../../asset/Folder.js'
import Mesh from '../../core/Mesh.js'
import UnitManager from '../../manager/UnitManager.js'
import MeshUnit from '../../unit/type/MeshUnit.js'
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
import EditScriptCodeContent from '../../content/script/EditScriptCodeContent.js'
import EditGraphScriptContent from '../../content/script/EditGraphScriptContent.js'
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
import GetVelocityXFunction from '../../flow/function/native/physics/GetVelocityXFunction.js'
import GetVelocityYFunction from '../../flow/function/native/physics/GetVelocityYFunction.js'
import GreaterThanFunction from '../../flow/function/native/basic/GreaterThanFunction.js'
import EqualToFunction from '../../flow/function/native/basic/EqualToFunction.js'
import NotEqualToFunction from '../../flow/function/native/basic/NotEqualToFunction.js'
import ScriptComponent from '../../component/internal/ScriptComponent.js'
import AStringVariable from '../../flow/variable/AStringVariable.js'
import EditAnimationContent from '../../content/animation/EditAnimationContent.js'
import AssetAnimationXml from '../../asset/types/animation/AssetAnimationXml.js'
import AssetAnimationScriptXml from '../../asset/types/animation/AssetAnimationScriptXml.js'
import AAnimation from '../../flow/animation/AAnimation.js'
import OnAnimationStartEvent from '../../flow/event/native/OnAnimationStartEvent.js'
import AnimationNode from '../../flow/node/AnimationNode.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'
import StartAnimationFunction from '../../flow/function/native/animation/StartAnimationFunction.js'
import SetFunction from '../../flow/function/native/component/SetFunction.js'
import OnUpdateEvent from '../../flow/event/native/OnUpdateEvent.js'
import GetFunction from '../../flow/function/native/component/GetFunction.js'
import GreaterThanOrEqualFunction from '../../flow/function/native/basic/GreaterThanOrEqualFunction.js'
import FalseCondition from '../../flow/condition/FalseCondition.js'
import AndFunction from '../../flow/function/native/basic/AndFunction.js'
import OrFunction from '../../flow/function/native/basic/OrFunction.js'
import NotFunction from '../../flow/function/native/basic/NotFunction.js'
import RoundFunction from '../../flow/function/native/basic/RoundFunction.js'
import IsGroundedFunction from '../../flow/function/native/physics/IsGroundedFunction.js'
import OnAnyAnimationStartEvent from '../../flow/event/native/OnAnyAnimationStartEvent.js'
import OnInputAttackEvent from '../../flow/event/native/OnInputAttackEvent.js'
import StopAnimationFunction from '../../flow/function/native/animation/StopAnimationFunction.js'
import IsAnimationPlayingFunction from '../../flow/function/native/animation/IsAnimationPlayingFunction.js'
import HasCurrentAnimationFunction from '../../flow/function/native/animation/HasCurrentAnimationFunction.js'
import GetCurrentAnimationFunction from '../../flow/function/native/animation/GetCurrentAnimationFunction.js'
import ANumberVariable from '../../flow/variable/ANumberVariable.js'
import AReference from '../../flow/reference/AReference.js'
import ReferenceNode from '../../flow/node/ReferenceNode.js'
import ASelf from '../../flow/unit/ASelf.js'
import SelfNode from '../../flow/node/SelfNode.js'
import IsAnimationEndedFunction from '../../flow/function/native/animation/IsAnimationEndedFunction.js'
import AToggleVariable from '../../flow/variable/AToggleVariable.js'
import ToggleVariableNode from '../../flow/node/variable/ToggleVariableNode.js'
import GetInputYAxisFunction from '../../flow/function/native/input/GetInputYAxisFunction.js'
import ABooleanVariable from '../../flow/variable/ABooleanVariable.js'
import ScaleMeshFunction from '../../flow/function/native/mesh/ScaleMeshFunction.js'
import AbsFunction from '../../flow/function/native/basic/AbsFunction.js'
import AComponentVariable from '../../flow/variable/AComponentVariable.js'
import GetInstanceFunction from '../../flow/function/native/component/GetInstanceFunction.js'
import SetInstanceFunction from '../../flow/function/native/component/SetInstanceFunction.js'
import MaskGroupPreference from '../../preference/maskgroup/MaskGroupPreference.js'
import GetAllCollisionFunction from '../../flow/function/native/physics/GetAllCollisionFunction.js'
import AMaskGroupVariable from '../../flow/variable/AMaskGroupVariable.js'
import MaskGroup from '../../preference/maskgroup/MaskGroup.js'
import ALoop from '../../flow/loop/ALoop.js'
import ArrayFunction from '../../flow/function/native/structure/ArrayFunction.js'
import GetValueFunction from '../../flow/function/native/object/GetValueFunction.js'
import IsArrayEmptyFunction from '../../flow/function/native/array/IsArrayEmptyFunction.js'
import GetUnitByComponentFunction from '../../flow/function/native/component/GetUnitByComponentFunction.js'
import GetComponentFunction from '../../flow/function/native/unit/GetComponentFunction.js'
import SubtractFunction from '../../flow/function/native/basic/SubtractFunction.js'
import GetTimeFunction from '../../flow/function/native/time/GetTimeFunction.js'
import GetVarFunction from '../../flow/function/native/component/GetVarFunction.js'
import SetVarFunction from '../../flow/function/native/component/SetVarFunction.js'
import DivideFunction from '../../flow/function/native/basic/DivideFunction.js'
import AddVectorFunction from '../../flow/function/native/basic/AddVectorFunction.js'
import IsUpdateTimeFunction from '../../flow/function/native/time/IsUpdateTimeFunction.js'
import MaterialRegistry from '../../registry/MaterialRegistry.js'
import DefaultMaterial from '../../material/DefaultMaterial.js'
import LightPointUnitInstant from '../../unit/instant/type/internal/light/LightPointUnitInstant.js'
import LightPointComponent from '../../component/internal/LightPointComponent.js'
import LightMaterial from '../../material/LightMaterial.js'
import LightGlobalUnitInstant from '../../unit/instant/type/internal/light/LightGlobalUnitInstant.js'
import LightGlobalComponent from '../../component/internal/LightGlobalComponent.js'
import AssetAudio from '../../asset/types/Audio/AssetAudio.js'
import PlayAudioFunction from '../../flow/function/native/audio/PlayAudioFunction.js'
import IsAudioPlayingFunction from '../../flow/function/native/audio/IsAudioPlayingFunction.js'
import SceneManager from '../../manager/SceneManager.js'
import Scene from '../../scene/Scene.js'
import FlipScaleFunction from '../../flow/function/native/transform/FlipScaleFunction.js'
import UIContainerUnitInstant from '../../unit/instant/type/internal/ui/UIContainerUnitInstant.js'
import UIImageUnitInstant from '../../unit/instant/type/internal/ui/UIImageUnitInstant.js'
import UIContainerComponent from '../../component/internal/ui/UIContainerComponent.js'
import UIImageComponent from '../../component/internal/ui/UIImageComponent.js'
import UITextComponent from '../../component/internal/ui/UITextComponent.js'
import UITextUnitInstant from '../../unit/instant/type/internal/ui/UITextUnitInstant.js'
import UIElementComponent from '../../component/internal/ui/UIElementComponent.js'
import UITransformComponent from '../../component/internal/ui/UITransformComponent.js'
import AssetFont from '../../asset/types/font/AssetFont.js'
import AssetGradientColorXml from '../../asset/types/color/AssetGradientColorXml.js'
import UIButtonUnitInstant from '../../unit/instant/type/internal/ui/UIButtonUnitInstant.js'
import UIButtonComponent from '../../component/internal/ui/UIButtonComponent.js'
import UIEmptyUnitInstant from '../../unit/instant/type/internal/ui/UIEmptyUnitInstant.js'
import UISliderFillUnitInstant from '../../unit/instant/type/internal/ui/slider/UISliderFillUnitInstant.js'
import UISliderHandleUnitInstant from '../../unit/instant/type/internal/ui/slider/UISliderHandleUnitInstant.js'
import UISliderUnitInstant from '../../unit/instant/type/internal/ui/slider/UISliderUnitInstant.js'
import UISliderComponent from '../../component/internal/ui/slider/UISliderComponent.js'
import UISliderFillComponent from '../../component/internal/ui/slider/UISliderFillComponent.js'
import UISliderHandleComponent from '../../component/internal/ui/slider/UISliderHandleComponent.js'
import AFunctionInput from '../../flow/io/AFunctionInput.js'
import AFunctionOutput from '../../flow/io/AFunctionOutput.js'
import OnCallEvent from '../../flow/event/native/OnCallEvent.js'
import ACustomFunction from '../../flow/function/custom/ACustomFunction.js'
import LoadSceneFunction from '../../flow/function/native/scene/LoadSceneFunction.js'
import LoadSceneIndexFunction from '../../flow/function/native/scene/LoadSceneIndexFunction.js'
import EnableUnitFunction from '../../flow/function/native/unit/EnableUnitFunction.js'
import DisableUnitFunction from '../../flow/function/native/unit/DisableUnitFunction.js'
import IsUnitPressedFunction from '../../flow/function/native/unit/IsUnitPressedFunction.js'
import AUnitVariable from '../../flow/variable/AUnitVariable.js'
import AssetUnit from '../../asset/types/unit/AssetUnit.js'
import TranslateFunction from '../../flow/function/native/transform/TranslateFunction.js'
import GetDeltaTimeFunction from '../../flow/function/native/time/GetDeltaTimeFunction.js'
import MultiplyVectorFunction from '../../flow/function/native/basic/MultiplyVectorFunction.js'
import BoxCastFunction from '../../flow/function/native/physics/BoxCastFunction.js'
import MoveXYAxisFunction from '../../flow/function/native/physics/MoveXYAxisFunction.js'
import TileGridUnitInstant from '../../unit/instant/type/internal/tile/TileGridUnitInstant.js'
import TileGridComponent from '../../component/internal/tile/TileGridComponent.js'
import TileMapUnitInstant from '../../unit/instant/type/internal/tile/TileMapUnitInstant.js'
import TileMapComponent from '../../component/internal/tile/TileMapComponent.js'
import TileColliderComponent from '../../component/internal/tile/TileColliderComponent.js'
import GetComponentInstanceFunction from '../../flow/function/native/component/GetComponentInstanceFunction.js'
import GetCollisionsFunction from '../../flow/function/native/physics/GetCollisionsFunction.js'
import CallFunction from '../../flow/function/native/basic/CallFunction.js'
import InstantiateUnitFunction from '../../flow/function/native/unit/InstantiateUnitFunction.js'
import AThen from '../../flow/promise/AThen.js'
import SetParentUnitFunction from '../../flow/function/native/unit/SetParentUnitFunction.js'
import APromise from '../../flow/promise/APromise.js'
import ToScreenPositionFunction from '../../flow/function/native/transform/ToScreenPositionFunction.js'
import ConcatFunction from '../../flow/function/native/basic/ConcatFunction.js'
import ArrayPushFunction from '../../flow/function/native/array/ArrayPushFunction.js'
import PhysicsTranslateFunction from '../../flow/function/native/transform/PhysicsTranslateFunction.js'
import GetUnitNameFunction from '../../flow/function/native/unit/GetUnitNameFunction.js'
import Tag from '../../preference/tag/Tag.js'
import TagPreference from '../../preference/tag/TagPreference.js'
import GetUnitTagNameFunction from '../../flow/function/native/unit/GetUnitTagNameFunction.js'
import IsFunctionDefinedFunction from '../../flow/function/native/basic/IsFunctionDefinedFunction.js'
import SetColorFunction from '../../flow/function/native/style/SetColorFunction.js'

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
        {id: 30, type: MeshUnit},
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
        {id: 560, type: ApplyForceFunction},
        {id: 570, type: GetVelocityXFunction},
        {id: 580, type: GetVelocityYFunction},
        {id: 590, type: GreaterThanFunction},
        {id: 600, type: EqualToFunction},
        {id: 610, type: NotEqualToFunction},
        {id: 620, type: ScriptComponent},
        {id: 630, type: AStringVariable},
        {id: 640, type: EditAnimationContent},
        {id: 650, type: AssetAnimationXml},
        {id: 660, type: AssetAnimationScriptXml},
        {id: 670, type: AAnimation},
        {id: 680, type: OnAnimationStartEvent},
        {id: 690, type: AnimationNode},
        {id: 700, type: AnimationComponent},
        {id: 701, type: GUIPropertyComponent},
        {id: 720, type: StartAnimationFunction},
        {id: 730, type: SetFunction},
        {id: 740, type: OnUpdateEvent},
        {id: 750, type: GetFunction},
        {id: 760, type: GreaterThanOrEqualFunction},
        {id: 770, type: FalseCondition},
        {id: 780, type: AndFunction},
        {id: 790, type: OrFunction},
        {id: 800, type: NotFunction},
        {id: 810, type: RoundFunction},
        {id: 820, type: IsGroundedFunction},
        {id: 830, type: OnAnyAnimationStartEvent},
        {id: 840, type: OnInputAttackEvent},
        {id: 850, type: StopAnimationFunction},
        {id: 860, type: IsAnimationPlayingFunction},
        {id: 870, type: HasCurrentAnimationFunction},
        {id: 880, type: GetCurrentAnimationFunction},
        {id: 890, type: ANumberVariable},
        {id: 900, type: AReference},
        {id: 910, type: ReferenceNode},
        {id: 920, type: ASelf},
        {id: 930, type: SelfNode},
        {id: 940, type: IsAnimationEndedFunction},
        {id: 950, type: AToggleVariable},
        {id: 960, type: ToggleVariableNode},
        {id: 970, type: GetInputYAxisFunction},
        {id: 980, type: ABooleanVariable},
        {id: 990, type: ScaleMeshFunction},
        {id: 1000, type: AbsFunction},
        {id: 1010, type: AComponentVariable},
        {id: 1020, type: GetInstanceFunction},
        {id: 1030, type: SetInstanceFunction},
        {id: 1040, type: MaskGroupPreference},
        {id: 1050, type: GetAllCollisionFunction},
        {id: 1060, type: AMaskGroupVariable},
        {id: 1070, type: MaskGroup},
        {id: 1080, type: ALoop},
        {id: 1090, type: ArrayFunction},
        {id: 1100, type: GetValueFunction},
        {id: 1100, type: IsArrayEmptyFunction},
        {id: 1110, type: GetUnitByComponentFunction},
        {id: 1120, type: GetComponentFunction},
        {id: 1130, type: SubtractFunction},
        {id: 1140, type: GetTimeFunction},
        {id: 1150, type: GetVarFunction},
        {id: 1160, type: SetVarFunction},
        {id: 1170, type: DivideFunction},
        {id: 1180, type: AddVectorFunction},
        {id: 1190, type: IsUpdateTimeFunction},
        {id: 1200, type: MaterialRegistry},
        {id: 1210, type: DefaultMaterial},
        {id: 1220, type: LightPointUnitInstant},
        {id: 1230, type: LightPointComponent},
        {id: 1240, type: LightMaterial},
        {id: 1250, type: LightGlobalUnitInstant},
        {id: 1260, type: LightGlobalComponent},
        {id: 1270, type: AssetAudio},
        {id: 1280, type: PlayAudioFunction},
        {id: 1290, type: IsAudioPlayingFunction},
        {id: 1300, type: SceneManager},
        {id: 1310, type: Scene},
        {id: 1320, type: FlipScaleFunction},
        {id: 1330, type: UIContainerUnitInstant},
        {id: 1340, type: UIImageUnitInstant},
        {id: 1350, type: UIContainerComponent},
        {id: 1360, type: UIImageComponent},
        {id: 1370, type: UITextComponent},
        {id: 1380, type: UITextUnitInstant},
        {id: 1390, type: UIElementComponent},
        {id: 1400, type: UITransformComponent},
        {id: 1410, type: AssetFont},
        {id: 1420, type: AssetGradientColorXml},
        {id: 1430, type: UIButtonUnitInstant},
        {id: 1440, type: UIButtonComponent},
        {id: 1450, type: UIEmptyUnitInstant},
        {id: 1460, type: UISliderUnitInstant},
        {id: 1470, type: UISliderFillUnitInstant},
        {id: 1480, type: UISliderHandleUnitInstant},
        {id: 1490, type: UISliderComponent},
        {id: 1500, type: UISliderFillComponent},
        {id: 1510, type: UISliderHandleComponent},
        {id: 1520, type: AFunctionInput},
        {id: 1530, type: AFunctionOutput},
        {id: 1540, type: OnCallEvent},
        {id: 1550, type: ACustomFunction},
        {id: 1560, type: LoadSceneFunction},
        {id: 1570, type: LoadSceneIndexFunction},
        {id: 1580, type: EnableUnitFunction},
        {id: 1590, type: DisableUnitFunction},
        {id: 1600, type: IsUnitPressedFunction},
        {id: 1610, type: AUnitVariable},
        {id: 1620, type: AssetUnit},
        {id: 1630, type: TranslateFunction},
        {id: 1640, type: GetDeltaTimeFunction},
        {id: 1650, type: MultiplyVectorFunction},
        {id: 1660, type: BoxCastFunction},
        {id: 1670, type: MoveXYAxisFunction},
        {id: 1680, type: TileGridUnitInstant},
        {id: 1690, type: TileGridComponent},
        {id: 1700, type: TileMapUnitInstant},
        {id: 1710, type: TileMapComponent},
        {id: 1720, type: TileColliderComponent},
        {id: 1730, type: GetComponentInstanceFunction},
        {id: 1740, type: GetCollisionsFunction},
        {id: 1750, type: CallFunction},
        {id: 1760, type: InstantiateUnitFunction},
        {id: 1770, type: AThen},
        {id: 1780, type: SetParentUnitFunction},
        {id: 1790, type: APromise},
        {id: 1800, type: ToScreenPositionFunction},
        {id: 1810, type: ConcatFunction},
        {id: 1820, type: ArrayPushFunction},
        {id: 1830, type: PhysicsTranslateFunction},
        {id: 1840, type: GetUnitNameFunction},
        {id: 1850, type: Tag},
        {id: 1860, type: TagPreference},
        {id: 1870, type: GetUnitTagNameFunction},
        {id: 1880, type: IsFunctionDefinedFunction},
        {id: 1890, type: SetColorFunction},
    ]

    /**
     * Class to be excluded during serialization
     */
    static exclude = [
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
        GUIPropertyComponent,
        AssetScriptXml,
        AssetScriptCode,
        AssetAnimationScriptXml,
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