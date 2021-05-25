import ComponentExecutor from './ComponentExecutor.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
import Style from '../../pobject/Style.js'
import GUIPendingComponent from '../../component/internal/gui/GUIPendingComponent.js'
import StyleComponent from '../../component/internal/StyleComponent.js'
import UnitHelper from '../../utils/UnitHelper.js'

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
            const isColliderEdit = UnitHelper.isColliderEditing(unit)
            const style = new Style()

            /*if (propertyComponent.isFocused() && !isColliderEdit) {
                style.setColor('#FFFFFF')
                style.setBorderSize(2)
            }else*/
            if (propertyComponent.isSelected() && !isColliderEdit) {
                style.setColor('#FFAE00')
                style.setBorderSize(2)
            }else{
                style.setColor(styleComponent.getStyle().getColor())
                style.setFillColor(styleComponent.getStyle().getFillColor())
                style.setBorderSize(styleComponent.getStyle().getBorderSize())
                style.setColorOpacity(styleComponent.getStyle().getColorOpacity())
                style.setFillColorOpacity(styleComponent.getStyle().getFillColorOpacity())
            }

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

}