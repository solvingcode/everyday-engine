import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import EditAnimationDisplayMenuItem from './EditAnimationDisplayMenuItem.js'
import World from '../../../../world/World.js'
import EditAnimationTimelineMenuItem from './EditAnimationTimelineMenuItem.js'

export default class EditAnimationWrapperMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'animation-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.items = [
            new EditAnimationDisplayMenuItem(this, this.getAnimation()),
            new EditAnimationTimelineMenuItem(this, this.getAnimation())
        ]
    }

    /**
     * @return {Animation}
     */
    getAnimation(){
        const world = World.get()
        const tabManager = world.getTabManager()
        return world.getAnimationManager().getSelected(tabManager)
    }
}