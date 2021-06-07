import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import EditAnimationDisplayMenuItem from './EditAnimationDisplayMenuItem.js'
import EditAnimationTimelineMenuItem from './EditAnimationTimelineMenuItem.js'
import World from '../../../../world/World.js'

export default class EditAnimationWrapperMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'animation-wrapper',
            stateCode: '',
            zone: parent.zone,
            type: Layout.type.WRAPPER
        })
        this.parent = parent
        this.form = {time: 0, samples: 10}
        this.items = [
            new EditAnimationDisplayMenuItem(this, this.getAnimation()),
            new EditAnimationTimelineMenuItem(this, this.getAnimation())
        ]
    }

    /**
     * @override
     */
    update() {
        super.update()
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