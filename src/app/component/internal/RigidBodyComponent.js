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
        this.add('frictionOnGround', TYPES.BOOLEAN, false)
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
     * @param {boolean} frictionOnGround
     */
    setFrictionOnGround(frictionOnGround) {
        this.setValue('frictionOnGround', frictionOnGround)
    }

    /**
     * @return {boolean}
     */
    getFrictionOnGround(){
        return this.getValue('frictionOnGround')
    }

    /**
     * @return {boolean}
     */
    isFrictionOnGround(){
        return this.getFrictionOnGround()
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
                bind: 'frictionOnGround',
                label: 'Friction on ground',
                type: Layout.form.CHECKBOX
            }
        ]
    }

}