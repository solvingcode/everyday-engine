import ClientError from '../exception/type/ClientError.js'
import AnimationProperty from './AnimationProperty.js'
import Maths from '../utils/Maths.js'
import AnimationData from '../project/data/AnimationData.js'
import KeyFrame from './KeyFrame.js'

export default class Animation extends AnimationData {

    /**
     * @param {number} id
     * @param {string} name
     */
    constructor(id, name) {
        super()
        this.id = id
        this.name = name
        this.samples = 10
        this.duration = 0
        this.lengthSecond = 1
    }

    /**
     * @param {number|string} samples
     */
    setSamples(samples) {
        super.setSamples(samples)
    }

    /**
     * @param {number} time
     * @return {KeyFrame[]}
     */
    getAt(time) {
        const frames = this.tryGetAt(time)
        if (!frames.length) {
            throw new ClientError(`No keyframe found at ${time}`)
        }
        return frames
    }

    /**
     * @param {number} time
     * @return {KeyFrame[]}
     */
    tryGetAt(time) {
        return this.getProperties().map(property => property.tryGetAt(time)).filter(frame => frame)
    }

    /**
     * @param {string} componentName
     * @param {string} attributeName
     * @param {Unit} childUnit
     * @return {AnimationProperty}
     */
    getProperty(componentName, attributeName, childUnit) {
        return this.getProperties().find(prop => prop.getComponentName() === componentName &&
            prop.getAttributeName() === attributeName && prop.getChildName() === (childUnit ? childUnit.getName() : null))
    }

    /**
     * @param {string} componentName
     * @param {string} attributeName
     * @param {Unit} childUnit
     */
    addProperty(componentName, attributeName, childUnit) {
        const childName = childUnit ? childUnit.getName() : null;
        const newProperty = new AnimationProperty(Maths.generateId(), childName, componentName, attributeName)
        this.getProperties().push(newProperty)
        return newProperty
    }

    /**
     * @param {number} time
     * @param {Unit} childUnit
     * @param {string} componentName
     * @param {string} attributeName
     * @param {DynamicAttribute} attribute
     */
    setFrame(time, childUnit, componentName, attributeName, attribute) {
        const property = this.getProperty(componentName, attributeName, childUnit) ||
            this.addProperty(componentName, attributeName, childUnit)
        if (time < this.getSamples()) {
            const existFrame = property.tryGetAt(time)
            if (existFrame) {
                existFrame.setAttribute(attribute)
            } else {
                const newFrame = new KeyFrame()
                newFrame.setTime(time)
                newFrame.setAttribute(attribute)
                property.addFrame(newFrame)
            }
        } else {
            throw new ClientError(`Cannot add frame at "${time}": Out of range`)
        }
    }

    /**
     * @param {KeyFrame} frame
     */
    deleteFrame(frame) {
        this.getProperties().forEach(pProperty => pProperty.deleteFrame(frame))
    }

    /**
     * @return {KeyFrame[]}
     */
    getFrames(){
        return this.getProperties().reduce((list, property) => [...list, ...property.getFrames()], [])
    }

    /**
     * @return {KeyFrame[]}
     */
    getSelectedFrames(){
        return this.getFrames().filter(frame => frame.getSelected())
    }

    /**
     * @return {KeyFrame}
     */
    getSelectedFrame() {
        return this.getProperties().reduce(
            (frame, animationProperty) => animationProperty.getSelectedFrame(), null)
    }

}