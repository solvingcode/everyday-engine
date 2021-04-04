import ImageUI from '../image/ImageUI.js'
import World from '../../../../../world/World.js'

class UnitUI {

    /**
     * Get screen shot of the entity as image
     * @param {Unit} unit
     * @param {{width: number, height: number}} props
     * @param {number} version
     */
    static getImage(unit, props, version = 0) {
        const mesh = World.get().getMeshManager().get(unit.getId())
        return mesh && ImageUI.getImage(mesh, props, version)
    }

}

export default UnitUI