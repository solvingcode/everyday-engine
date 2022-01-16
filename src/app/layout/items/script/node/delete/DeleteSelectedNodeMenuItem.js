import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'
import World from '../../../../../world/World.js'

export default class DeleteSelectedNodeMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'trash',
            title: 'Remove selected node',
            stateCode: 'CONFIRM_ACTION_DELETE_SELECTED_NODE',
            type: Layout.type.ICON_TEXT,
            zone: Layout.zone.WINDOW
        })
    }

    /**
     * @override
     */
    isValid() {
        const world = World.get()
        const selectedGraphUnits = world.getGraphManager().getSelectedNodes()
        return super.isValid() && !!selectedGraphUnits.length
    }
}
