import Unit from '../Unit.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'

export default class BehaviorUnit extends Unit{

    constructor() {
        super([GUIPropertyComponent])
    }

}