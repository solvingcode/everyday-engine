import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import FileMenuItem from './FileMenuItem.js'
import TextMenuItem from './TextMenuItem.js'
import CheckboxMenuItem from './CheckboxMenuItem.js'
import DropdownMenuItem from './DropdownMenuItem.js'
import Maths from '../../../utils/Maths.js'
import ObjectHelper from '../../../utils/ObjectHelper.js'
import ColorMenuItem from './ColorMenuItem.js'
import RangeMenuItem from './RangeMenuItem.js'
import TextareaMenuItem from './TextareaMenuItem.js'
import WysiwygMenuItem from './WysiwygMenuItem.js'
import SystemError from '../../../exception/type/SystemError.js'
import ClientError from '../../../exception/type/ClientError.js'
import DynamicAttributeHelper from '../../../utils/DynamicAttributeHelper.js'
import World from '../../../world/World.js'

/**
 * Form menu item
 * @property {FormField[]} fields
 */
class FormMenuItem extends MenuItem {

    constructor(props, parent) {
        super(props, parent)
        this.init()
    }

    /**
     * Init the form menu
     */
    init() {
        this.bindObject = null
        this.object = null
        this.items = []
        this.version = 0
        this.updateFields()
    }

    /**
     * @return {FormField[]}
     */
    getFields() {
        return this.fields
    }

    /**
     * @abstract
     * GenerateFields all fields
     * @return {FormField[]}
     */
    generateFields() {
        throw new SystemError('"generateFields" method must be implemented')
    }

    /**
     * @return {*}
     */
    getPreUpdateData(){
        return this.object
    }

    /**
     * @param {*} value
     */
    postUpdate(value) {
    }

    /**
     * @param {*} value
     * @return {boolean}
     */
    preUpdate(value) {
        return true
    }

    /**
     * @abstract
     * Get the object bound to the form
     * @return {*}
     */
    getFormObject() {
        throw new SystemError('"getFormObject" method must be implemented')
    }

    /**
     * Check if the form has to be updated
     * @return {boolean}
     */
    shouldUpdate() {
        return true
    }

    /**
     * @override
     */
    update() {
        const object = this.getFormObject()
        this.bindObject = object
        if (object) {
            if (this.isFormUpdated(object)) {
                this.object = _.cloneDeep(object)
                this.shouldUpdate() && this.updateForm()
            }
        } else {
            this.init()
        }
    }

    /**
     * Update the form
     */
    updateForm() {
        this.version = Maths.generateId()
        this.buildFormItems()
        this.items.forEach(item => item.version = this.version)
    }

    updateFields() {
        this.fields = this.generateFields()
    }

    /**
     * @param {*} object
     * @return {boolean}
     */
    isObjectUpdated(object) {
        for (const iField in this.fields) {
            if (this.fields.hasOwnProperty(iField)) {
                const field = this.fields[iField]
                const getterString = this.getGetterString(field)
                try {
                    const newValue = this.getGetterForObject(field, object)()
                    const oldValue = this.getGetterForObject(field, this.object)()
                    if (newValue !== oldValue &&
                        !isNaN(newValue) && !isNaN(oldValue)
                    ) {
                        return true
                    }
                } catch (e) {
                    throw new ClientError(`Error comparing ${getterString} for ${object.constructor.name}`)
                }
            }
        }
        return false
    }

    /**
     * @return {boolean}
     */
    isFieldsUpdated() {
        const actualFields = this.getFields()
        const newFields = this.generateFields()
        return actualFields.length !== newFields.length ||
            !!actualFields.find((field, iField) => {
                if (field.type !== newFields[iField].type) {
                    throw new SystemError(`Changing field type not supported! (old: ${field.type}, new: ${newFields[iField].type})`)
                }
                if (_.isArray(field.list)) {
                    const actualValues = field.list.map(elem => `${elem.value}-${elem.label}`)
                    const newValues = newFields[iField].list.map(elem => `${elem.value}-${elem.label}`)
                    return !ObjectHelper.isEqual(actualValues, newValues)
                }
            })
    }

    /**
     * @param {*} object
     * @return {boolean}
     */
    isFormUpdated(object) {
        if (!this.object || object.id !== this.object.id) {
            return true
        } else if (this.isFieldsUpdated()) {
            this.updateFields()
            return true
        }
        return this.isObjectUpdated(object)
    }

