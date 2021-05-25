import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'
import Vector from '../../utils/Vector.js'
import Size from '../../pobject/Size.js'
import Layout from '../../layout/Layout.js'
import {PrimitiveShape} from '../../unit/Unit.js'

/**
 * @abstract
 */
export default class ColliderComponent extends Component{

    /**
     * @override
     */
    initAttributes() {
        this.add('position', TYPES.VECTOR, new Vector())
        this.add('size', TYPES.SIZE, new Size(0))
        this.add('editFlag', TYPES.BOOLEAN, false)
        this.add('shape', TYPES.STRING, PrimitiveShape.RECT)
    }

    /**
     * @override
     */
    getFormFields() {
        return [
            {
                bind: 'position.x',
                label: 'Position X',
                type: Layout.form.TEXT
            },
            {
                bind: 'position.y',
                label: 'Position Y',
                type: Layout.form.TEXT
            },
            {
                bind: 'size.width',
                label: 'Width',
                type: Layout.form.TEXT
            },
            {
                bind: 'size.height',
                label: 'Height',
                type: Layout.form.TEXT
            },
            {
                bind: 'editFlag',
                label: 'Edit',
                type: Layout.form.CHECKBOX
            }
        ]
    }

    /**
     * @param {Vector} position
     */
    setPosition(position) {
        this.setValue('position', position)
    }

    /**
     * @return {Vector}
     */
    getPosition(){
        return this.getValue('position')
    }

    /**
     * @param {boolean} editFlag
     */
    setEditFlag(editFlag) {
        this.setValue('editFlag', editFlag)
    }

    /**
     * @return {boolean}
     */
    getEditFlag(){
        return this.getValue('editFlag')
    }

    /**
     * @return {boolean}
     */
    isEditFlag(){
        return this.getEditFlag()
    }

    /**
     * @param {Size} size
     */
    setSize(size) {
        this.setValue('size', size)
    }

    /**
     * @return {Size}
     */
    getSize(){
        return this.getValue('size')
    }

    /**
     * @param {string} shape
     */
    setShape(shape) {
        this.setValue('shape', shape)
    }

    /**
     * @return {string}
     */
    getShape(){
        return this.getValue('shape')
    }

}