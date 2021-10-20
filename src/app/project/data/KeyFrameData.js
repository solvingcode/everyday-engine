import Data from './Data.js'

export default class KeyFrameData extends Data {

    /**
     * @type {number}
     */
    id

    /**
     * @type {Component}
     */
    component

    /**
     * @type {number}
     */
    time

    /**
     * @param {number} id
     */
    setId(id){
        this.id = id
    }

    /**
     * @return {number}
     */
    getId(){
        return this.id
    }

    /**
     * @param {Component} component
     */
    setComponent(component){
        this.component = component
    }

    /**
     * @return {Component}
     */
    getComponent(){
        return this.component
    }

    /**
     * @param {number} time
     */
    setTime(time){
        this.time = time
    }

    /**
     * @return {number}
     */
    getTime(){
        return this.time
    }
}