import Layout from '../../Layout.js'
import ComponentAddMenuItem from './ComponentAddMenuItem.js'
import MenuItem from '../../MenuItem.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import World from '../../../world/World.js'

export default class ComponentAddWrapperMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'component-add-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        }, parent)
    }

    /**
     * @override
     */
    setupItems() {
        this.items = [
            new ComponentAddMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && UnitSelector.get().getFirstSelected(World.get())
    }
}