import Data from './Data.js'
import MaskGroup from '../../preference/maskgroup/MaskGroup.js'

export default class MaskGroupPreferenceData extends Data{

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
    setMasks(masks){
        this.masks = masks
    }

    /**
     * @param {string} name
     * @return {MaskGroup}
     */
    addMask(name){
        const maskGroup = new MaskGroup(name)
        this.masks.push(maskGroup)
        return maskGroup
    }

    /**
     * @param {number} id
     * @return {MaskGroup}
     */
    find(id){
        return this.masks.find(mask => mask.getId() === id)
    }

    /**
     * @return {MaskGroup[]}
     */
    getMasks(){
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