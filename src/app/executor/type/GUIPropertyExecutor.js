import ComponentExecutor from './ComponentExecutor.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import StyleComponent from '../../component/internal/StyleComponent.js'

export default class GUIPropertyExecutor extends ComponentExecutor {

    constructor() {
        super([GUIPropertyComponent, MeshComponent, StyleComponent])
    }

    /**
     * @override
     */
    execute(unit) {
        const guiPropertyComponent = unit.getComponent(GUIPropertyComponent)
        const styleComponent = unit.getComponent(StyleComponent)
        if (guiPropertyComponent.getIgnored()) {
            if (!guiPropertyComponent.getRestoreStyle()) {
                guiPropertyComponent.setRestoreStyle(_.cloneDeep(styleComponent.getStyle()))
            }
            styleComponent.getStyle().setOpacity(0.2)
        } else {
            if (guiPropertyComponent.getRestoreStyle()) {
                styleComponent.setStyle(_.cloneDeep(guiPropertyComponent.getRestoreStyle()))
                guiPropertyComponent.setRestoreStyle(null)
            }
        }
    }

}