import Component from '../../Component.js'
import {TYPES} from '../../../pobject/AttributeType.js'
import Vector from '../../../utils/Vector.js'

export default class UITransformComponent extends Component {

    constructor() {
        super('UI Transform')
    }

    /**
     * @override
     */
    initAttributes() {
        this.add('anchorMin', TYPES.VECTOR, new Vector())
        this.add('anchorMax', TYPES.VECTOR, new Vector())
        this.add('anchorLeftTop', TYPES.VECTOR, new Vector())
        this.add('anchorRightBottom', TYPES.VECTOR, new Vector())
        this.add('lastAnchorMin', TYPES.VECTOR, new Vector())
        this.add('lastAnchorMax', TYPES.VECTOR, new Vector())
    }

    /**
     * @override
     */
    getExcludeFields() {
        return ['lastAnchorMin', 'lastAnchorMax']
    }

    /**
     * @return {Vector}
     */
    getAnchorMin() {
        return this.getValue('anchorMin')
    }

    /**
     * @param {Vector} anchorMin
     */
    setAnchorMin(anchorMin) {
        this.setValue('anchorMin', anchorMin)
    }

    /**
     * @return {Vector}
     */
    getAnchorMax() {
        return this.getValue('anchorMax')
    }

    /**
     * @param {Vector} anchorMax
     */
    setAnchorMax(anchorMax) {
        this.setValue('anchorMax', anchorMax)
    }

    /**
     * @return {Vector}
     */
    getPosition() {
        return this.getValue('position')
    }

    /**
     * @param {Vector} position
     */
    setPosition(position) {
        this.setValue('position', position)
    }

    /**
     * @return {Vector}
     */
    getAnchorLeftTop() {
        return this.getValue('anchorLeftTop')
    }

    /**
     * @param {Vector} anchorLeftTop
     */
    setAnchorLeftTop(anchorLeftTop) {
        this.setValue('anchorLeftTop', anchorLeftTop)
    }

    /**
     * @return {Vector}
     */
    getAnchorRightBottom() {
        return this.getValue('anchorRightBottom')
    }

    /**
     * @param {Vector} anchorRightBottom
     */
    setAnchorRightBottom(anchorRightBottom) {
        this.setValue('anchorRightBottom', anchorRightBottom)
    }

    /**
     * @return {Vector}
     */
    getLastAnchorMin() {
        return this.getValue('lastAnchorMin')
    }

    /**
     * @param {Vector} lastAnchorMin
     */
    setLastAnchorMin(lastAnchorMin) {
        this.setValue('lastAnchorMin', lastAnchorMin)
    }

    /**
     * @return {Vector}
     */
    getLastAnchorMax() {
        return this.getValue('lastAnchorMax')
    }

    /**
     * @param {Vector} lastAnchorMax
     */
    setLastAnchorMax(lastAnchorMax) {
        this.setValue('lastAnchorMax', lastAnchorMax)
    }

    /**
     * @return {boolean}
     */
    isAnchorMinUpdated() {
        return !_.isEqual(this.getAnchorMin(), this.getLastAnchorMin())
    }

    /**
     * @return {boolean}
     */
    isAnchorMaxUpdated() {
        return !_.isEqual(this.getAnchorMax(), this.getLastAnchorMax())
    }

}