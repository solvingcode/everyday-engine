import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'
import Layout from '../../layout/Layout.js'

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