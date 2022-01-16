import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'
import World from '../../../../../world/World.js'

export default class CopySelectedNodeMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'copy',
            title: 'Copy selected node',
            stateCode: 'ACTION_COPY_SELECTED_NODE',
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
