import Unit from '../Unit.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'

export default class TransformUnit extends Unit{

    constructor() {
        super([GUIPropertyComponent, TransformComponent])
    }

}