import Layout from '../../../Layout.js'
import MenuItem from '../../../MenuItem.js'
import AddScriptNodeFormMenuItem, {AddScriptNodeForm} from './AddScriptNodeFormMenuItem.js'
import AddScriptNodeMenuItem from './AddScriptNodeMenuItem.js'

export default class ScriptNodeActionsMenuItem  extends MenuItem {
    constructor(parent) {
        super({
            name: 'Add new node',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: parent.zone
        })
        this.parent = parent
        const formData = new AddScriptNodeForm()
        this.items = [
            new AddScriptNodeFormMenuItem(this, formData),
            new AddScriptNodeMenuItem(this, formData)
        ]
    }
}