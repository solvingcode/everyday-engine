import ComponentData from './ComponentData.js'
import Data from './Data.js'
import Maths from '../../utils/Maths.js'
import ClientError from '../../exception/type/ClientError.js'
import CommonUtil from '../../utils/CommonUtil.js'

export default class UnitData extends Data {

    /**
     * @type {number}
     */
    id
    /**
     * @type {string}
     */
    name
    /**
     * @type {number}
     */
    maskGroupId
    /**
     * @type {number|null}
     */
    unitParentId
    /**
     * @type {ComponentData[]}
     */
    components

    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name || 'Custom Component'
        this.components = []
        this.unitParentId = null
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
     * @param {number} maskGroupId
     */
    setMaskGroupId(maskGroupId) {
        this.maskGroupId = maskGroupId
    }

    /**
     * @return {number}
     */
    getMaskGroupId() {
        return this.maskGroupId
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
     * @param {number} unitParentId
     */
    setUnitParentId(unitParentId) {
        this.unitParentId = unitParentId
    }

    /**
     * @return {number}
     */
    getUnitParentId() {
        return this.unitParentId
    }

    /**
     * @param {ComponentData[]} components
     */
    setComponents(components) {
        this.components = components
    }

    /**
     * @return {ComponentData[]}
     */
    getComponents() {
        return this.components
    }

    /**
     * @template T
     * @param {T} type
     * @return {T}
     */
    getComponent(type) {
        if (!(type.prototype instanceof ComponentData)) {
            throw new ClientError(`Component type must be instance of ComponentData (${type.name} given)`)
        }
        if (!type.prototype.isUnique()) {
            throw new ClientError(`Component type ${type.name} is not unique (use findComponentsByClass instead)`)
        }
        return this.getComponents().find(component => component.constructor === type)
    }

    /**
     * @template T
     * @param {T} type
     * @return {T}
     */
    findComponentByClass(type) {
        return this.getComponents()
            .find(component => component instanceof type)
    }

    /**
     * @template T
     * @param {T} type
     * @return {T[]}
     */
    findComponentsByClass(type) {
        return this.getComponents()
            .filter(component => component instanceof type)
    }

    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */
    hasComponentsByClasses(componentClasses) {
        for (const iComponentClass in componentClasses) {
            const componentClass = componentClasses[iComponentClass]
            if (componentClasses.hasOwnProperty(iComponentClass) && !this.findComponentsByClass(componentClass).length) {
                return false
            }
        }
        return true
    }

    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */
    hasAnyComponentsByClasses(componentClasses) {
        for (const iComponentClass in componentClasses) {
            const componentClass = componentClasses[iComponentClass]
            if (componentClasses.hasOwnProperty(iComponentClass) && this.findComponentsByClass(componentClass).length) {
                return true
            }
        }
        return false
    }

    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */
    hasComponents(componentClasses) {
        for (const iComponentClass in componentClasses) {
            const componentClass = componentClasses[iComponentClass]
            if (componentClasses.hasOwnProperty(iComponentClass) && !this.getComponent(componentClass)) {
                return false
            }
        }
        return true
    }

    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */
    hasEnabledComponents(componentClasses) {
        for (const iComponentClass in componentClasses) {
            const componentClass = componentClasses[iComponentClass]
            if (componentClasses.hasOwnProperty(iComponentClass)) {
                const component = this.getComponent(componentClass)
                if (!component || !component.isEnabled()) {
                    return false
                }
            }
        }
        return true
    }

    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */
    hasAnyComponents(componentClasses) {
        for (const iComponentClass in componentClasses) {
            const componentClass = componentClasses[iComponentClass]
            if (componentClasses.hasOwnProperty(iComponentClass) && this.getComponent(componentClass)) {
                return true
            }
        }
        return false
    }

    /**
     * @template T
     * @param {T} componentClass
     * @return {T}
     */
    createComponent(componentClass) {
        if (!componentClass.prototype.isUnique() || !this.getComponent(componentClass)) {
            const component = new componentClass()

            CommonUtil.setupName(component, component.getName(),
                (name) => component.setName(name), (name) => this.findComponentByName(name))

            this.components.push(component)
            return component
        } else {
            throw new ClientError(`Component ${componentClass.name} already created!`)
        }
    }

    /**
     * @param {Component[]} componentClasses
     * @return {Component[]}
     */
    createComponents(componentClasses) {
        return componentClasses.map(componentClass => this.createComponent(componentClass))
    }

    /**
     * @param {number} componentId
     */
    deleteComponent(componentId) {
        const iComponent = this.findIndexComponentById(componentId)
        this.components.splice(iComponent, 1)
    }

    /**
     * @param {number} componentId
     * @return {number}
     */
    findIndexComponentById(componentId) {
        return this.components.findIndex(component => component.id === componentId)
    }

    /**
     * @param {number} componentId
     * @return {Component}
     */
    findComponentById(componentId) {
        return this.components.find(component => component.id === componentId)
    }

    /**
     * @param {string} name
     * @return {Component}
     */
    findComponentByName(name) {
        return this.components.find(component => component.getName() === name)
    }

    /**
     * @param {ComponentData[]} components
     */
    concatComponents(components) {
        this.concat(
            this.components,
            components,
            (tItem, sItem) => tItem.getName() === sItem.getName()
        )
    }

}