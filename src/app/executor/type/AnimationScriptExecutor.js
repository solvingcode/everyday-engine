import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import ClientError from '../../exception/type/ClientError.js'
import AssetHelper from '../../utils/AssetHelper.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'
import OnAnimationStartEvent from '../../flow/event/native/OnAnimationStartEvent.js'

export default class AnimationScriptExecutor extends ComponentExecutor {

    constructor() {
        super([AnimationComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const functionRegistry = world.getFunctionRegistry()
        const animationComponent = unit.getComponent(AnimationComponent)
        const assetId = animationComponent.getAssetId()
        const asset = world.getAssetsManager().findAssetById(assetId)
        if (!asset) {
            throw new ClientError(`${this.constructor.name}: No asset found with ID "${assetId}"`)
        }
        const script = AssetHelper.getScript(asset)
        if (!script) {
            throw new TypeError(`No compiled script found for asset "${asset.getName()}"`)
        }
        functionRegistry.getInstancesByClass(script.getName()).forEach(instance => {
            if (instance instanceof OnAnimationStartEvent) {
                instance.execute(functionRegistry, unit)
            }
        })
    }

}