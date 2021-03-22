import Unit from '../Unit.js'
import GUIPropertyComponent from '../../component/GUIPropertyComponent.js'
import MeshComponent from '../../component/MeshComponent.js'
import TransformComponent from '../../component/TransformComponent.js'

export default class EmptyUnit extends Unit{

    constructor() {
        super([GUIPropertyComponent, MeshComponent, TransformComponent])
    }

}