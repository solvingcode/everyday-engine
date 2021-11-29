import DataIdGenerator from './DataIdGenerator.js'
import Maths from '../../../utils/Maths.js'
import {TYPES} from '../../../pobject/AttributeType.js'

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
                component.getAttributes()
                    .filter(attribute => attribute.getAttrType() === TYPES.UNIT)
                    .forEach(attribute => attribute.setAttrValue(newUnitIds[attribute.getAttrValue()]))
                component.getAttributes()
                    .filter(attribute => attribute.getAttrType() === TYPES.COMPONENT_INSTANCE)
                    .forEach(attribute => attribute.setAttrValue(newComponentIds[attribute.getAttrValue()]))
            })
        })
    }

}