import {TYPES} from '../pobject/AttributeType.js'
import NumberHelper from '../utils/NumberHelper.js'
import Vector from '../utils/Vector.js'
import Component from '../component/Component.js'
import ClientError from '../exception/type/ClientError.js'
import ClassHelper from '../utils/ClassHelper.js'
import MeshComponent from '../component/internal/MeshComponent.js'

export default class AnimationPlayer {

    /**
     * @param {Animation} animation
     * @param {World} world
     * @param {number} time
     * @param {Unit} unit
     */
    static play(animation, world, time, unit) {
        const componentRegistry = world.getComponentRegistry()
        animation.getProperties().forEach(property => {
            const childUnit = property.getChildName() && world.getUnitManager().findChildUnitByName(unit, property.getChildName())
            if (childUnit && childUnit.getUnitParentId() !== unit.getId()) {
                throw new ClientError(`"${childUnit.getName()}" is not a child of "${unit.getName()}"`)
            }
            const targetUnit = childUnit || unit
            const component = componentRegistry.getInstance(property.getComponentName())
            if ((component instanceof Component)) {
                const componentClass = component.constructor
                const prevFrame = property.tryGetPrevAt(time)
                const nextFrame = property.tryGetNextAt(time)
                const componentInstance = targetUnit.findComponentByClass(componentClass)
                if (componentInstance) {
                    const type = componentInstance.getType(property.getAttributeName())
                    const newValue = this.interpolate(componentClass, type, time, prevFrame, nextFrame)
                    if (prevFrame) {
                        if (!_.isEqual(targetUnit.findComponentByClass(componentClass).getValue(property.getAttributeName()), newValue)) {
                            const setter = ClassHelper.getSetter(componentInstance, property.getAttributeName())
                            componentInstance[setter](newValue)
                            if (componentInstance instanceof MeshComponent) {
                                componentInstance.setGenerated(false)
                            }
                        }
                    }
                }
            } else {
                throw new ClientError(`Cannot set Animation : "${component ? component.constructor.name : component}" must be a Component`)
            }
        })
    }

    /**
     * @param {Component} component
     * @param {number} type
     * @param {number} time
     * @param {KeyFrame} prevFrame
     * @param {KeyFrame} nextFrame
     * @return {*}
     */
    static interpolate(component, type, time, prevFrame, nextFrame) {
        const prevTime = prevFrame ? prevFrame.getTime() : time
        const nextTime = nextFrame ? nextFrame.getTime() : prevTime
        const prevValue = prevFrame ? prevFrame.getAttribute().getAttrValue() : null
        const nextValue = nextFrame ? nextFrame.getAttribute().getAttrValue() : prevValue
        if (prevValue === nextValue) {
            return _.cloneDeep(prevValue)
        } else if (prevFrame) {
            if (type === TYPES.NUMBER || type === TYPES.RANGE) {
                return NumberHelper.interpolate(time, prevTime, prevValue, nextTime, nextValue)
            } else if (type === TYPES.VECTOR) {
                return Vector.interpolate(time, prevTime, prevValue, nextTime, nextValue)
            } else if (type === TYPES.BOOLEAN) {
                return prevValue
            } else {
                return prevValue
            }
        }
    }

}