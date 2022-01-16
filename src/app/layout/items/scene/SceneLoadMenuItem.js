import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class SceneLoadMenuItem extends MenuItem {

    /**
     * @param {Scene} scene
     */
    constructor(scene) {
        super({
            name: 'Load scene',
            stateCode: 'ACTION_LOAD_SCENE',
            type: Layout.type.BUTTON,
            zone: Layout.zone.WINDOW
        })
        this.text = ['Load scene']
        this.data = {scene}
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && !this.data.scene.isIncluded()
    }

}