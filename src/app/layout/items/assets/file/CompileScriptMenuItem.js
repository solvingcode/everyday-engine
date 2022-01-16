import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'

export default class CompileScriptMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'code',
            title: 'Compile',
            stateCode: 'ACTION_COMPILE_SCRIPT',
            type: Layout.type.ICON_TEXT,
            zone: parent ? parent.zone : Layout.zone.WINDOW
        })
        this.parent = parent
    }

    /**
     * @override
     */
    isValid() {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return super.isValid() && script
    }
}
