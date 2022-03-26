import UnitData from '../project/data/UnitData.js'
import GUIPropertyComponent from '../component/internal/gui/property/GUIPropertyComponent.js'
import ScriptComponent from '../component/internal/ScriptComponent.js'
import {EEClass} from '../compiler/EEClass.js'

export default class Unit extends UnitData {

    constructor(defaultComponentClasses) {
        super()
        this.init(defaultComponentClasses || [])
    }

    /**
     * @param {Class<ComponentData>[]} defaultComponentClasses
     */
    init(defaultComponentClasses) {
        defaultComponentClasses.forEach(componentClass =>
            this.createComponent(componentClass)
        )
    }

    /**
     * @param {Component} componentInstance
     * @return {boolean}
     */
    hasComponentInstance(componentInstance) {
        return !!this.getComponents().find(component => component === componentInstance)
    }

    /**
     * @param {string} className
     * @return {UnitActor}
     */
    getScript(className) {
        const clazz = EEClass[className]
        const scriptComponent = this.findComponentsByClass(ScriptComponent).find(component => {
            const compiledClass = component.getCompiledClass()
            return clazz && compiledClass instanceof clazz
        })
        return scriptComponent.getCompiledClass()
    }

    /**
     * @param {string} componentName
     * @return {Component}
     */
    getComponentByName(componentName) {
        const component = this.findComponentByName(componentName)
        if (!component) {
            const clazz = EEClass[componentName]
            return this.findComponentsByClass(ScriptComponent).find(scriptComponent => {
                const compiledClass = scriptComponent.getCompiledClass()
                return clazz && compiledClass instanceof clazz
            })
        }
        return component
    }

    /**
     * @return {boolean}
     */
    isSelected() {
        return this.getComponent(GUIPropertyComponent).isSelected()
    }

    /**
     * @return {boolean}
     */
    isVisible() {
        return this.isEnabled()
    }

    /**
     * @return {boolean}
     */
    isEnabled() {
        return this.getEnabled()
    }

    /**
     * @return {boolean}
     */
    isLocked() {
        return this.getComponent(GUIPropertyComponent).isLocked()
    }

    /**
     * @return {boolean}
     */
    isFocused() {
        return this.getComponent(GUIPropertyComponent).isFocused()
    }

    select() {
        this.getComponent(GUIPropertyComponent).setSelected(true)
    }

    unselect() {
        this.getComponent(GUIPropertyComponent).setSelected(false)
    }

    focus() {
        this.getComponent(GUIPropertyComponent).setFocused(true)
    }

    unfocus() {
        this.getComponent(GUIPropertyComponent).setFocused(false)
    }

    /**
     * @param {World} world
     * @return {number}
     */
    getRank(world) {
        return world.getRankUnit(this)
    }

}

export const PrimitiveShape = {
    RECT: 'rect',
    RECT_STROKE: 'rect_stroke',
    CIRCLE: 'circle',
    LIGHT_POINT: 'light_point',
    LINE: 'line',
    ARROW_RIGHT: 'arrow_right',
    ARROW_DOWN: 'arrow_down',
    ARROW_RECT_RIGHT: 'arrow_rect_right',
    ARROW_RECT_DOWN: 'arrow_rect_down',
    GRID: 'grid',
    RECT_CROSS: 'rect_cross',
    NODE: 'node',
    CAMERA: 'camera',
    TEXT: 'text',
    CURVE: 'curve',
    EDGE: 'edge'
}