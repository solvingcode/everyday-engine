import PanelMenuItem from '../../../panel/PanelMenuItem.js'
import Layout from '../../../../Layout.js'
import World from '../../../../../world/World.js'
import AssetScriptXml from '../../../../../asset/types/script/AssetScriptXml.js'
import AssetAnimationScriptXml from '../../../../../asset/types/animation/AssetAnimationScriptXml.js'
import NewScriptNodeFormMenuItem from './NewScriptNodeFormMenuItem.js'
import TextMenuItem from '../../../basic/TextMenuItem.js'
import NewScriptNodeListMenuItem from './NewScriptNodeListMenuItem.js'

export default class NewScriptNodeMenuItem  extends PanelMenuItem {
    constructor(parent, props = {}) {
        super({
            name: 'Add node',
            zone: parent ? parent.zone : Layout.zone.WINDOW,
            collapsed: true,
            ...props
        }, parent)
        this.data = new NewScriptNodeForm()
    }

    /**
     * @override
     */
    setupItems() {
        this.items = [
            new TextMenuItem(this, 'Search all actions'),
            new NewScriptNodeFormMenuItem(this, this.data),
            new NewScriptNodeListMenuItem(this, this.data)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const world = World.get()
        const asset = world.getScriptManager().getSelectedAsset(world.getTabManager())
        return super.isValid() && asset
            && (asset.getType() instanceof AssetScriptXml || asset.getType() instanceof AssetAnimationScriptXml)
    }
}

export class NewScriptNodeForm {

    /**
     * @type {string}
     */
    value

    constructor() {
        this.value = ''
    }

    /**
     * @param {string} value
     */
    setValue(value) {
        this.value = value
    }

    /**
     * @return {string}
     */
    getValue() {
        return this.value
    }

}