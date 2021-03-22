import Component from './Component.js'
import Layout from '../layout/Layout.js'
import Vector from '../utils/Vector.js'

export default class TransformComponent extends Component{

    position
    rotation
    scale

    constructor() {
        super('Transform')
        this.position = new Vector()
        this.scale = new Vector()
        this.rotation = 0
    }

    /**
     * @return {Vector}
     */
    getPosition(){
        return this.position
    }

    /**
     * @param {Vector} position
     */
    setPosition(position){
        this.position = position
    }

    /**
     * @return {number}
     */
    getRotation(){
        return this.rotation
    }

    /**
     * @param {number} rotation
     */
    setRotation(rotation){
        this.rotation = rotation
    }

    /**
     * @return {Vector}
     */
    getScale(){
        return this.scale
    }

    /**
     * @param {Vector} scale
     */
    setScale(scale){
        this.scale = scale
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