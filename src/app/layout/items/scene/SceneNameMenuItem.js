import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class SceneNameMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {Scene} scene
     */
    constructor(parent, scene) {
        super({
            name: 'layer-group',
            title: `${scene.getName()}`,
            stateCode: '',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {scene}
    }
}