import Layout from '../../../../Layout.js'
import MenuItem from '../../../../MenuItem.js'
import AddScriptNodeFormTypeMenuItem from './AddScriptNodeFormTypeMenuItem.js'
import AddScriptNodeFormFunctionMenuItem from './AddScriptNodeFormFunctionMenuItem.js'
import AddScriptNodeFormConstantMenuItem from './AddScriptNodeFormConstantMenuItem.js'
import AddScriptNodeFormUnitMenuItem from './AddScriptNodeFormUnitMenuItem.js'

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
            new AddScriptNodeFormFunctionMenuItem(this, addNodeForm),
            new AddScriptNodeFormConstantMenuItem(this, addNodeForm),
            new AddScriptNodeFormUnitMenuItem(this, addNodeForm)
        ]
    }
}