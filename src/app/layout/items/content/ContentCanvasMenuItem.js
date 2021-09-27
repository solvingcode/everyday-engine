import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import UIHelper from '../../../utils/UIHelper.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import World from '../../../world/World.js'

export default class ContentCanvasMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'content-canvas',
            stateCode: '',
            dragStateCode: 'ACTION_ATTACH_EDITOR',
            zone: Layout.zone.CANVAS,
            type: Layout.type.WRAPPER
        })
        this.items = []
    }

    /**
     * @override
     */
    isValid() {
        return true
    }

    /**
     * @override
     */
    isSection() {
        return true
    }

    /**
     * @override
     */
    isRightClick() {
        return true
    }

    /**
     * @override
     */
    getDataBind() {
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        if (!script) {
            return UnitSelector.get().getFirstSelected(World.get()) || UIHelper.UI.SCENE
        } else {
            return UIHelper.UI.SCRIPT
        }
    }

}