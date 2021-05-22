import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'
import World from '../../../../../world/World.js'
import ScriptGraphSelector from '../../../../../selector/ScriptGraphSelector.js'

export default class DeleteSelectedNodeMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'trash',
            title: 'Remove selected node',
            stateCode: 'ACTION_DELETE_SELECTED_NODE',
            type: Layout.type.ICON,
            zone: Layout.zone.LEFT
        })
    }

    /**
     * @override
     */
    isValid() {
        const world = World.get()
        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
        return super.isValid() && !!selectedGraphUnits.length
    }
}
