import DynamicAttribute from '../pobject/DynamicAttribute.js'
import {TYPES} from '../pobject/AttributeType.js'
import ClientError from '../exception/type/ClientError.js'
import Layout from '../layout/Layout.js'
import Component from '../component/Component.js'

export default class DynamicAttributeHelper {

    /**
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     */
    static create(name, type, defaultValue = null, rule = null) {
        return new DynamicAttribute(name, type, defaultValue, rule)
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     */
    static add(target, name, type, defaultValue = null, rule = null) {
        if (!this.tryGet(target, name)) {
            target.push(this.create(name, type, defaultValue, rule))
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
    static getType(target, name) {
        return this.get(target, name).getAttrType()
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @return {*}
     */
    static getRule(target, name) {
        return this.get(target, name).getAttrRule()
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
     * @return {number}
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
     * @return {FormField[]}
     */
    static getFormFields(world, unitSelector, attribute, isListInstances = true, pBindName = null) {
        const bindName = pBindName || attribute.getAttrName()
        const dynamicAttribute = !pBindName
        let formField
        if (attribute.getAttrType() === TYPES.UNIT) {
            if(isListInstances){
                const units = world.getUnitManager().getUnits()
                    .map(unit => ({
                        value: unit.getId(),
                        label: unit.getName()
                    }))
                formField = [{
                    bind: bindName,
                    label: attribute.getAttrName(),
                    type: Layout.form.DROPDOWN,
                    list: units,
                    dynamicAttribute
                }]
            }else{
                formField = [{
                    bind: bindName,
                    label: `${attribute.getAttrName()} (Self) `,
                    type: Layout.form.CHECKBOX,
                    dynamicAttribute
                }]
            }
        } else if (attribute.getAttrType() === TYPES.COMPONENT) {
            const components = world.getComponentRegistry().getInstances()
                .map(component => ({
                    value: component.getName(),
                    label: component.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: components,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.MATERIAL) {
            const materials = world.getMaterialRegistry().getInstances()
                .map(material => ({
                    value: material.getName(),
                    label: material.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: materials,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.COMPONENT_INSTANCE && isListInstances) {
            const selectedUnit = unitSelector.getFirstSelected(world)
            const componentInstances = selectedUnit.getComponents()
                .filter(component => !component.isHidden() && !component.isUnique())
                .map(component => ({
                    value: component.getId(),
                    label: component.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: componentInstances,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.MASK_GROUP_INSTANCE && isListInstances) {
            const listMaskGroups = world
                .getPreference().getMaskGroup().getMasks()
                .map(maskGroup => ({
                    value: maskGroup.getId(),
                    label: maskGroup.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: listMaskGroups,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.AUDIO && isListInstances) {
            const listAudios = world.getAssetsManager().getAudioAssets()
                .map(audio => ({
                    value: audio.getId(),
                    label: audio.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: listAudios,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.BOOLEAN && isListInstances) {
            formField = [{
                bind: bindName,
                label: `${attribute.getAttrName()} `,
                type: Layout.form.CHECKBOX,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.COLOR && isListInstances) {
            formField = [{
                bind: bindName,
                label: `${attribute.getAttrName()} `,
                type: Layout.form.COLOR,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.RANGE && isListInstances) {
            const rule = attribute.getAttrRule()
            formField = [{
                bind: bindName,
                label: `${attribute.getAttrName()} `,
                type: Layout.form.RANGE,
                options: {
                    min: rule[0],
                    max: rule[1],
                    step: rule[2]
                },
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.VECTOR && isListInstances) {
            formField = [
                {
                    bind: `${bindName}.x`,
                    label: `${attribute.getAttrName()} X`,
                    type: Layout.form.NUMBER,
                    dynamicAttribute
                },
                {
                    bind: `${bindName}.y`,
                    label: `${attribute.getAttrName()} Y`,
                    type: Layout.form.NUMBER,
                    dynamicAttribute
                }
            ]
        } else if (attribute.getAttrType() === TYPES.SIZE && isListInstances) {
            formField = [
                {
                    bind: `${bindName}.width`,
                    label: `${attribute.getAttrName()} Width`,
                    type: Layout.form.NUMBER,
                    dynamicAttribute
                },
                {
                    bind: `${bindName}.height`,
                    label: `${attribute.getAttrName()} Height`,
                    type: Layout.form.NUMBER,
                    dynamicAttribute
                }
            ]
        } else if (attribute.getAttrType() === TYPES.STYLE && isListInstances) {
            formField = [
                {
                    bind: `${bindName}.color`,
                    label: `Border Color`,
                    type: Layout.form.COLOR,
                    dynamicAttribute
                },
                {
                    bind: `${bindName}.colorOpacity`,
                    label: `Border opacity`,
                    type: Layout.form.RANGE,
                    options: {
                        min: 0,
                        max: 1,
                        step: 0.01
                    },
                    dynamicAttribute
                },
                {
                    bind: `${bindName}.fillColor`,
                    label: `Fill Color`,
                    type: Layout.form.COLOR,
                    dynamicAttribute
                },
                {
                    bind: `${bindName}.fillColorOpacity`,
                    label: `Fill opacity`,
                    type: Layout.form.RANGE,
                    options: {
                        min: 0,
                        max: 1,
                        step: 0.01
                    },
                    dynamicAttribute
                },
                {
                    bind: `${bindName}.opacity`,
                    label: `Opacity`,
                    type: Layout.form.RANGE,
                    options: {
                        min: 0,
                        max: 1,
                        step: 0.01
                    },
                    dynamicAttribute
                }
            ]
        } else if (attribute.getAttrType() === TYPES.NUMBER && isListInstances) {
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.NUMBER,
                dynamicAttribute
            }]
        }else {
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.TEXT,
                dynamicAttribute
            }]
        }
        return formField
    }

    /**
     * @param {*} value
     * @param {string} type
     * @param {World} world
     * @param {Unit} unit
     * @param {ScriptComponent} scriptComponent
     * @return {*}
     */
    static getValueByType(value, type, world, unit, scriptComponent) {
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
                const componentInstance = value === '[self]'
                    ? scriptComponent
                    : world.getUnitManager().findComponentById(parseInt(value))
                if (!componentInstance) {
                    throw new ClientError(`${this.constructor.name}: Component Instance "${value}" not found`)
                }
                newValue = componentInstance
                break
            case TYPES.MASK_GROUP_INSTANCE:
                const maskGroupInstance = world.getPreference().getMaskGroup().find(parseInt(value))
                if (!maskGroupInstance) {
                    throw new ClientError(`${this.constructor.name}: Mask Group Instance "${value}" not found`)
                }
                newValue = maskGroupInstance
                break
            case TYPES.AUDIO:
                const audio = world.getAssetsManager().findAssetAudioById(value)
                if (!audio) {
                    throw new ClientError(`${this.constructor.name}: Audio "${value}" not found`)
                }
                newValue = audio.getType()
                break
            case TYPES.ARRAY | TYPES.ANY:
                if (!_.isArray(value)) {
                    throw new ClientError(`${this.constructor.name}: "${value}" is not an array`)
                }
                newValue = value
                break
            case TYPES.ARRAY | TYPES.COMPONENT_INSTANCE:
                if (!_.isArray(value) || !value.every(eArray => eArray instanceof Component)) {
                    throw new ClientError(`${this.constructor.name}: "${value}" is not an array`)
                }
                newValue = value
                break
            case TYPES.ARRAY | TYPES.DYNAMIC_ATTRIBUTE:
                if (!_.isArray(value) || !value.every(eArray => eArray instanceof DynamicAttribute)) {
                    throw new ClientError(`${this.constructor.name}: "${value}" is not an array of DynamicAttribute`)
                }
                newValue = value
                break
            case TYPES.DYNAMIC_ATTRIBUTE:
                if (!(value instanceof DynamicAttribute)) {
                    throw new ClientError(`${this.constructor.name}: "${value}" is not a DynamicAttribute`)
                }
                newValue = value
                break
            case TYPES.NUMBER:
                newValue = parseFloat(value)
                break
            case TYPES.RANGE:
                newValue = parseFloat(value)
                break
            case TYPES.BOOLEAN:
                newValue = value === 'true' || value === '1' || value === true
                break
        }
        return newValue
    }

}