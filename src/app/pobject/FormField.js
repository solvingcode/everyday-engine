export default class FormField{
    /**
     * @type {string}
     */
    bind
    /**
     * @type {string}
     */
    label
    /**
     * @type {string}
     */
    type
    /**
     * @type {{ value: string|number, label: string }[]}
     */
    list
    /**
     * @type {boolean}
     */
    dynamicAttribute
    options
    /**
     * @type {boolean}
     */
    draggable
    /**
     * @type {FormField[]}
     */
    items
    /**
     * @type {number}
     */
    size
}