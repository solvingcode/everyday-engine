import AVariable from './AVariable.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class ASceneVariable extends AVariable{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(TYPES.SCENE, name)
    }

}