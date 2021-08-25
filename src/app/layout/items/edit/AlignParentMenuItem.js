import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import TransformComponent from '../../../component/internal/TransformComponent.js'

export default class AlignParentMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Align to parent',
            stateCode: 'ACTION_ALIGN_PARENT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }

    /**
     * @override
     */
    isEnabled() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        return selectedUnit && !!selectedUnit.getUnitParentId() && !!selectedUnit.getComponent(TransformComponent)
    }
}