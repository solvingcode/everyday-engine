import DynamicAttribute from '../pobject/DynamicAttribute.js'
import {TYPES, TYPES_NAME} from '../pobject/AttributeType.js'
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
            if (isListInstances) {
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
                    draggable: true,
                    dynamicAttribute
                }]
            } else {
                formField = [
                    {
                        bind: bindName,
                        label: `${attribute.getAttrName()}`,
                        type: Layout.form.TEXT,
                        dynamicAttribute
                    }
                ]
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
                draggable: true,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.IMAGE && isListInstances) {
            const listMeshes = world.getAssetsManager().getImageAssets()
                .map(mesh => ({
                    value: mesh.getId(),
                    label: mesh.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: listMeshes,
                draggable: true,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.UNIT_INSTANT && isListInstances) {
            const listUnitInstants = world.getAssetsManager().getUnitAssets()
                .map(instant => ({
                    value: instant.getId(),
                    label: instant.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: listUnitInstants,
                draggable: true,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.SCENE && isListInstances) {
            const listScenes = world.getSceneManager().getScenes()
                .map(scene => ({
                    value: scene.getId(),
                    label: scene.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: listScenes,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.FUNCTION) {
            const listFunctions = world.getFunctionRegistry().getCustomFunctionInstances()
                .map(func => ({
                    value: func.getName(),
                    label: func.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: listFunctions,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.FONT && isListInstances) {
            const listFonts = world.getAssetsManager().getFontAssets()
                .map(font => ({
                    value: font.getId(),
                    label: font.getName()
                }))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list: listFonts,
                draggable: true,
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
            const rule = attribute.getAttrRule() || []
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
                    bind: bindName,
                    label: attribute.getAttrName(),
                    type: Layout.form.GROUP,
                    items: [
                        {
                            bind: `${bindName}.x`,
                            label: `X`,
                            type: Layout.form.NUMBER,
                            size: 0.5,
                            dynamicAttribute
                        },
                        {
                            bind: `${bindName}.y`,
                            label: `Y`,
                            type: Layout.form.NUMBER,
                            size: 0.5,
                            dynamicAttribute
                        }
                    ]
                }
            ]
        } else if (attribute.getAttrType() === TYPES.SIZE && isListInstances) {
            formField = [
                {
                    bind: bindName,
                    label: attribute.getAttrName(),
                    type: Layout.form.GROUP,
                    items: [
                        {
                            bind: `${bindName}.width`,
                            label: `Width`,
                            type: Layout.form.NUMBER,
                            size: 0.5,
                            dynamicAttribute
                        },
                        {
                            bind: `${bindName}.height`,
                            label: `Height`,
                            type: Layout.form.NUMBER,
                            size: 0.5,
                            dynamicAttribute
                        }
                    ]
                }
            ]
        } else if (attribute.getAttrType() === TYPES.STYLE && isListInstances) {
            const listColors = world.getAssetsManager().getColorAssets()
                .map(color => ({
                    value: color.getId(),
                    label: color.getName()
                }))
            formField = [
                {
                    bind: `${bindName}.borderSize`,
                    label: `BorderSize`,
                    type: Layout.form.RANGE,
                    options: {
                        min: 0,
                        max: 20,
                        step: 1
                    },
                    dynamicAttribute
                },
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
                    bind: `${bindName}.gradientColorAssetId`,
                    label: 'Fill Gradient color',
                    type: Layout.form.DROPDOWN,
                    list: listColors,
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
                },
                {
                    bind: `${bindName}.shadowColor`,
                    label: `Shadow Color`,
                    type: Layout.form.COLOR,
                    dynamicAttribute
                },
                {
                    bind: `${bindName}.shadowPosition`,
                    label: 'Shadow Position',
                    type: Layout.form.GROUP,
                    items: [
                        {
                            bind: `${bindName}.shadowPosition.x`,
                            label: 'Y',
                            type: Layout.form.NUMBER,
                            size: 0.5,
                            dynamicAttribute
                        },
                        {
                            bind: `${bindName}.shadowPosition.y`,
                            label: 'Y',
                            type: Layout.form.NUMBER,
                            size: 0.5,
                            dynamicAttribute
                        }
                    ]
                },
                {
                    bind: `${bindName}.shadowBlur`,
                    label: `Shadow blur`,
                    type: Layout.form.NUMBER,
                    dynamicAttribute
                }
            ]
        } else if (attribute.getAttrType() === TYPES.LIST && isListInstances) {
            const rule = attribute.getAttrRule()
            const list = rule.map(eRule => ({value: eRule, label: eRule}))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.DROPDOWN,
                list,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === (TYPES.ARRAY | TYPES.LIST) && isListInstances) {
            const rule = attribute.getAttrRule()
            const list = rule.map(eRule => ({value: eRule, label: eRule}))
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.MULTI_BUTTON,
                list,
                dynamicAttribute
            }]
        } else if (attribute.getAttrType() === TYPES.NUMBER && isListInstances) {
            formField = [{
                bind: bindName,
                label: attribute.getAttrName(),
                type: Layout.form.NUMBER,
                dynamicAttribute
            }]
        } else {
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
                const unitManager = world.getUnitManager()
                newValue = unitManager.hasUnit(value) ? value : world.findUnitById(parseInt(value))
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
            case TYPES.UNIT_INSTANT:
                const assetManager = world.getAssetsManager()
                const unitInstant = assetManager.hasAsset(value) ? value : world.getAssetsManager().findAssetUnitById(value)
                if (!unitInstant) {
                    throw new ClientError(`${this.constructor.name}: Unit Instant "${value}" not found`)
                }
                newValue = unitInstant
                break
            case TYPES.SCENE:
                const sceneManager = world.getSceneManager()
                const scene = sceneManager.hasScene(value) ? value : sceneManager.findById(value)
                if (!scene) {
                    throw new ClientError(`${this.constructor.name}: Scene "${value}" not found`)
                }
                newValue = scene
                break
            case TYPES.FUNCTION:
                const func = world.getFunctionRegistry().getInstance(value)
                if (!func) {
                    throw new ClientError(`${this.constructor.name}: Function "${value}" not found`)
                }
                newValue = func
                break
            case TYPES.FONT:
                const font = world.getAssetsManager().findAssetFontById(value)
                if (!font) {
                    throw new ClientError(`${this.constructor.name}: Font "${value}" not found`)
                }
                newValue = font.getType()
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

    /**
     * @param {number} attributeType
     * @return {string}
     */
    static getAttributeTypeName(attributeType) {
        const typeName = TYPES_NAME.find(type => type.value === attributeType)
        if (typeName) {
            return typeName.label
        }
        throw new ClientError(`Attribute type not recognized "${typeName}"`)
    }

}