import Unit from '../Unit.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import StyleComponent from '../../component/internal/StyleComponent.js'

export default class TransformUnit extends Unit{

    constructor() {
        super([GUIPropertyComponent, TransformComponent, StyleComponent])
    }

}