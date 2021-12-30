import CrudMenuItem from '../../crud/CrudMenuItem.js'
import World from '../../../../world/World.js'
import AnimatorScript from '../../../../flow/AnimatorScript.js'
import AnimationScript from '../../../../flow/AnimationScript.js'

export default class ScriptAnimationsMenuItem extends CrudMenuItem {
    constructor() {
        super('Animations', new AnimationScript())
    }

    /**
     * @override
     */
    getList() {
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        return script instanceof AnimatorScript && script.getAnimations()
    }
}
