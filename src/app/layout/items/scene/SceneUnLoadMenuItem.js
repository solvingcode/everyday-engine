import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class SceneUnLoadMenuItem extends MenuItem {

    /**
     * @param {Scene} scene
     */
    constructor(scene) {
        super({
            name: 'Unload scene',
            stateCode: 'ACTION_UNLOAD_SCENE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.WINDOW
        })
        this.text = ['Unload scene']
        this.data = {scene}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && this.data.scene.isIncluded()
    }

}