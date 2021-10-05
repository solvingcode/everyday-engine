import Layout from '../../../Layout.js'
import World from '../../../../world/World.js'
import FormMenuItem from '../../form/FormMenuItem.js'

export default class EditScriptFormMenuItem extends FormMenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    generateFields() {
        const world = World.get()
        const scripts = world.getScriptManager().getScripts()
            .map(script => ({value: script.getName(), label: script.getName()}))
        return [
            {
                bind: 'parentName',
                label: 'Parent',
                type: Layout.form.DROPDOWN,
                list: scripts
            }
        ]
    }

    /**
     * @override
     */
    postUpdate(value) {
        this.getFormObject().getMainFunction().setUpdated(true)
    }

    /**
     * @override
     * @return {AScript}
     */
    getFormObject() {
        return World.get().getScriptManager().getSelected(World.get().getTabManager())
    }

}