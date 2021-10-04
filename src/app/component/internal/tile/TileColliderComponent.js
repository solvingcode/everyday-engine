import Component from '../../Component.js'
import {TYPES} from '../../../pobject/AttributeType.js'
import Size from '../../../pobject/Size.js'

export default class TileColliderComponent extends Component{

    constructor() {
        super('Tile Collider')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('colliderPositions', TYPES.ARRAY | TYPES.VECTOR, [])
        this.add('colliderSize', TYPES.SIZE, new Size(0))
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['colliderPositions', 'colliderSize']
    }

    /**
     * @return {Vector[]}
     */
    getColliderPositions(){
        return this.getValue('colliderPositions')
    }

    /**
     * @param {Vector[]} colliderPositions
     */
    setColliderPositions(colliderPositions){
        this.setValue('colliderPositions', colliderPositions)
    }

    /**
     * @return {Size}
     */
    getColliderSize(){
        return this.getValue('colliderSize')
    }

    /**
     * @param {Size} colliderSize
     */
    setColliderSize(colliderSize){
        this.setValue('colliderSize', colliderSize)
    }

    /**
     * @override
     */
    isUnique(){
        return true
    }

}