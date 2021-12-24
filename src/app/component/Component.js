import ComponentData from '../project/data/ComponentData.js'
import {TYPES} from '../pobject/AttributeType.js'
import DynamicAttributeHelper from '../utils/DynamicAttributeHelper.js'
import SystemError from '../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class Component extends ComponentData {

    /**
     * @type {DynamicAttribute[]}
     */
    finalAttributes

    constructor(name) {
        super(name)
        this.finalAttributes = []
        this.init()
    }

    /**
     * @param {World} world
     * @param {UnitSelector} unitSelector
     * @return {FormField[]}
     */
    getFormFields(world, unitSelector) {
        const attributes = this.getAttributes()
        const fields = []
        const excludeFields = this.getExcludeFields()

        attributes.forEach(attr => {
            if (!excludeFields.includes(attr.getAttrName())) {
                fields.push(...DynamicAttributeHelper.getFormFields(world, unitSelector, attr))
            }
        })

        return fields
    }

    /**
     * @return {string[]}
     */
    getExcludeFields() {
        return []
    }

    /**
     * @private
     */
    init() {
        this.add('enabled', TYPES.BOOLEAN, true)
        this.initAttributes()
    }

    /**
     * @abstract
     */
    initAttributes() {
        throw new SystemError(`${this.constructor.name}.initAttributes must be implement`)
    }

    /**
     * @protected
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     */
    add(name, type, defaultValue = null, rule = null) {
        DynamicAttributeHelper.add(this.finalAttributes, name, type, defaultValue, rule, false)
        DynamicAttributeHelper.add(this.attributes, name, type, defaultValue, rule, false)
    }

    /**
     * @protected
     * @param {string} name
     * @param {number} type
     * @param {*} defaultValue
     * @param {*} rule
     */
    addInternal(name, type, defaultValue = null, rule = null) {
        DynamicAttributeHelper.add(this.finalAttributes, name, type, defaultValue, rule, true)
        DynamicAttributeHelper.add(this.attributes, name, type, defaultValue, rule, true)
    }

    /**
     * @param {string} name
     * @return {DynamicAttribute}
     */
    get(name) {
        return DynamicAttributeHelper.get(this.attributes, name)
    }

    /**
     * @protected
     * @param {string} name
     * @param {*} value
     */
    setValue(name, value) {
        DynamicAttributeHelper.setValue(this.attributes, name, value)
    }

    /**
     * @param {string} name
     * @param {*} value
     * @param {World} world
     */
    setKeyValue(name, value, world) {
        this.setValue(name, DynamicAttributeHelper.getValueByType(value, this.getType(name), world))
    }

    /**
     * @param {string} name
     * @param {World} world
     * @return {*}
     */
    getKeyValue(name, world) {
        return DynamicAttributeHelper.getKeyByType(this.getValue(name), this.getType(name), world)
    }

    /**
     * @protected
     * @param {string} name
     * @return {*}
     */
    getValue(name) {
        return DynamicAttributeHelper.getValue(this.attributes, name)
    }

    /**
     * @protected
     * @param {string} name
     * @return {*}
     */
    getType(name) {
        return DynamicAttributeHelper.getType(this.attributes, name)
    }

    /**
     * @param {string} name
     * @return {boolean}
     */
    hasAttribute(name) {
        return !!DynamicAttributeHelper.tryGet(this.attributes, name)
    }

    /**
     * @param {string} name
     */
    deleteAttribute(name) {
        DynamicAttributeHelper.delete(this.finalAttributes, name)
        DynamicAttributeHelper.delete(this.attributes, name)
    }

    /**
     * @param {string} name
     * @param {DynamicAttribute} attributeDefinition
     */
    updateAttributeDefinition(name, attributeDefinition) {
        const attribute = this.get(name)
        attribute.setInternal(attributeDefinition.getInternal())
        attribute.setAttrType(attributeDefinition.getAttrType())
        attribute.setAttrRule(attributeDefinition.getAttrRule())
        if (attributeDefinition.getInternal()) {
            attribute.setAttrValue(attributeDefinition.getAttrValue())
        }
    }

    /**
     * @protected
     * @param {DynamicAttribute[]} finalAttributes
     */
    setFinalAttributes(finalAttributes) {
        this.finalAttributes = finalAttributes
    }

    /**
     * @return {DynamicAttribute[]}
     */
    getFinalAttributes() {
        return this.finalAttributes
    }

    enable() {
        this.setValue('enabled', true)
    }

    disable() {
        this.setValue('enabled', false)
    }

    /**
     * @param {boolean} enabled
     */
    setEnabled(enabled) {
        this.setValue('enabled', enabled)
    }

    /**
     * @return {boolean}
     */
    getEnabled() {
        return this.getValue('enabled')
    }

    /**
     * @return {boolean}
     */
    isEnabled() {
        return this.getEnabled()
    }

    /**
     * @return {boolean}
     */
    isRemovable() {
        return true
    }

    /**
     * @return {boolean}
     */
    isProtected(){
        return true
    }

    concatAttributes(attributes) {
        super.concatAttributes(attributes)
        const finalAttributes = this.getFinalAttributes()
        if (finalAttributes && finalAttributes.length && this.isProtected()) {
            this.getAttributes().forEach(attribute => {
                const finalAttribute = finalAttributes.find(attr => attr.getAttrName() === attribute.getAttrName())
                if (!finalAttribute) {
                    this.deleteAttribute(attribute.getAttrName())
                } else {
                    this.updateAttributeDefinition(attribute.getAttrName(), finalAttribute)
                }
            })
        }
    }

}