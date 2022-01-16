import {PrimitiveShape} from '../../unit/Unit.js'
import ColliderComponent from './ColliderComponent.js'
import Layout from '../../layout/Layout.js'

export default class RectColliderComponent extends ColliderComponent {

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

    /**
     * @override
     */
    getFormFields() {
        return [
            ...super.getFormFields(),
            ...[
                {
                    bind: 'size.width',
                    label: 'Width (%)',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'size.height',
                    label: 'Height (%)',
                    type: Layout.form.TEXT
                }
            ]
        ]
    }

}