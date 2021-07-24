import ClientError from '../exception/type/ClientError.js'
import Timeline from './Timeline.js'

export default class Animation {

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    name

    /**
     * @type {KeyFrame[]}
     */
    frames

    /**
     * @type {number}
     */
    samples

    /**
     * @type {boolean}
     */
    playing

    /**
     * @type {Timeline[]}
     */
    timeline

    /**
     * @type {number}
     */
    time

    /**
     * @type {number}
     */
    loopTimes

    /**
     * @type {number}
     */
    lengthSecond

    /**
     * @param {number} id
     * @param {string} name
     */
    constructor(id, name) {
        this.id = id
        this.name = name
        this.frames = []
        this.timeline = []
        this.samples = 10
        this.playing = false
        this.time = 0
        this.loopTimes = 0
        this.lengthSecond = 1
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
     * @param {KeyFrame[]} frames
     */
    setFrames(frames) {
        this.frames = frames
        this.updateTimeline()
    }

    /**
     * @return {KeyFrame[]}
     */
    getFrames() {
        return this.frames
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
     * @param {number} time
     * @return {KeyFrame}
     */
    getAt(time) {
        const frame = this.tryGetAt(time)
        if (!frame) {
            throw new ClientError(`No keyframe found at ${time}`)
        }
        return frame
    }

    /**
     * @param {KeyFrame} frame
     */
    addFrame(frame) {
        const timeline = this.timeline[frame.getTime()]
        if (timeline) {
            if (!timeline.getFrame()) {
                timeline.setFrame(frame)
                this.frames.push(frame)
                this.updateTimeline()
            } else {
                throw new ClientError(`Cannot add frame at "${frame.getTime()}": Frame already exist`)
            }
        } else {
            throw new ClientError(`Cannot add frame at "${frame.getTime()}": Out of range`)
        }
    }

    /**
     * @param {KeyFrame} frame
     */
    deleteFrame(frame) {
        const timeline = this.timeline[frame.getTime()]
        const frameIndex = this.frames.findIndex(pFrame => pFrame === frame)
        if (timeline) {
            if (timeline.getFrame()) {
                timeline.setFrame(null)
                this.frames.splice(frameIndex, 1)
                this.updateTimeline()
            } else {
                throw new ClientError(`Cannot delete frame at "${frame.getTime()}": No frame exist`)
            }
        } else {
            throw new ClientError(`Cannot delete frame at "${frame.getTime()}": Out of range`)
        }
    }

    /**
     * @param {number} time
     * @return {KeyFrame}
     */
    tryGetAt(time) {
        return this.frames.find(frame => frame.getTime() === time)
    }

    /**
     * @return {Timeline}
     */
    getSelectedTimeline() {
        return this.timeline.find(pTimeline => pTimeline.isSelected())
    }

    /**
     * @return {number}
     */
    getSelectedTime() {
        return this.timeline.findIndex(pTimeline => pTimeline === this.getSelectedTimeline())
    }

    updateTimeline() {
        const times = [...Array(Math.ceil(this.getSamples() * this.getLengthSecond())).keys()]
        this.timeline = times.map(time => new Timeline(this.tryGetAt(time)))
    }

    /**
     * @param {number} frameTime
     */
    selectTimeline(frameTime) {
        this.timeline.forEach(pTimeline => {
            const frame = pTimeline.getFrame()
            if (frame && frame.getTime() === frameTime) {
                pTimeline.select()
            } else {
                pTimeline.unselect()
            }
        })
    }

    /**
     * @return {Timeline[]}
     */
    getTimeline() {
        return this.timeline
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
     * @return {number}
     */
    getFrameTime() {
        return this.getFrameTimeAt(this.time)
    }

    /**
     * @param {number} time
     * @return {number}
     */
    getFrameTimeAt(time){
        return Math.floor(time)
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
     * @return {number}
     */
    getNextTimeFrame(){
        return this.getNextTimeFrameAt(this.getTime())
    }

    /**
     * @param {number} time
     * @return {number}
     */
    getNextTimeFrameAt(time){
        const newTime = time + 1
        return newTime % this.getFrames().length
    }

    goToNextTimeFrame(){
        this.setTime(this.getNextTimeFrame())
    }

    /**
     * @param {number} deltaTime
     * @param {number} time
     * @return {{time: number, loopTimes: number, frame: KeyFrame}}
     */
    playAt(deltaTime, time){
        const expectedFrameTime = this.getLengthSecond() / this.getSamples()
        const newTime = time + deltaTime / expectedFrameTime
        const timeFrame = newTime % this.getFrames().length
        const loopTimes = Math.floor(newTime / this.getFrames().length)
        return {
            time: timeFrame || 0,
            loopTimes,
            frame: this.tryGetAt(this.getFrameTimeAt(time))
        }
    }

    /**
     * @param {number} deltaTime
     * @return {KeyFrame}
     */
    play(deltaTime) {
        const playInfo = this.playAt(deltaTime, this.getTime())
        this.loopTimes += playInfo.loopTimes
        this.setTime(playInfo.time)
        this.selectTimeline(this.getFrameTime())
        return playInfo.frame
    }

}