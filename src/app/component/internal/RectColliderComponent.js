import {PrimitiveShape} from '../../unit/Unit.js'
import ColliderComponent from './ColliderComponent.js'

export default class RectColliderComponent extends ColliderComponent{

    constructor() {
        super('Rect Collider')
    }

    /**
     * @override
     */
    initAttributes() {
        super.initAttributes()
        this.setShape(PrimitiveShape.RECT)
    }

}