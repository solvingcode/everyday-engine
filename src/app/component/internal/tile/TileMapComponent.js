import Component from '../../Component.js'
import {TYPES} from '../../../pobject/AttributeType.js'

export default class TileMapComponent extends Component {

    constructor() {
        super('Tile Map')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('cellIndexes', TYPES.ARRAY | TYPES.VECTOR, [])
        this.add('assetIds', TYPES.ARRAY | TYPES.NUMBER, [])
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['cellIndexes', 'assetIds']
    }

    /**
     * @return {Vector[]}
     */
    getCellIndexes() {
        return this.getValue('cellIndexes')
    }

    /**
     * @param {Vector[]} cellIndexes
     */
    setCellIndexes(cellIndexes) {
        this.setValue('cellIndexes', cellIndexes)
    }

    /**
     * @return {number[]}
     */
    getAssetIds() {
        return this.getValue('assetIds')
    }

    /**
     * @param {number[]} assetIds
     */
    setAssetIds(assetIds) {
        this.setValue('assetIds', assetIds)
    }

    /**
     * @override
     */
    isRemovable() {
        return false
    }

}