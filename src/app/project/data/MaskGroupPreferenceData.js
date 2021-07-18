import Data from './Data.js'
import MaskGroup from '../../preference/maskgroup/MaskGroup.js'
import ClientError from '../../exception/type/ClientError.js'

export default class MaskGroupPreferenceData extends Data {

    /**
     * @type {MaskGroup[]}
     */
    masks

    constructor() {
        super()
        this.masks = []
    }

    /**
     * @param {MaskGroup[]} masks
     */
    setMasks(masks) {
        this.masks = masks
    }

    /**
     * @param {string} name
     * @return {MaskGroup}
     */
    addMask(name) {
        if (this.findByName(name)) {
            throw new ClientError(`Mask Group "${name}" already created`)
        }
        return this.add(name)
    }

    /**
     * @param {string} name
     * @return {MaskGroup}
     */
    tryAddMask(name) {
        if (!this.findByName(name)) {
            return this.add(name)
        }
    }

    /**
     * @private
     * @param {string} name
     * @return {MaskGroup}
     */
    add(name){
        const maskGroup = new MaskGroup(name)
        this.masks.push(maskGroup)
        return maskGroup
    }

    /**
     * @param {number} id
     * @return {MaskGroup}
     */
    find(id) {
        return this.masks.find(mask => mask.getId() === id)
    }

    /**
     * @param {string} name
     * @return {MaskGroup}
     */
    findByName(name) {
        return this.masks.find(mask => mask.getName() === name)
    }

    /**
     * @return {MaskGroup[]}
     */
    getMasks() {
        return this.masks
    }

    /**
     * @param {MaskGroup[]} masks
     */
    concatMasks(masks) {
        this.concat(
            this.masks,
            masks,
            (tItem, sItem) => tItem.getName() === sItem.getName()
        )
    }

}