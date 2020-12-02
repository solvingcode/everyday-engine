define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')
    const FileMenuItem = require('./FileMenuItem.js')
    const TextMenuItem = require('./TextMenuItem.js')
    const CheckboxMenuItem = require('./CheckboxMenuItem.js')
    const DropdownMenuItem = require('./DropdownMenuItem.js')
    const Maths = require('../../../utils/Maths.js')

    /**
     * Form menu item
     * @property {FormField[]} fields
     */
    class FormMenuItem extends MenuItem {

        /**
         * Init the form menu
         */
        init() {
            this.bindObject = null
            this.object = null
            this.items = []
            this.version = 0
            this.fields = this.getFields()
        }

        /**
         * @abstract
         * Get all fields
         * @return {(FormField | MenuItem)[]}
         */
        getFields() {
            throw new TypeError('"getFields" method must be implemented')
        }

        /**
         * @abstract
         * Get the object bound to the form
         * @return {null|Object}
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
            if (object) {
                if (this.isFormUpdated(object)) {
                    this.bindObject = object
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
        }

        /**
         * Check if the form is updated
         * @return {boolean}
         */
        isFormUpdated(object) {
            if (!this.object) {
                return true
            }
            for (const iField in this.fields) {
                if (this.fields.hasOwnProperty(iField)) {
                    const field = this.fields[iField]
                    const getterString = this.getGetterString(field)
                    try {
                        if (object[getterString]() !== this.object[getterString]()) {
                            return true
                        }
                    }catch(e){
                        throw new ReferenceError(`Error comparing ${getterString} for ${object.constructor.name}`)
                    }
                }
            }
            return false
        }

        /**
         * Get the bound object
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
                            list: field.list || []
                        },
                        getter,
                        setter
                    )
                })
            )
        }

        /**
         * Get the getter if the field
         * @param {FormField} field
         * @return {callback}
         */
        getGetter(field) {
            const getterString = this.getGetterString(field)
            if (field.type !== Layout.form.FILE) {
                return (function (getter, object) {
                    return () => object[getter]()
                })(getterString, this.bindObject)
            }
            return () => null
        }

        /**
         * Get the getter name
         * @param {FormField} field
         * @return {string}
         */
        getGetterString(field) {
            const prefix = field.type === Layout.form.CHECKBOX ? "is" : "get"
            return `${prefix}${field.bind.charAt(0).toUpperCase() + field.bind.slice(1)}`
        }

        /**
         * Get the setter if the field
         * @param {FormField} field
         * @return {callback}
         */
        getSetter(field) {
            const setterString = this.getSetterString(field)
            return (function (setter, object) {
                return (value) => object[setter](value)
            })(setterString, this.bindObject)
        }

        /**
         * Get the setter name
         * @param {FormField} field
         * @return {string}
         */
        getSetterString(field) {
            return `set${field.bind.charAt(0).toUpperCase() + field.bind.slice(1)}`
        }

        /**
         * Get the menu item
         * @param {FormField} field
         * @return {InputMenuItem}
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
                default:
                    return null
            }
        }
    }

    /**
     * @typedef {{bind: string, label: string, type: string, list?: { value: string|number, label: string }[]}} FormField
     */

    return FormMenuItem

})