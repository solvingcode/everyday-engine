import DynamicAttribute from '../pobject/DynamicAttribute.js'
import AttributeType, {TYPES, TYPES_NAME} from '../pobject/AttributeType.js'
import ClientError from '../exception/type/ClientError.js'
import Layout from '../layout/Layout.js'
import Component from '../component/Component.js'
import RegexHelper from './RegexHelper.js'
import Vector from './Vector.js'

export default class DynamicAttributeHelper {

    /**
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     * @param {boolean} internal
     */
    static create(name, type, defaultValue = null, rule = null, internal = false) {
        return new DynamicAttribute(name, type, defaultValue, rule, internal)
    }

    /**
     * @param {DynamicAttribute[]} target
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     * @param {boolean} internal
     */
    static add(target, name, type, defaultValue = null, rule = null, internal = false) {
        if (!this.tryGet(target, name)) {
            target.push(this.create(name, type, defaultValue, rule, internal))
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
     */
    static delete(target, name) {
        const index = target.findIndex(pAttribute => pAttribute.getAttrName() === name)
        if (index >= 0) {
            target.splice(index, 1)
        }
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
     * @param {number|null} arrayIndex
     * @param {string|null} pAttributeName
     * @return {FormField[]}
     */
    static getFormFields(world, unitSelector, attribute,
                         isListInstances = true, pBindName = null,
                         arrayIndex = null, pAttributeName = null) {
        const bindName = `${pBindName || attribute.getAttrName()}${arrayIndex !== null ? `[${arrayIndex}]` : ''}`
        const attributeName = _.startCase(pAttributeName || attribute.getAttrName())
        const dynamicAttribute = !pBindName
        const attrType = arrayIndex !== null ? AttributeType.getArrayElementType(attribute.getAttrType()) : attribute.getAttrType()
        let formField
        if (attrType === TYPES.UNIT) {
            if (isListInstances) {
                const units = world.getUnitManager().getUnits()
                    .map(unit => ({
                        value: unit.getId(),
                        label: unit.getName()
                    }))
                formField = [{
                    bind: bindName,
                    label: attributeName,
                    type: Layout.form.DROPDOWN,
                    list: units,
                    draggable: true,
                    dynamicAttribute
                }]
            } else {
                formField = [
                    {
                        bind: bindName,
                        label: attributeName,
                        type: Layout.form.CHECKBOX,
                        dynamicAttribute
                    }
                ]
            }
        } else if (attrType === TYPES.COMPONENT) {
            const components = world.getComponentRegistry().getInstances()
                .map(component => ({
                    value: component.getName(),
                    label: component.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: components,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.MATERIAL) {
            const materials = world.getMaterialRegistry().getInstances()
                .map(material => ({
                    value: material.getName(),
                    label: material.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: materials,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.COMPONENT_INSTANCE && isListInstances) {
            const selectedUnit = unitSelector.getFirstSelected(world)
            const componentInstances = selectedUnit.getComponents()
                .filter(component => !component.isHidden() && !component.isUnique())
                .map(component => ({
                    value: component.getId(),
                    label: component.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: componentInstances,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.MASK_GROUP_INSTANCE && isListInstances) {
            const listMaskGroups = world
                .getPreference().getMaskGroup().getMasks()
                .map(maskGroup => ({
                    value: maskGroup.getId(),
                    label: maskGroup.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: listMaskGroups,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.AUDIO && isListInstances) {
            const listAudios = world.getAssetsManager().getAudioAssets()
                .map(audio => ({
                    value: audio.getId(),
                    label: audio.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: listAudios,
                draggable: true,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.IMAGE && isListInstances) {
            const listMeshes = world.getAssetsManager().getImageAssets()
                .map(mesh => ({
                    value: mesh.getId(),
                    label: mesh.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: listMeshes,
                draggable: true,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.UNIT_INSTANT && isListInstances) {
            const listUnitInstants = world.getAssetsManager().getUnitAssets()
                .map(instant => ({
                    value: instant.getId(),
                    label: instant.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: listUnitInstants,
                draggable: true,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.SCENE && isListInstances) {
            const listScenes = world.getSceneManager().getScenes()
                .map(scene => ({
                    value: scene.getId(),
                    label: scene.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: listScenes,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.FUNCTION) {
            const listFunctions = world.getFunctionRegistry().getCustomFunctionInstances()
                .map(func => ({
                    value: func.getName(),
                    label: func.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: listFunctions,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.FONT && isListInstances) {
            const listFonts = world.getAssetsManager().getFontAssets()
                .map(font => ({
                    value: font.getId(),
                    label: font.getName()
                }))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list: listFonts,
                draggable: true,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.BOOLEAN) {
            formField = [{
                bind: bindName,
                label: `${attributeName} `,
                type: Layout.form.CHECKBOX,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.COLOR && isListInstances) {
            formField = [{
                bind: bindName,
                label: `${attributeName} `,
                type: Layout.form.COLOR,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.RANGE && isListInstances) {
            const rule = attribute.getAttrRule() || []
            formField = [{
                bind: bindName,
                label: `${attributeName} `,
                type: Layout.form.RANGE,
                options: {
                    min: rule[0],
                    max: rule[1],
                    step: rule[2]
                },
                dynamicAttribute
            }]
        } else if (attrType === TYPES.VECTOR && isListInstances) {
            formField = [
                {
                    bind: bindName,
                    label: attributeName,
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
        } else if (attrType === TYPES.SIZE && isListInstances) {
            formField = [
                {
                    bind: bindName,
                    label: attributeName,
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
        } else if (attrType === TYPES.STYLE && isListInstances) {
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
        } else if (attrType === TYPES.LIST && isListInstances) {
            const rule = attribute.getAttrRule()
            const list = rule.map(eRule => ({value: eRule, label: eRule}))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.DROPDOWN,
                list,
                dynamicAttribute
            }]
        } else if (attrType === (TYPES.ARRAY | TYPES.LIST) && isListInstances) {
            const rule = attribute.getAttrRule()
            const list = rule.map(eRule => ({value: eRule, label: eRule}))
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.MULTI_BUTTON,
                list,
                dynamicAttribute
            }]
        } else if (attrType === TYPES.NUMBER) {
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.NUMBER,
                dynamicAttribute
            }]
        } else if (AttributeType.isArrayType(attrType) && isListInstances) {
            const array = attribute.getAttrValue() || []
            const size = array.length
            formField = [{
                bind: bindName,
                label: attributeName,
                type: Layout.form.GROUP,
                dynamicAttribute,
                items: [
                    {
                        bind: `size[${bindName}]`,
                        label: 'Size',
                        type: Layout.form.NUMBER,
                        dynamicAttribute
                    },
                    ...(Array.from({length: size}).reduce((listElement, current, index) =>
                            [...listElement, ...this.getFormFields(world, unitSelector, attribute, isListInstances,
                                null, index, `Element ${index}`)]
                        , []))
                ]
            }]
        } else {
            formField = [{
                bind: bindName,
                label: attributeName,
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
     * @return {*}
     */
    static getKeyByType(value, type, world) {
        switch (type) {
            case TYPES.UNIT:
            case TYPES.ANIMATION:
            case TYPES.COMPONENT_INSTANCE:
            case TYPES.MASK_GROUP_INSTANCE:
            case TYPES.AUDIO:
            case TYPES.UNIT_INSTANT:
            case TYPES.SCENE:
            case TYPES.FONT:
                return value.getId()
            case TYPES.FUNCTION:
            case TYPES.COMPONENT:
                return value.getName()
        }
        return value
    }

    /**
     * @param {*} value
     * @param {number} type
     * @param {World} world
     * @return {*}
     */
    static getValueByType(value, type, world) {
        let newValue = value
        if (newValue === '[undefined]') {
            return undefined
        }
        switch (type) {
            case TYPES.UNIT:
                const unitManager = world.getUnitManager()
                newValue = unitManager.hasUnit(value) ? value : world.findUnitById(parseInt(value))
                if (!newValue) {
                    throw new ClientError(`Unit "${value}" not found`)
                }
                break
            case TYPES.ANIMATION:
                const animationManager = world.getAnimationManager()
                newValue = animationManager.hasAnimation(value) ? value : animationManager.findById(parseInt(value))
                if (!newValue) {
                    throw new ClientError(`Animation "${value}" not found`)
                }
                break
            case TYPES.COMPONENT:
                const component = world.getComponentRegistry().getInstance(value)
                if (!component || !component.constructor) {
                    throw new ClientError(`Component "${value}" not found`)
                }
                newValue = component.constructor
                break
            case TYPES.COMPONENT_INSTANCE:
                const unitManagerComponent = world.getUnitManager()
                const componentInstance = unitManagerComponent.hasComponent(value) ? value :
                    world.getUnitManager().findComponentById(parseInt(value))
                if (!componentInstance) {
                    throw new ClientError(`Component Instance "${value}" not found`)
                }
                newValue = componentInstance
                break
            case TYPES.MASK_GROUP_INSTANCE:
                const maskGroupPref = world.getPreference().getMaskGroup()
                const maskGroupInstance = maskGroupPref.hasMaskGroup(value) ? value :
                    world.getPreference().getMaskGroup().find(parseInt(value))
                if (!maskGroupInstance) {
                    throw new ClientError(`Mask Group Instance "${value}" not found`)
                }
                newValue = maskGroupInstance
                break
            case TYPES.AUDIO:
                const audio = world.getAssetsManager().findAssetAudioById(value)
                if (!audio) {
                    throw new ClientError(`Audio "${value}" not found`)
                }
                newValue = audio.getType()
                break
            case TYPES.UNIT_INSTANT:
                const assetManager = world.getAssetsManager()
                const unitInstant = assetManager.hasAsset(value) ? value : world.getAssetsManager().findAssetUnitById(value)
                if (!unitInstant) {
                    throw new ClientError(`Unit Instant "${value}" not found`)
                }
                newValue = unitInstant
                break
            case TYPES.SCENE:
                const sceneManager = world.getSceneManager()
                const scene = sceneManager.hasScene(value) ? value : sceneManager.findById(value)
                if (!scene) {
                    throw new ClientError(`Scene "${value}" not found`)
                }
                newValue = scene
                break
            case TYPES.FUNCTION:
                const functionRegistry = world.getFunctionRegistry()
                const func = functionRegistry.hasInstance(value) ? value : functionRegistry.getInstance(value)
                if (!func) {
                    throw new ClientError(`Function "${value}" not found`)
                }
                newValue = func
                break
            case TYPES.FONT:
                const font = world.getAssetsManager().findAssetFontById(value)
                if (!font) {
                    throw new ClientError(`Font "${value}" not found`)
                }
                newValue = font.getType()
                break
            case TYPES.ARRAY | TYPES.ANY:
                if (!_.isArray(value)) {
                    throw new ClientError(`"${value}" is not an array`)
                }
                newValue = value
                break
            case TYPES.ARRAY | TYPES.COMPONENT_INSTANCE:
                if (!_.isArray(value) || !value.every(eArray => eArray instanceof Component)) {
                    throw new ClientError(`"${value}" is not an array`)
                }
                newValue = value
                break
            case TYPES.ARRAY | TYPES.DYNAMIC_ATTRIBUTE:
                if (!_.isArray(value) || !value.every(eArray => eArray instanceof DynamicAttribute)) {
                    throw new ClientError(`"${value}" is not an array of DynamicAttribute`)
                }
                newValue = value
                break
            case TYPES.DYNAMIC_ATTRIBUTE:
                if (!(value instanceof DynamicAttribute)) {
                    throw new ClientError(`"${value}" is not a DynamicAttribute`)
                }
                newValue = value
                break
            case TYPES.VECTOR:
                if (!(value instanceof Vector)) {
                    throw new ClientError(`"${value}" is not a Vector`)
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
                newValue = value === 'true' || value === '1' || value === true ? 1 : 0
                break
        }
        return newValue
    }

    /**
     * @param {*} value
     * @param {number} type
     * @param {World} world
     * @return {*}
     */
    static validateValueByType(value, type, world) {
        if (value === '[undefined]') {
            return true
        }
        switch (type) {
            case TYPES.UNIT:
                return world.getUnitManager().hasUnit(value)
            case TYPES.ANIMATION:
                return world.getAnimationManager().hasAnimation(value)
            case TYPES.COMPONENT:
                return world.getComponentRegistry().hasInstance(value)
            case TYPES.COMPONENT_INSTANCE:
                return world.getUnitManager().hasComponent(value)
            case TYPES.MASK_GROUP_INSTANCE:
                const maskGroupPref = world.getPreference().getMaskGroup()
                return maskGroupPref.hasMaskGroup(value)
            case TYPES.AUDIO:
                return world.getAssetsManager().hasAsset(value)
            case TYPES.UNIT_INSTANT:
                return world.getAssetsManager().hasAsset(value)
            case TYPES.SCENE:
                return world.getSceneManager().hasScene(value)
            case TYPES.FUNCTION:
                return world.getFunctionRegistry().hasInstance(value)
            case TYPES.FONT:
                return world.getAssetsManager().hasAsset(value)
            case TYPES.ARRAY | TYPES.ANY:
                return _.isArray(value)
            case TYPES.ARRAY | TYPES.COMPONENT_INSTANCE:
                return _.isArray(value) && value.every(eArray => eArray instanceof Component)
            case TYPES.ARRAY | TYPES.DYNAMIC_ATTRIBUTE:
                return _.isArray(value) && value.every(eArray => eArray instanceof DynamicAttribute)
            case TYPES.DYNAMIC_ATTRIBUTE:
                return value instanceof DynamicAttribute
            case TYPES.VECTOR:
                return value instanceof Vector
            case TYPES.NUMBER:
                return !isNaN(value) && !isNaN(parseFloat(value))
            case TYPES.RANGE:
                return !isNaN(value) && !isNaN(parseFloat(value))
            case TYPES.BOOLEAN:
                return value === 'true' || value === '1' || value === true || value === '0' || value === false
                    || value === 'false' || value === null || value === '' || value === 1 || value === 0
            case TYPES.STRING:
                return _.isString(value) || _.isNumber(value)
            case TYPES.ANY:
                return true
        }
        return false
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

    /**
     * @param {string} fieldName
     * @return {boolean}
     */
    static isSizeField(fieldName) {
        return !!fieldName.match(RegexHelper.FIELD_NAME_SIZE)
    }

    /**
     * @param {string} fieldName
     * @return {boolean}
     */
    static isArrayIndexField(fieldName) {
        return !!fieldName.match(RegexHelper.FIELD_NAME_ARRAY_INDEX)
    }

    /**
     * @param {string} fieldName
     * @return {string}
     */
    static getAttributeName(fieldName) {
        if (this.isSizeField(fieldName)) {
            const fieldMatch = fieldName.match(RegexHelper.FIELD_NAME_SIZE)
            return fieldMatch[1]
        } else if (this.isArrayIndexField(fieldName)) {
            const fieldMatch = fieldName.match(RegexHelper.FIELD_NAME_ARRAY_INDEX)
            return fieldMatch[1]
        }
        return fieldName
    }

    /**
     * @param {string} fieldName
     * @return {number|null}
     */
    static getAttributeArrayIndex(fieldName) {
        if (this.isArrayIndexField(fieldName)) {
            const fieldMatch = fieldName.match(RegexHelper.FIELD_NAME_ARRAY_INDEX)
            return parseInt(fieldMatch[2])
        }
        return null
    }

}