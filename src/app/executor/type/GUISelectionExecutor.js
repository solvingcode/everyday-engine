import ComponentExecutor from './ComponentExecutor.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
import Style from '../../pobject/Style.js'
import GUIPendingComponent from '../../component/internal/gui/GUIPendingComponent.js'
import StyleComponent from '../../component/internal/StyleComponent.js'

export default class GUISelectionExecutor extends ComponentExecutor {

    constructor() {
        super([MeshComponent, GUIPropertyComponent, StyleComponent])
    }

    /**
     * @override
     */
    execute(unit) {
        if(!unit.getComponent(GUIPendingComponent)){
            const meshComponent = unit.getComponent(MeshComponent)
            const propertyComponent = unit.getComponent(GUIPropertyComponent)
            const styleComponent = unit.getComponent(StyleComponent)
            const style = new Style()

            if (propertyComponent.isFocused()) {
                style.setColor('#FFFFFF')
                style.setBorderSize(3)
            }else if (propertyComponent.isSelected()) {
                style.setColor('#FFAE00')
                style.setBorderSize(3)
            }else{
                style.setColor(styleComponent.getStyle().getColor())
                style.setBorderSize(styleComponent.getStyle().getBorderSize())
            }

            const meshStyle = meshComponent.getStyle()
            if (meshStyle.getColor() !== style.getColor() ||
                meshStyle.getBorderSize() !== style.getBorderSize()) {
                meshStyle.setColor(style.getColor())
                meshStyle.setBorderSize(style.getBorderSize())
                meshComponent.setGenerated(false)
            }
        }

    }

}