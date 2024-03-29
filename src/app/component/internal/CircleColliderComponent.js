import {PrimitiveShape} from '../../unit/Unit.js'
import ColliderComponent from './ColliderComponent.js'
import Layout from '../../layout/Layout.js'

export default class CircleColliderComponent extends ColliderComponent {

    constructor() {
        super('Circle Collider')
    }

    /**
     * @override
     */
    initAttributes() {
        super.initAttributes()
        this.setShape(PrimitiveShape.CIRCLE)
    }

    /**
     * @override
     */
    getFormFields() {
        return [
            ...super.getFormFields(),
            ...[
                {
                    bind: 'radius',
                    label: 'Radius (%)',
                    type: Layout.form.TEXT
                }
            ]
        ]
    }

    /**
     * @override
     */
    setSize(size){
        const actualSize = this.getSize()
        const actualRadius = this.getRadius()
        this.setRadius(actualRadius * size.getWidth() / actualSize.getWidth())
        super.setSize(size)
    }

}