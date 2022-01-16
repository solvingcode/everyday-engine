import Maths from '../utils/Maths.js'
import TabData from '../project/data/TabData.js'

export default class Tab extends TabData{

    /**
     * @type {boolean}
     */
    protected

    /**
     * @param {string} name
     * @param {Content} content
     */
    constructor(name, content) {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.content = content
        this.protected = false
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