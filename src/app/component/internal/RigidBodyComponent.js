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
     * @override
     */
    getFormFields() {
        return [
            {
                bind: 'freezeRotation',
                label: 'Freeze Rotation',
                type: Layout.form.CHECKBOX
            }
        ]
    }

}