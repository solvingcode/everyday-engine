import Layout from '../../../../Layout.js'
import AddScriptNodeInputFormMenuItem from '../add/AddScriptNodeInputFormMenuItem.js'
import ListElementMenuItem from '../../../list/ListElementMenuItem.js'
import AddScriptNodeInputSubmitMenuItem from '../add/AddScriptNodeInputSubmitMenuItem.js'

export default class AddScriptNodeInputElementMenuItem extends ListElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            title: '',
            stateCode: '',
            type: Layout.type.LIST_ELEMENT
        })
    }

    /**
     * @override
     */
    doSetData(data) {
        const formData = new AddScriptNodeInputForm(data.bind)
        this.items = [
            new AddScriptNodeInputFormMenuItem(this, formData),
            new AddScriptNodeInputSubmitMenuItem(this, formData)
        ]
    }

    /**
     * @override
     */
    setupItems() {
        const formData = new AddScriptNodeInputForm(this.data.bind)
        this.items = [
            new AddScriptNodeInputFormMenuItem(this, formData),
            new AddScriptNodeInputSubmitMenuItem(this, formData)
        ]
    }

}

export class AddScriptNodeInputForm {

    /**
     * @type {DynamicAttribute}
     */
    attribute

    /**
     * @type {string}
     */
    value

    /**
     * @param {DynamicAttribute} attribute
     */
    constructor(attribute) {
        this.attribute = attribute
        this.value = ''
    }

    /**
     * @return {DynamicAttribute}
     */
    getAttribute() {
        return this.attribute
    }

    /**
     * @param {string} value
     */
    setValue(value) {
        this.value = value
    }

    /**
     * @return {string}
     */
    getValue() {
        return this.value
    }

    /**
     * @return {boolean}
     */
    isValue() {
        if (this.value === '0') {
            return false
        }
        return !!this.value
    }

}