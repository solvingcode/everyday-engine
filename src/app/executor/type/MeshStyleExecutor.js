import ComponentExecutor from './ComponentExecutor.js'
import StyleComponent from '../../component/internal/StyleComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'

export default class MeshStyleExecutor extends ComponentExecutor {

    constructor() {
        super([MeshComponent, StyleComponent])
    }

    /**
     * @override
     */
    execute(unit) {
        const meshComponent = unit.getComponent(MeshComponent)
        const styleComponent = unit.getComponent(StyleComponent)
        const style = styleComponent.getStyle()

        const meshStyle = meshComponent.getStyle()
        if (!_.isEqual(meshStyle, style)) {
            meshComponent.setStyle(_.cloneDeep(style))
            meshComponent.setGenerated(false)
        }
    }

}