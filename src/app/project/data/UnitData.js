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
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */
    hasComponents(componentClasses){
        for (const iComponentClass in componentClasses){
            const componentClass = componentClasses[iComponentClass]
            if(componentClasses.hasOwnProperty(iComponentClass) && !this.getComponent(componentClass)){
                return false
            }
        }
        return true
    }

    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */
    hasAnyComponents(componentClasses){
        for (const iComponentClass in componentClasses){
            const componentClass = componentClasses[iComponentClass]
            if(componentClasses.hasOwnProperty(iComponentClass) && this.getComponent(componentClass)){
                return true
            }
        }
        return false
    }

    /**
     * @param {Class<ComponentData>} componentClass
     */
    createComponent(componentClass){
        this.components.push(new componentClass())
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