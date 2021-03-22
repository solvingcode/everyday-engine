import ComponentData from './ComponentData.js'

export default class UnitData extends ComponentData{

    /**
     * @template T
     * @param {T} type
     * @return {T}
     */
    getComponent(type){
        if(!(type.prototype instanceof ComponentData)){
            throw new TypeError(`Component type must be instance of ComponentData (${type.name} given)`)
        }
        return this.getComponents().find(component => component instanceof type)
    }

    /**
     * @param {ComponentData} component
     */
    addComponent(component){
        this.components.push(component)
    }

    /**
     * @param {number} componentId
     */
    deleteComponent(componentId){
        const iComponent = this.findIndexComponentById(componentId)
        this.components.splice(iComponent, 1)
    }

    /**
     * @param {number} componentId
     * @return {number}
     */
    findIndexComponentById(componentId){
        return this.components.findIndex(component => component.id === componentId)
    }

}