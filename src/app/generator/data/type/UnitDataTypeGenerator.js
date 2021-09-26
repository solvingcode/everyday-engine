import World from '../../../world/World.js'

export default class UnitDataTypeGenerator {

    /**
     * @param {Unit[]} units
     */
    static generate(units){
        units.forEach(unit => World.get().createUnitByInstance(unit))
    }

}