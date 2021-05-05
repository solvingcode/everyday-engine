import AddScriptNodeSubmitMenuItem from './AddScriptNodeSubmitMenuItem.js'
import AddScriptNodeFormMenuItem from './AddScriptNodeFormMenuItem.js'
import PanelMenuItem from '../../../panel/PanelMenuItem.js'
import World from '../../../../../world/World.js'
import AssetScriptXml from '../../../../../asset/types/script/AssetScriptXml.js'

export default class AddScriptNodeMenuItem  extends PanelMenuItem {
    constructor(parent) {
        super({
            name: 'Add node',
            zone: parent.zone
        })
        this.collapsed = true
        this.parent = parent
        const formData = new AddScriptNodeForm()
        this.items = [
            new AddScriptNodeFormMenuItem(this, formData),
            new AddScriptNodeSubmitMenuItem(this, formData)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const world = World.get()
        const asset = world.getScriptManager().getSelectedAsset(world.getTabManager())
        return super.isValid() && asset && asset.getType() instanceof AssetScriptXml
    }
}

export class AddScriptNodeForm {

    /**
     * @type {string}
     */
    type

    /**
     * @type {string}
     */
    value

    constructor() {
        this.type = ''
        this.value = ''
    }

    /**
     * @param {string} type
     */
    setType(type) {
        this.type = type
    }

    /**
     * @return {string}
     */
    getType() {
        return this.type
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