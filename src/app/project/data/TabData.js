import Data from './Data.js'

export default class TabData extends Data{

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
     * @type {ContentData}
     */
    content

    /**
     * @return {number}
     */
    getId(){
        return this.id
    }

    /**
     * @param {number} id
     */
    setId(id){
        this.id = id
    }

    /**
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @param {string} name
     */
    setName(name){
        this.name = name
    }

    /**
     * @return {ContentData}
     */
    getContent(){
        return this.content
    }

    /**
     * @param {ContentData} content
     */
    setContent(content){
        this.content = content
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    /**
     * @return {boolean}
     */
    getSelected(){
        return this.selected
    }

}