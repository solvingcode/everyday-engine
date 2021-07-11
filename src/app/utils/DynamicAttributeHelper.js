import DynamicAttribute from '../pobject/DynamicAttribute.js'
import {TYPES} from '../pobject/AttributeType.js'
import ClientError from '../exception/type/ClientError.js'
import Layout from '../layout/Layout.js'

export default class DynamicAttributeHelper {

    /**
     * @param {string} name
     * @param {string} type
     * @param {*} defaultValue
     */
    static create(name, type, defaultValue = null) {
        const componentAttribute = new DynamicAttribute()
        componentAttribute.setAttrName(name)
        componentAttribute.setAttrType(type)
        componentAttribute.setAttrValue(defaultValue)
        return componentAttribute
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @param {string} type
     * @param {*} defaultValue
     */
    static add(target, name, type, defaultValue = null) {
        if (!this.tryGet(target, name)) {
            target.push(this.create(name, type, defaultValue))
        } else {
            throw new ClientError(`Attribute ${name} already defined`)
        }
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {DynamicAttribute}
     */
    static get(target, name) {
        const componentAttribute = this.tryGet(target, name)
        if (!componentAttribute) {
            throw new ClientError(`Attribute ${name} not supported`)
        }
        return componentAttribute
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {DynamicAttribute}
     */
    static tryGet(target, name) {
        return target.find(attribute => attribute.getAttrName() === name)
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @param {*} value
     */
    static setValue(target, name, value) {
        let attribute = this.get(target, name)
        attribute.setAttrValue(value)
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {*}
     */
    static getValue(target, name) {
        return this.get(target, name).getAttrValue()
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {number}
     */
    static getId(target, name) {
        return this.get(target, name).getId()
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {number} id
     * @return {DynamicAttribute}
     */
    static findById(target, id) {
        return target.find(attribute => attribute.getId() === id)
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {DynamicAttribute}
     */
    static findByName(target, name) {
        return target.find(attribute => attribute.getAttrName() === name)
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {number} index
     * @return {DynamicAttribute}
     */
    static findByIndex(target, index) {
        return target.find((attribute, attrIndex) => attrIndex === index)
    }

    /**
     * @param {string|number|boolean} value
     * @return {string}
     */
    static findTypeOfValue(value) {
        if (_.isString(value)) {
            return TYPES.STRING
        } else if (_.isNumber(value)) {
            return TYPES.NUMBER
        } else if (_.isBoolean(value)) {
            return TYPES.BOOLEAN
        }
        return TYPES.ANY
    }

    /**
     * @param {World} world
     * @param {UnitSelector} unitSelector
     * @param {DynamicAttribute} attribute
     * @param {boolean} isListInstances
     * @param {string|null} pBindName
     */
    static getFormFields(world, unitSelector, attribute, isListInstances = true, pBindName = null) {
        const bindName = pBindName || attribute.getAttrName()
        const dynamicAttribute = !pBindName
        let formField
        if (attribute.getAttrType() === TYPES.UNIT) {
            formField = {
                bind: bindName,
                label: `${attribute.getAttrName()} (Self) `,
                type: Layout.form.CHECKBOX,
                dynamicAttribute
            }
        }else if (attribute.getAttrType() === TYPES.COMPONENT) {
            const components = world.getComponentRegistry().getInstances()
                .map(component => ({
                    value: component.getName(),
                    label: component.getName()
                }))
            formField = {
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: components,
                dynamicAttribute
            }
        }else if (attribute.getAttrType() === TYPES.COMPONENT_INSTANCE && isListInstances) {
            const selectedUnit = unitSelector.getFirstSelected(world)
            const componentInstances = selectedUnit.getComponents()
                .filter(component => !component.isHidden() && !component.isUnique())
                .map(component => ({
                    value: component.getId(),
                    label: component.getName()
                }))
            formField = {
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: componentInstances,
                dynamicAttribute
            }
        }else if (attribute.getAttrType() === TYPES.BOOLEAN) {
            formField = {
                bind: bindName,
                label: `${attribute.getAttrName()} `,
                type: Layout.form.CHECKBOX,
                dynamicAttribute
            }
        }else{
            formField = {
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.TEXT,
                dynamicAttribute
            }
        }
        return formField
    }

    /**
     * @param {string} value
     * @param {string} type
     * @param {World} world
     * @return {*}
     */
    static getValueByType(value, type, world) {
        let newValue = value
        switch (type) {
            case TYPES.UNIT:
                newValue = world.findUnitById(parseInt(value))
                if (!newValue) {
                    throw new ClientError(`${this.constructor.name}: Unit "${value}" not found`)
                }
                break
            case TYPES.ANIMATION:
                newValue = world.getAnimationManager().findById(parseInt(value))
                if (!newValue) {
                    throw new ClientError(`${this.constructor.name}: Animation "${value}" not found`)
                }
                break
            case TYPES.COMPONENT:
                const component = world.getComponentRegistry().getInstance(value)
                if (!component || !component.constructor) {
                    throw new ClientError(`${this.constructor.name}: Component "${value}" not found`)
                }
                newValue = component.constructor
                break
            case TYPES.COMPONENT_INSTANCE:
                const componentInstance = world.getUnitManager().findComponentById(parseInt(value))
                if (!componentInstance) {
                    throw new ClientError(`${this.constructor.name}: Component Instance "${value}" not found`)
                }
                newValue = componentInstance
                break
            case TYPES.NUMBER:
                newValue = parseFloat(value)
                break
            case TYPES.BOOLEAN:
                newValue = value === 'true' || value === '1' || value === true
                break
        }
        return newValue
    }

}