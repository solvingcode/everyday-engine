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
        if (meshStyle.getColor() !== style.getColor() ||
            meshStyle.getBorderSize() !== style.getBorderSize()) {
            meshStyle.setColor(style.getColor())
            meshStyle.setBorderSize(style.getBorderSize())
            meshStyle.setFillColor(style.getFillColor())
            meshStyle.setColorOpacity(style.getColorOpacity())
            meshStyle.setFillColorOpacity(style.getFillColorOpacity())
            meshComponent.setGenerated(false)
        }
    }

}