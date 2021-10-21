import Data from './Data.js'

export default class AnimationData extends Data {

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    name

    /**
     * @type {AnimationProperty[]}
     */
    properties

    /**
     * @type {number}
     */
    samples

    /**
     * @type {number}
     */
    duration

    /**
     * @type {number}
     */
    lengthSecond

    /**
     * @type {number}
     */
    controllerAssetId

    constructor() {
        super()
        this.properties = []
    }

    /**
     * @param {number} id
     */
    setId(id) {
        this.id = id
    }

    /**
     * @return {number}
     */
    getId() {
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @param {number} controllerAssetId
     */
    setControllerAssetId(controllerAssetId) {
        this.controllerAssetId = controllerAssetId
    }

    /**
     * @return {number}
     */
    getControllerAssetId() {
        return this.controllerAssetId
    }

    /**
     * @param {AnimationProperty[]} properties
     */
    setProperties(properties) {
        this.properties = properties
    }

    /**
     * @return {AnimationProperty[]}
     */
    getProperties() {
        return this.properties
    }

    /**
     * @param {number|string} samples
     */
    setSamples(samples) {
        this.samples = parseInt(samples)
    }

    /**
     * @return {number}
     */
    getSamples() {
        return this.samples
    }

    /**
     * @param {number|string} duration
     */
    setDuration(duration) {
        this.duration = parseInt(duration)
    }

    /**
     * @return {number}
     */
    getDuration() {
        return this.duration
    }

    /**
     * @param {number} lengthSecond
     */
    setLengthSecond(lengthSecond) {
        this.lengthSecond = lengthSecond
    }

    /**
     * @return {number}
     */
    getLengthSecond() {
        return this.lengthSecond
    }

    /**
     * @param {AnimationProperty[]} properties
     */
    concatProperties(properties){
        this.setProperties(properties)
    }

}