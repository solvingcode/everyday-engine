import Data from './Data.js'

/**
 * @extends {Data}
 */
export default class UnitManagerData extends Data {

    units

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

}