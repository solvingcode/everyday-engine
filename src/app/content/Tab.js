import Maths from '../utils/Maths.js'

export default class Tab{

    /**
     * @type {number}
     */
    id

    /**
     * @type {string}
     */
    name

    /**
     * @type {boolean}
     */
    selected

    /**
     * @type {Content}
     */
    content

    /**
     * @type {boolean}
     */
    protected

    /**
     * @param {string} name
     * @param {Content} content
     */
    constructor(name, content) {
        this.id = Maths.generateId()
        this.name = name
        this.content = content
        this.protected = false
    }

    /**
     * @return {number}
     */
    getId(){
        return this.id
    }

    /**
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @return {Content}
     */
    getContent(){
        return this.content
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.selected
    }

    select(){
        this.selected = true
    }

    unselect(){
        this.selected = false
    }

    /**
     * @return {boolean}
     */
    isProtected(){
        return this.protected
    }

}