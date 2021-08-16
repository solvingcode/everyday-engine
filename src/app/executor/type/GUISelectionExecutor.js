import ComponentExecutor from './ComponentExecutor.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
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
            const style = _.cloneDeep(styleComponent.getStyle())

            /*if (propertyComponent.isFocused() && !isColliderEdit) {
                style.setColor('#FFFFFF')
                style.setBorderSize(2)
            }else*/
            if (propertyComponent.isSelected() && !isColliderEdit) {
                style.setColor('#FFAE00')
                style.setBorderSize(1)
            }

            const meshStyle = meshComponent.getStyle()
            if (meshStyle.getColor() !== style.getColor() ||
                meshStyle.getFillColor() !== style.getFillColor() ||
                meshStyle.getColorOpacity() !== style.getColorOpacity() ||
                meshStyle.getFillColorOpacity() !== style.getFillColorOpacity() ||
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