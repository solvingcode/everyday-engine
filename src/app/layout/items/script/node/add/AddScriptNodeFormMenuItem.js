import Layout from '../../../../Layout.js'
import MenuItem from '../../../../MenuItem.js'
import AddScriptNodeFormTypeMenuItem from './AddScriptNodeFormTypeMenuItem.js'
import AddScriptNodeFormFunctionMenuItem from './AddScriptNodeFormFunctionMenuItem.js'
import AddScriptNodeFormConstantMenuItem from './AddScriptNodeFormConstantMenuItem.js'
import AddScriptNodeFormUnitMenuItem from './AddScriptNodeFormUnitMenuItem.js'
import AddScriptNodeFormKeyCodeMenuItem from './AddScriptNodeFormKeyCodeMenuItem.js'
import AddScriptNodeFormVarStringMenuItem from './AddScriptNodeFormVarStringMenuItem.js'
import World from '../../../../../world/World.js'
import AddScriptNodeFormAnimationMenuItem from './AddScriptNodeFormAnimationMenuItem.js'
import AddScriptNodeFormComponentMenuItem from './AddScriptNodeFormComponentMenuItem.js'
import AddScriptNodeFormVarToggleMenuItem from './AddScriptNodeFormVarToggleMenuItem.js'

export default class AddScriptNodeFormMenuItem  extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddScriptNodeForm} addNodeForm
     */
    constructor(parent, addNodeForm) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: parent.zone
        })
        this.parent = parent
        this.items = [
            new AddScriptNodeFormTypeMenuItem(this, addNodeForm),
            new AddScriptNodeFormAnimationMenuItem(this, addNodeForm),
            new AddScriptNodeFormComponentMenuItem(this, addNodeForm),
            new AddScriptNodeFormFunctionMenuItem(this, addNodeForm),
            new AddScriptNodeFormConstantMenuItem(this, addNodeForm),
            new AddScriptNodeFormUnitMenuItem(this, addNodeForm),
            new AddScriptNodeFormKeyCodeMenuItem(this, addNodeForm),
            new AddScriptNodeFormVarStringMenuItem(this, addNodeForm),
            new AddScriptNodeFormVarToggleMenuItem(this, addNodeForm)
        ]
    }

    /**
     * @return {Asset}
     */
    getAssetScript(){
        const world = World.get()
        return world.getScriptManager().getSelectedAsset(world.getTabManager())
    }
}