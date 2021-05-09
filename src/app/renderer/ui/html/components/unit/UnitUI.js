import ImageUI from '../image/ImageUI.js'
import World from '../../../../../world/World.js'
import CameraComponent from '../../../../../component/internal/CameraComponent.js'
import IconUI from '../icon/IconUI.js'

class UnitUI {

    /**
     * Get screen shot of the entity as image
     * @param {Unit} unit
     * @param {{width: number, height: number}} props
     * @param {number} version
     */
    static getImage(unit, props, version = 0) {
        if(unit.getComponent(CameraComponent)){
            const icon = IconUI.createIcon('video')
            icon.id = `${version}`
            return icon
        }else{
            const mesh = World.get().getMeshManager().get(unit.getId())
            return mesh && ImageUI.getImage(mesh, props, version)
        }
    }

}

export default UnitUI