import ComponentData from './ComponentData.js'
import Data from './Data.js'
import Maths from '../../utils/Maths.js'

export default class UnitData extends Data{

    id
    name
    components

    constructor(name) {
        super()
        this.id = Maths.generateId()
        this.name = name || 'Custom Component'
        this.components = []
    }

    /**
     * @param {number} id
     */
    setId(id){
        this.id = id
    }

    /**
     * @return {number}
     */
    getId(){
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name){
        this.name = name
    }

    /**
     * @return {string}
     */
    getName(){
        return this.name
    }

    /**
     * @param {ComponentData[]} components
     */
    setComponents(components){
        this.components = components
    }

    /**
     * @return {ComponentData[]}
     */
    getComponents(){
        return this.components
    }

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
        if(!this.getComponent(componentClass)){
            this.components.push(new componentClass())
        }else{
            throw new TypeError(`Component ${componentClass.name} already created!`)
        }
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

    /**
     * @param {ComponentData[]} components
     */
    concatComponents(components){
        components.forEach((component) => {
            const existIndexComponent = this.components.findIndex(pComponent => pComponent.getName() === component.getName())
            if(existIndexComponent >= 0){
                this.components[existIndexComponent] = _.cloneDeep(component)
            }else{
                this.components.push(_.cloneDeep(component))
            }
        })
    }

}