import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class SceneLoadMenuItem extends MenuItem {

    /**
     * @param {Scene} scene
     */
    constructor(scene) {
        super({
            name: 'ellipsis-v',
            title: 'Load scene',
            stateCode: 'ACTION_LOAD_SCENE',
            type: Layout.type.ICON,
            zone: Layout.zone.RIGHT
        })
        this.data = {scene}
    }

}