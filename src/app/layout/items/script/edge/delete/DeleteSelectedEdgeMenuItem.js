import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'
import World from '../../../../../world/World.js'

export default class DeleteSelectedEdgeMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'trash',
            title: 'Remove selected edge',
            stateCode: 'CONFIRM_ACTION_DELETE_SELECTED_EDGE',
            type: Layout.type.ICON_TEXT,
            zone: Layout.zone.WINDOW
        })
    }

    /**
     * @override
     */
    isValid() {
        const world = World.get()
        const selectedGraphUnits = world.getGraphManager().getSelectedEdges()
        return super.isValid() && !!selectedGraphUnits.length
    }
}
