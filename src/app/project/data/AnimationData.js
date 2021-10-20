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
     * @type {boolean}
     */
    playing

    /**
     * @type {number}
     */
    time

    /**
     * @type {number}
     */
    selectedTime

    /**
     * @type {number}
     */
    duration

    /**
     * @type {number}
     */
    loopTimes

    /**
     * @type {number}
     */
    lengthSecond

    /**
     * @type {number}
     */
    assetId

    /**
     * @type {number}
     */
    controllerAssetId

    /**
     * @type {boolean}
     */
    selected

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
     * @return {boolean}
     */
    getSelected(){
        return this.selected
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
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
        this.updateTimeline()
    }

    /**
     * @return {number}
     */
    getSamples() {
        return this.samples
    }

    /**
     * @param {number|string} loopTimes
     */
    setLoopTimes(loopTimes) {
        this.loopTimes = parseInt(loopTimes)
    }

    /**
     * @return {number}
     */
    getLoopTimes() {
        return this.loopTimes
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
     * @param {boolean} playing
     */
    setPlaying(playing) {
        this.playing = playing
    }

    /**
     * @return {boolean}
     */
    isPlaying() {
        return this.playing
    }

    /**
     * @return {number}
     */
    getSelectedTime() {
        return this.selectedTime
    }

    /**
     * @param {number} selectedTime
     */
    setSelectedTime(selectedTime){
        this.selectedTime = selectedTime
    }

    /**
     * @return {number}
     */
    getTime() {
        return this.time
    }

    /**
     * @param {number} time
     */
    setTime(time) {
        this.time = time
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
     * @param {number} assetId
     */
    setAssetId(assetId){
        this.assetId = assetId
    }

    /**
     * @return {number}
     */
    getAssetId(){
        return this.assetId
    }

}