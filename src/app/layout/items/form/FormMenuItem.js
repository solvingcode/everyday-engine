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

/**
 * Form menu item
 * @property {FormField[]} fields
 */
class FormMenuItem extends MenuItem {

    constructor(props) {
        super(props)
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
        throw new TypeError('"generateFields" method must be implemented')
    }

    /**
     * @param {*} value
     */
    postUpdate(value){
    }

    /**
     * @abstract
     * Get the object bound to the form
     * @return {*}
     */
    getFormObject() {
        throw new TypeError('"getFormObject" method must be implemented')
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
        this.items = []
        this.buildFormItems()
        this.version = Maths.generateId()
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
                    if (this.getGetterForObject(field, object)() !== this.getGetterForObject(field, this.object)()) {
                        return true
                    }
                } catch (e) {
                    throw new ReferenceError(`Error comparing ${getterString} for ${object.constructor.name}`)
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
        return !!actualFields.find((field, iField) => {
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
        this.items = this.items.concat(
            this.fields.map(field => {
                const getter = this.getGetter(field)
                const setter = this.getSetter(field)
                const typeMenuItem = this.getMenuItem(field)
                return new typeMenuItem(this,
                    {
                        name: field.label,
                        list: field.list || [],
                        options: field.options
                    },
                    getter,
                    setter
                )
            })
        )
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
        if (field.type !== Layout.form.FILE) {
            return (function (getter, object) {
                return () => getter.reduce(
                    (pValue, cValue) => pValue[cValue]()
                    , object)
            })(getterString, bindObject)
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
        return (function (setter, self) {
            return (value) => setter.reduce(
                (pValue, cValue, iValue) =>
                    iValue !== setter.length - 1 ? pValue[cValue]() : pValue[cValue](value)
                , self.bindObject)
        })(setterString, this)
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
            default:
                throw new TypeError(`Form item "${field.type}" not defined`)
        }
    }
}

export default FormMenuItem