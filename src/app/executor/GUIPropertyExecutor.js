import ComponentExecutor from './ComponentExecutor.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../component/internal/gui/property/GUIPropertyComponent.js'
import GUIPendingComponent from '../component/internal/gui/GUIPendingComponent.js'

export default class GUIPropertyExecutor extends ComponentExecutor {

    constructor() {
        super([GUIPropertyComponent])
    }

    /**
     * @override
     */
    execute(unit) {
        if(!unit.getComponent(GUIPendingComponent)){
            const meshComponent = unit.getComponent(MeshComponent)
            const propertyComponent = unit.getComponent(GUIPropertyComponent)
            if(propertyComponent.isVisible()){
                meshComponent.setEnabled(true)
            }else{
                meshComponent.setEnabled(false)
            }
        }
    }

}