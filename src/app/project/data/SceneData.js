import Data from './Data.js'
import UnitManager from '../../manager/UnitManager.js'
import Maths from '../../utils/Maths.js'

export default class SceneData extends Data{

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
    active
    /**
     * @type {boolean}
     */
    included
    unitManager

    /**
     * @param {string} name
     */
    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name
        this.active = false
        this.included = false
        this.unitManager = new UnitManager()
    }

    /**
     * @param {number} id
     */
    setId(id) {
        this.id = id
    }

    /**
     * @return {number}
     */
    getId() {
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @param {UnitManagerData} unitManager
     */
    setUnitManager(unitManager) {
        this.unitManager = unitManager
    }

    /**
     * @return {UnitManager}
     */
    getUnitManager() {
        return this.unitManager
    }

    /**
     * @param {boolean} active
     */
    setActive(active) {
        this.active = active
    }

    /**
     * @return {boolean}
     */
    getActive() {
        return this.active
    }

    /**
     * @return {boolean}
     */
    isActive() {
        return this.getActive()
    }

    /**
     * @param {boolean} included
     */
    setIncluded(included) {
        this.included = included
    }

    /**
     * @return {boolean}
     */
    getIncluded() {
        return this.included
    }

    /**
     * @return {boolean}
     */
    isIncluded() {
        return this.getIncluded()
    }

}