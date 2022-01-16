import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'
import Layout from '../../layout/Layout.js'
import Vector from '../../utils/Vector.js'

export default class RigidBodyComponent extends Component{

    constructor() {
        super('RigidBody')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('freezeRotation', TYPES.BOOLEAN, false)
        this.add('friction', TYPES.NUMBER, 0)
        this.add('created', TYPES.BOOLEAN, false)
        this.add('velocity', TYPES.VECTOR, new Vector())
    }

    /**
     * @param {boolean} freezeRotation
     */
    setFreezeRotation(freezeRotation) {
        this.setValue('freezeRotation', freezeRotation)
    }

    /**
     * @return {boolean}
     */
    getFreezeRotation(){
        return this.getValue('freezeRotation')
    }

    /**
     * @return {boolean}
     */
    isFreezeRotation(){
        return this.getFreezeRotation()
    }

    /**
     * @param {boolean} created
     */
    setCreated(created) {
        this.setValue('created', created)
    }

    /**
     * @return {boolean}
     */
    getCreated(){
        return this.getValue('created')
    }

    /**
     * @return {boolean}
     */
    isCreated(){
        return this.getCreated()
    }

    /**
     * @param {number} friction
     */
    setFriction(friction) {
        this.setValue('friction', friction)
    }

    /**
     * @return {number}
     */
    getFriction(){
        return this.getValue('friction')
    }

    /**
     * @param {Vector} velocity
     */
    setVelocity(velocity) {
        this.setValue('velocity', velocity)
    }

    /**
     * @return {Vector}
     */
    getVelocity(){
        return this.getValue('velocity')
    }

    /**
     * @override
     */
    getFormFields() {
        return [
            {
                bind: 'freezeRotation',
                label: 'Freeze Rotation',
                type: Layout.form.CHECKBOX
            },
            {
                bind: 'friction',
                label: 'Friction',
                type: Layout.form.TEXT
            }
        ]
    }

}