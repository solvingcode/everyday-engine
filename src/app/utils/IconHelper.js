import CameraComponent from '../component/internal/CameraComponent.js'
import LightComponent from '../component/internal/LightComponent.js'
import Unit from '../unit/Unit.js'
import Scene from '../scene/Scene.js'
import ClientError from '../exception/type/ClientError.js'

export default class IconHelper {
    /**
     * @param {*} object
     * @return {string}
     */
    static getIconName(object) {
        if (object instanceof Unit) {
            return this.getUnitIconName(object)
        } else if (object instanceof Scene) {
            return 'layer-group'
        }
        throw new ClientError(`${this.constructor.name} No icon set for "${object.constructor.name}"`)
    }

    /**
     * @param {Unit} unit
     * @return {string}
     */
    static getUnitIconName(unit) {
        let icon
        if (unit.getComponent(CameraComponent)) {
            icon = 'video'
        } else if (unit.hasComponentsByClasses([LightComponent])) {
            icon = 'lightbulb'
        } else {
            icon = 'vector-square'
        }
        return icon
    }
}