import ListMenuItem from '../../list/ListMenuItem.js'
import EditAnimationTimelineElementMenuItem from './EditAnimationTimelineElementMenuItem.js'
import World from '../../../../world/World.js'
import UnitSelector from '../../../../selector/UnitSelector.js'

export default class EditAnimationTimelineListMenuItem extends ListMenuItem {

    /**
     * @param {MenuItem} parent
     * @param {Animation} animation
     * @param {AnimationComponent} animationComponent
     * @param {number} time
     */
    constructor(parent, animation, animationComponent, time = 0) {
        super({
            stateCode: '',
            name: '',
            zone: parent.zone
        }, parent)
        this.data = {animationComponent, animation, time, timeline: this.getTimeline(animationComponent, animation)}
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
        const newTimeline = this.getTimeline(this.data.animationComponent, this.data.animation)
        if (!_.isEqual(this.data.timeline, newTimeline)) {
            this.data.timeline = newTimeline
        }
        return this.data.timeline
    }

    /**
     * @todo Need optimization
     * @param {AnimationComponent} animationComponent
     * @param {Animation} animation
     * @return {PropertyTimeline[]}
     */
    getTimeline(animationComponent, animation) {
        const properties = [null, ...animation.getProperties()]
        const samples = animation.getSamples()
        return properties.map(property => new PropertyTimeline(
            property,
            Array.from({length: animation.getSamples()})
                .map((v, index) => {
                    const second = Math.floor(index / samples)
                    const secondDivide = index % samples
                    return new TimeDuration(
                        index,
                        `${second}:${secondDivide < 10 ? '0' : ''}${secondDivide}`,
                        property,
                        animation,
                        animationComponent,
                        property && property.tryGetAt(index),
                        Math.floor(animationComponent.getTime()) === index)
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
        if (this.property) {
            const world = World.get()
            const unitRecording = world.getAnimationManager().getUnitRecording() || UnitSelector.get().getFirstSelected(World.get())
            const unit = world.getUnitManager().findChildUnitByName(unitRecording, this.property.getChildName())
            return `${unit ? `${unit.getName()} - ` : ''}${this.property.getComponentName()} - ${this.property.getAttributeName()}`
        }
        return ''
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
     * @type {AnimationComponent}
     */
    animationComponent

    /**
     * @type {AnimationProperty}
     */
    property

    /**
     * @type {KeyFrame}
     */
    frame

    /**
     * @type {boolean}
     */
    selected

    /**
     * @param {number} time
     * @param {string} name
     * @param {AnimationProperty} property
     * @param {Animation} animation
     * @param {AnimationComponent} animationComponent
     * @param {KeyFrame} frame
     * @param {boolean} selected
     */
    constructor(time, name, property, animation,
                animationComponent, frame, selected) {
        this.time = time
        this.name = name
        this.property = property
        this.animation = animation
        this.animationComponent = animationComponent
        this.selected = selected
        this.frame = frame
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
     * @return {KeyFrame}
     */
    getFrame() {
        return this.frame
    }

    /**
     * @return {Animation}
     */
    getAnimation() {
        return this.animation
    }

    /**
     * @return {AnimationComponent}
     */
    getAnimationComponent() {
        return this.animationComponent
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

    /**
     * @param {boolean} selected
     */
    setSelected(selected) {
        this.selected = selected
    }

}