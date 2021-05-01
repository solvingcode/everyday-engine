import World from '../world/World.js'
import ObjectHelper from '../utils/ObjectHelper.js'

/**
 * Handle the history of action executed.
 * Use the storage to push/pop data.
 * This class is used to manage the Undo action
 * @property {Storage} storage
 * @property {number} maxList
 * @property {Object[]} list
 */
class History {

    /**
     * @type {History}
     */
    static instance = null

    /**
     * @type {HistoryItem[]}
     */
    list

    /**
     * @type {Object}
     */
    dataRecord

    constructor() {
        this.list = []
        this.dataRecord = {}
        this.maxList = 10
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

    record(){
        this.dataRecord = this.getData()
    }

    save(){
        const newRecord = this.getData()
        const result = ObjectHelper.compare(this.dataRecord, newRecord)
        this.push(result)
    }

    /**
     * @return {World}
     */
    getData(){
        return _.cloneDeep(World.get())
    }

    restore(){
        const result = this.pop()
        const record = this.getData()
        if(result){
            Object.keys(result).forEach(path => {
                const value = result[path]
                console.log(path, value)
            })
        }
    }

    /**
     * @return {HistoryItem}
     */
    pop() {
        return this.list.length && this.list.pop()
    }

    /**
     * @param {Object} result
     */
    push(result) {
        if (this.list.length > this.maxList) {
            this.list.shift()
        }
        this.list.push(result)
    }

    /**
     * @typedef {Object} HistoryItem
     */

}

export default History