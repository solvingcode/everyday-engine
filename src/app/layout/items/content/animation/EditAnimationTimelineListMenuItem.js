import ListMenuItem from '../../list/ListMenuItem.js'
import EditAnimationTimelineElementMenuItem from './EditAnimationTimelineElementMenuItem.js'

export default class EditAnimationTimelineListMenuItem extends ListMenuItem {

    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     * @param {number} time
     */
    constructor(parent, animation, time = 0) {
        super({
            stateCode: '',
            name: '',
            zone: parent.zone
        })
        this.data = {animation, time, timeline: this.getTimeline(animation)}
        this.parent = parent
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return EditAnimationTimelineElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        const newTimeline = this.getTimeline(this.data.animation)
        if (!_.isEqual(this.data.timeline, newTimeline)) {
            this.data.timeline = newTimeline
        }
        return this.data.timeline
    }

    /**
     * @param {Animation} animation
     * @return {PropertyTimeline[]}
     */
    getTimeline(animation) {
        const properties = [null, ...animation.getProperties()]
        const samples = animation.getSamples()
        return properties.map(property => new PropertyTimeline(
            property,
            Array.from({length: animation.getDuration()})
                .map((v, index) => {
                    const second = Math.floor(index / samples)
                    const secondDivide = index % samples
                    return new TimeDuration(
                        index,
                        `${second}:${secondDivide < 10 ? '0' : ''}${secondDivide}`,
                        property,
                        animation,
                        animation.getTime() === index)
                })))
    }

    /**
     * @override
     */
    getActions(bindObject) {
        return []
    }

}

class PropertyTimeline {

    /**
     * @type {AnimationProperty}
     */
    property

    /**
     * @type {TimeDuration[]}
     */
    timeline

    /**
     * @param {AnimationProperty} property
     * @param {TimeDuration[]} timeline
     */
    constructor(property, timeline) {
        this.property = property
        this.timeline = timeline
    }

    /**
     * @return {number}
     */
    getId() {
        return this.property ? this.property.getId() : 0
    }

    /**
     * @return {string}
     */
    getName() {
        return this.property ? this.property.getName() : ''
    }

    /**
     * @return {AnimationProperty}
     */
    getProperty() {
        return this.property
    }

    /**
     * @return {TimeDuration[]}
     */
    getTimeline() {
        return this.timeline
    }

    /**
     * @return {boolean}
     */
    isSelected() {
        return false
    }

}

class TimeDuration {

    /**
     * @type {number}
     */
    time

    /**
     * @type {string}
     */
    name

    /**
     * @type {Animation}
     */
    animation

    /**
     * @type {AnimationProperty}
     */
    property

    /**
     * @type {boolean}
     */
    selected

    /**
     * @param {number} time
     * @param {string} name
     * @param {AnimationProperty} property
     * @param {Animation} animation
     * @param {boolean} selected
     */
    constructor(time, name, property, animation, selected) {
        this.time = time
        this.name = name
        this.property = property
        this.animation = animation
        this.selected = selected
    }

    /**
     * @return {number}
     */
    getId() {
        return this.time
    }

    /**
     * @return {number}
     */
    getTime() {
        return this.time
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @return {Animation}
     */
    getAnimation(){
        return this.animation
    }

    /**
     * @return {AnimationProperty}
     */
    getProperty() {
        return this.property
    }

    /**
     * @return {boolean}
     */
    isSelected() {
        return this.selected
    }

}