import Component from '../Component.js'
import {TYPES} from '../../pobject/AttributeType.js'
import Vector from '../../utils/Vector.js'

export default class TileGridComponent extends Component {

    constructor() {
        super('Grid')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('cellScale', TYPES.VECTOR, new Vector({x: 20, y: 20}))
    }

    /**
     * @return {Vector}
     */
    getCellScale() {
        return this.getValue('cellScale')
    }

    /**
     * @param {Vector} cellScale
     */
    setCellScale(cellScale) {
        this.setValue('cellScale', cellScale)
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }
}