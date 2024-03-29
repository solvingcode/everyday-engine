import Layout from '../layout/Layout.js'
import AttributeType, {TYPES_NAME} from '../pobject/AttributeType.js'
import DynamicAttribute from '../pobject/DynamicAttribute.js'

export default class VariableScript {

    /**
     * @type {DynamicAttribute}
     */
    definition

    /**
     * @type {boolean}
     */
    selected

    /**
     * @type {boolean}
     */
    varStatic

    /**
     * @param {string} attrName
     * @param {number|string} attrType
     * @param {*} attrValue
     * @param {*} attrRule
     */
    constructor(attrName, attrType, attrValue = null, attrRule = null) {
        this.definition = new DynamicAttribute(attrName, attrType, attrValue, attrRule)
        this.varStatic = false
    }

    /**
     * @return {DynamicAttribute}
     */
    getDefinition(){
        return this.definition
    }

    /**
     * @param {DynamicAttribute} definition
     */
    setDefinition(definition){
        this.definition = definition
    }

    /**
     * @return {number}
     */
    getId(){
        return this.definition.getId()
    }

    /**
     * @return {string}
     */
    getName(){
        return `${this.definition.getAttrName()} [${AttributeType.getName(this.definition.getAttrType())}]`
    }

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.selected
    }

    /**
     * @return {boolean}
     */
    getVarStatic(){
        return this.varStatic
    }

    /**
     * @return {boolean}
     */
    isVarStatic(){
        return this.getVarStatic()
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.getSelected()
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    /**
     * @param {boolean} varStatic
     */
    setVarStatic(varStatic){
        this.varStatic = varStatic
    }

    unselect(){
        this.setSelected(false)
    }

    select(){
        this.setSelected(true)
    }

    /**
     * @return {*[]}
     */
    generateFields(){
        return [
            {
                bind: 'definition.attrName',
                label: 'Name',
                type: Layout.form.TEXT
            },
            {
                bind: 'definition.attrType',
                label: 'Type',
                type: Layout.form.DROPDOWN,
                list: TYPES_NAME
            },
            {
                bind: 'definition.attrValue',
                label: 'Default value',
                type: Layout.form.TEXT
            },
            {
                bind: 'varStatic',
                label: 'Static',
                type: Layout.form.CHECKBOX
            }
        ]
    }

}