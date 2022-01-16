import SchemaValidator from '../schema/SchemaValidator.js'
import Storage from './Storage.js'

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

    /**
     * @return {History}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

    /**
     * @param {World} world
     */
    async record(world){
        this.dataRecord = await this.getData(world)
    }

    /**
     * @param {World} world
     * @return {Promise<void>}
     */
    async save(world){
        const newRecord = await this.getData(world)
        const resultLeftJoin = await SchemaValidator.get().compare(Storage.type.WORLD, this.dataRecord, newRecord)
        const resultRightJoin = await SchemaValidator.get().compare(Storage.type.WORLD, newRecord, this.dataRecord)
        const result = {after: resultLeftJoin, before: resultRightJoin}
        this.push(result)
    }

    /**
     * @param {World} world
     * @return {World}
     */
    async getData(world){
        return await SchemaValidator.get().validate(Storage.type.WORLD, world, false)
    }

    /**
     * @param {World} world
     */
    async restore(world){
        const result = this.pop()
        const newWorld = await this.getData(world)
        if(result){
            const dataToDelete = result.after
            const dataToAdd = result.before
            for(const indexedPath in dataToDelete){
                const value = dataToDelete[indexedPath]
                await SchemaValidator.get().updateFromPath(newWorld, indexedPath, value.path, undefined)
            }
            for(const indexedPath in dataToAdd){
                const value = dataToAdd[indexedPath]
                await SchemaValidator.get().updateFromPath(newWorld, indexedPath, value.path, value.data)
            }
        }
        const worldDataValidated = await SchemaValidator.get().validate(Storage.type.WORLD, newWorld, false)
        world.set(worldDataValidated)
    }

    /**
     * @return {HistoryItem}
     */
    pop() {
        return this.list.length && this.list.pop()
    }

    /**
     * @param {HistoryItem} result
     */
    push(result) {
        if (this.list.length > this.maxList) {
            this.list.shift()
        }
        this.list.push(result)
    }

    /**
     * @typedef {{after: {path: string, data: *}, before: {path: string, data: *}}} HistoryItem
     */

}

export default History