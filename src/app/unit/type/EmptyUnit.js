import Unit from '../Unit.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import StyleComponent from '../../component/internal/StyleComponent.js'

export default class EmptyUnit extends Unit{

    constructor() {
        super([GUIPropertyComponent, MeshComponent, TransformComponent, StyleComponent])
    }

}