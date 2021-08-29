import PanelMenuItem from '../../../panel/PanelMenuItem.js'
import World from '../../../../../world/World.js'
import AssetScriptXml from '../../../../../asset/types/script/AssetScriptXml.js'
import AddScriptFunctionFormMenuItem from './AddScriptFunctionFormMenuItem.js'
import AddScriptFunctionSubmitMenuItem from './AddScriptFunctionSubmitMenuItem.js'

export default class AddScriptFunctionMenuItem  extends PanelMenuItem {
    constructor(parent) {
        super({
            name: 'Add function',
            zone: parent.zone
        })
        this.collapsed = true
        this.parent = parent
        const formData = new AddScriptFunctionForm()
        this.items = [
            new AddScriptFunctionFormMenuItem(this, formData),
            new AddScriptFunctionSubmitMenuItem(this, formData)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const world = World.get()
        const asset = world.getScriptManager().getSelectedAsset(world.getTabManager())
        return super.isValid() && asset
            && (asset.getType() instanceof AssetScriptXml)
    }
}

export class AddScriptFunctionForm {

    /**
     * @type {string}
     */
    name

    constructor() {
        this.name = ''
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

}