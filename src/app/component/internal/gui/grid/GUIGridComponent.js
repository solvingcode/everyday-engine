import Component from '../../../Component.js'
import {TYPES} from '../../../../pobject/AttributeType.js'
import Size from '../../../../pobject/Size.js'

export default class GUIGridComponent extends Component{

    /**
     * @override
     */
    getFormFields() {
        return []
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('cellSize', TYPES.SIZE, new Size(0))
        this.add('cellSizeScaled', TYPES.SIZE, new Size(0))
    }

    /**
     * @return {Size}
     */
    getCellSize(){
        return this.getValue('cellSize')
    }

    /**
     * @param {Size} cellSize
     */
    setCellSize(cellSize) {
        this.setValue('cellSize', cellSize)
    }

    /**
     * @return {Size}
     */
    getCellSizeScaled(){
        return this.getValue('cellSizeScaled')
    }

    /**
     * @param {Size} cellSizeScaled
     */
    setCellSizeScaled(cellSizeScaled) {
        this.setValue('cellSizeScaled', cellSizeScaled)
    }
}