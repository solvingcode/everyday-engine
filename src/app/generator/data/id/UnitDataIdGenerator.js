import DataIdGenerator from './DataIdGenerator.js'
import Maths from '../../../utils/Maths.js'

export default class UnitDataIdGenerator extends DataIdGenerator{

    /**
     * @override
     * @param {Unit[]} units
     */
    static generate(units){
        const newUnitIds = []
        const newComponentIds = []
        units.forEach(unit => {
            newUnitIds[unit.getId()] = Maths.generateId()
            unit.getComponents().forEach(component => {
                newComponentIds[component.getId()] = Maths.generateId()
            })
        })
        units.forEach(unit => {
            unit.setId(newUnitIds[unit.getId()])
            unit.setUnitParentId(newUnitIds[unit.getUnitParentId()])
            unit.getComponents().forEach(component => {
                component.setId(newComponentIds[component.getId()])
            })
        })
    }

}