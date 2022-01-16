import ComponentExecutor from './ComponentExecutor.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MaterialType from '../../material/MaterialType.js'
import LightPointComponent from '../../component/internal/LightPointComponent.js'
import LightGlobalComponent from '../../component/internal/LightGlobalComponent.js'

export default class LightExecutor extends ComponentExecutor {

    constructor() {
        super([MeshComponent, TransformComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const {lights} = executionContext
        if (meshComponent.isGenerated() && meshComponent.getMaterial() === MaterialType.LIGHT) {
            if (this.mustGenerateLight(transformComponent.getPosition(), meshComponent.getSize(), lights)) {
                meshComponent.setGenerated(false)
            }
        }
    }

    /**
     * @param {Vector} unitPosition
     * @param {Size} unitSize
     * @param {Unit[]} lights
     * @return {boolean}
     */
    mustGenerateLight(unitPosition, unitSize, lights) {
        return !!lights.find(lightUnit => {
            if (lightUnit.hasComponents([LightPointComponent])) {
                const transformComponent = lightUnit.getComponent(TransformComponent)
                const meshComponent = lightUnit.getComponent(MeshComponent)
                const lightPosition = transformComponent.getPosition()
                const lightSize = meshComponent.getSize()
                return !(unitPosition.getX() + unitSize.getWidth() < lightPosition.getX() ||
                    lightPosition.getX() + lightSize.getWidth() < unitPosition.getX() ||
                    unitPosition.getY() + unitSize.getHeight() < lightPosition.getY() ||
                    lightPosition.getY() + lightSize.getHeight() < unitPosition.getY())
            } else if (lightUnit.hasComponents([LightGlobalComponent])) {
                return true
            }
        })
    }
}