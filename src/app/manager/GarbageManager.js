export default class GarbageManager {

    static instance

    constructor() {
        this.unitIds = []
    }

    /**
     * @type {number[]}
     */
    unitIds

    /**
     * @return {number[]}
     */
    getUnitIds(){
        return this.unitIds
    }

    /**
     * @param {number} unitId
     */
    addUnitId(unitId){
        this.unitIds.push(unitId)
    }

    clear(){
        this.unitIds = []
    }

    /**
     * @return {GarbageManager}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}