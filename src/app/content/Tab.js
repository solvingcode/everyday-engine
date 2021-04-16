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
     * @param {string} name
     * @param {Content} content
     */
    constructor(name, content) {
        this.id = Maths.generateId()
        this.name = name
        this.content = content
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

}