    /**
     * @return {Object}
     */
    getBindObject() {
        return this.bindObject
    }

    /**
     * Build form items
     */
    buildFormItems() {
        this.items = this.fields
            .map(field => {
                const existItem = this.items.find(item => item.props.name === field.label)
                const getter = this.getGetter(field)
                const setter = this.getSetter(field)
                const typeMenuItem = this.getMenuItem(field)
                return new typeMenuItem(this,
                    {
                        index: existItem && existItem.index,
                        name: field.label,
                        list: field.list || [],
                        options: field.options
                    },
                    getter,
                    setter
                )
            })
    }

    /**
     * @param {FormField} field
     * @return {callback}
     */
    getGetter(field) {
        return this.getGetterForObject(field, this.bindObject)
    }

    /**
     * @param {FormField} field
     * @param {Object} bindObject
     * @return {callback}
     */
    getGetterForObject(field, bindObject) {
        const getterString = this.getGetterString(field)
        const getterDynamicField = 'getValue'
        if (field.type !== Layout.form.FILE) {
            return (function (getter, fieldNames, object) {
                return () => getter.reduce(
                    (pValue, cValue, currentIndex) => {
                        const fieldName = fieldNames[currentIndex]
                        if (field.dynamicAttribute && typeof pValue[getterDynamicField] === 'function') {
                            return pValue[getterDynamicField](fieldName)
                        }else if (typeof pValue[cValue] === 'function') {
                            return pValue[cValue]()
                        } else {
                            throw new SystemError(`getGetterForObject: ${pValue.constructor.name}.${cValue} is not a function`)
                        }
                    }
                    , object)
            })(getterString, field.bind.split('.'), bindObject)
        }
        return () => null
    }

    /**
     * @param {FormField} field
     * @return {string[]}
     */
    getGetterString(field) {
        const {bind, type} = field
        const prefix = type === Layout.form.CHECKBOX ? 'is' : 'get'
        return bind.split('.').map(eBind =>
            `${prefix}${eBind.charAt(0).toUpperCase() + eBind.slice(1)}`)
    }

    /**
     * @param {FormField} field
     * @return {callback}
     */
    getSetter(field) {
        const setterString = this.getSetterString(field)
        const setterDynamicField = 'setValue'
        const getterDynamicField = 'getValue'
        const getterDynamicFieldType = 'getType'
        return (function (setter, fieldNames, self) {
            return (value) => setter.reduce(
                (pValue, cValue, iValue) => {
                    const fieldName = fieldNames[iValue]
                    if (field.dynamicAttribute && typeof pValue[getterDynamicField] === 'function') {
                        if(iValue !== setter.length - 1){
                            return pValue[getterDynamicField](fieldName)
                        }else{
                            const validValue = DynamicAttributeHelper.getValueByType(
                                value, pValue[getterDynamicFieldType](fieldName),
                                World.get(), null, null)
                            return pValue[setterDynamicField](fieldName, validValue)
                        }
                    }else{
                        if(iValue !== setter.length - 1){
                            return pValue[cValue]()
                        }else{
                            return pValue[cValue](value)
                        }
                    }
                }
                , self.bindObject)
        })(setterString, field.bind.split('.'), this)
    }

    /**
     * @param {FormField} field
     * @return {string[]}
     */
    getSetterString(field) {
        const {bind} = field
        const bindArray = bind.split('.')
        return bindArray.map((eBind, iBind) =>
            `${iBind === bindArray.length - 1 ? 'set' : 'get'}${eBind.charAt(0).toUpperCase() + eBind.slice(1)}`)
    }

    /**
     * @param {FormField} field
     * @return {Function}
     */
    getMenuItem(field) {
        switch (field.type) {
            case Layout.form.FILE:
                return FileMenuItem
            case Layout.form.TEXT:
                return TextMenuItem
            case Layout.form.CHECKBOX:
                return CheckboxMenuItem
            case Layout.form.DROPDOWN:
                return DropdownMenuItem
            case Layout.form.COLOR:
                return ColorMenuItem
            case Layout.form.RANGE:
                return RangeMenuItem
            case Layout.form.TEXTAREA:
                return TextareaMenuItem
            case Layout.form.WYSIWYG:
                return WysiwygMenuItem
            default:
                throw new SystemError(`Form item "${field.type}" not defined`)
        }
    }
}

export default FormMenuItem