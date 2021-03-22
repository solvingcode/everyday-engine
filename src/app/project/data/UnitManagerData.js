import Data from './Data.js'

/**
 * @extends {Data}
 */
export default class UnitManagerData extends Data {

    units
    components

    /**
     * @param {Unit} units
     */
    setUnits(units) {
        this.units = units
    }

    /**
     * @return {Unit[]}
     */
    getUnits() {
        return this.units
    }

    /**
     * @param {Component} components
     */
    setComponents(components) {
        this.components = components
    }

    /**
     * @return {Component[]}
     */
    getComponents() {
        return this.components
    }


}