import Component from '../Component.js'
import Layout from '../../layout/Layout.js'
import Vector from '../../utils/Vector.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class TransformComponent extends Component{

    constructor() {
        super('Transform')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('position', TYPES.VECTOR, new Vector())
        this.add('scale', TYPES.VECTOR, new Vector())
        this.add('rotation', TYPES.NUMBER, 0)
    }

    /**
     * @return {Vector}
     */
    getPosition(){
        return this.get('position').getAttrValue()
    }

    /**
     * @param {Vector} position
     */
    setPosition(position){
        this.set('position', position)
    }

    /**
     * @return {number}
     */
    getRotation(){
        return this.get('rotation').getAttrValue()
    }

    /**
     * @param {number} rotation
     */
    setRotation(rotation){
        this.set('rotation', rotation)
    }

    /**
     * @return {Vector}
     */
    getScale(){
        return this.get('scale').getAttrValue()
    }

    /**
     * @param {Vector} scale
     */
    setScale(scale){
        this.set('scale', scale)
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
                bind: 'scale.x',
                label: 'Scale X',
                type: Layout.form.TEXT
            },
            {
                bind: 'scale.y',
                label: 'Scale Y',
                type: Layout.form.TEXT
            },
            {
                bind: 'rotation',
                label: 'Rotation (rad)',
                type: Layout.form.RANGE,
                options: {
                    min: 0,
                    max: Math.PI,
                    step: 0.01
                }
            }
        ]
    }
}