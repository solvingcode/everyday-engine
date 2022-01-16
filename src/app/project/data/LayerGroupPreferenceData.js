import Data from './Data.js'
import ClientError from '../../exception/type/ClientError.js'
import LayerGroup from '../../preference/layerGroup/LayerGroup.js'

export default class LayerGroupPreferenceData extends Data {

    /**
     * @type {LayerGroup[]}
     */
    layers

    constructor() {
        super()
        this.layers = []
    }

    /**
     * @param {LayerGroup[]} layers
     */
    setLayers(layers) {
        this.layers = layers
    }

    /**
     * @param {string} name
     * @param {number} rank
     * @return {LayerGroup}
     */
    addLayer(name, rank) {
        if (this.findByName(name)) {
            throw new ClientError(`Layer Group "${name}" already created`)
        }
        return this.add(name, rank)
    }

    /**
     * @param {string} name
     * @return {LayerGroup}
     */
    tryAddLayer(name) {
        if (!this.findByName(name)) {
            return this.add(name)
        }
    }

    /**
     * @private
     * @param {string} name
     * @param {number} rank
     * @return {LayerGroup}
     */
    add(name, rank) {
        const layerGroup = new LayerGroup(name, rank)
        this.layers.push(layerGroup)
        return layerGroup
    }

    /**
     * @param {number} id
     * @return {LayerGroup}
     */
    find(id) {
        return this.layers.find(layer => layer.getId() === id)
    }

    /**
     * @param {string} name
     * @return {LayerGroup}
     */
    findByName(name) {
        return this.layers.find(layer => layer.getName() === name)
    }

    /**
     * @param {LayerGroup} layer
     */
    delete(layer) {
        const index = this.getLayers().findIndex((element) => element === layer)
        if (index >= 0) {
            return this.getLayers().splice(index, 1)
        } else {
            throw new ClientError(`Layer Group "${layer.getName()}" not found!`)
        }
    }

    /**
     * @return {LayerGroup[]}
     */
    getLayers() {
        return this.layers
    }

    /**
     * @param {LayerGroup[]} layers
     */
    concatLayers(layers) {
        this.concat(
            this.layers,
            layers,
            (tItem, sItem) => tItem.getName() === sItem.getName()
        )
    }

}