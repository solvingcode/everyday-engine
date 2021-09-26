import DataIdGenerator from './DataIdGenerator.js'
import Maths from '../../../utils/Maths.js'

export default class UnitDataIdGenerator extends DataIdGenerator{

    /**
     * @override
     * @param {Unit[]} units
     */
    static generate(units){
        units.forEach(unit => {
            unit.setId(Maths.generateId())
            unit.getComponents().forEach(component => {
                component.setId(Maths.generateId())
            })
        })
    }

}