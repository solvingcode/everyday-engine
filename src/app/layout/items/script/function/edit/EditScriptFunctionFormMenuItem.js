import Layout from '../../../../Layout.js'
import FormMenuItem from '../../../form/FormMenuItem.js'
import {ACCESSOR} from '../../../../../flow/function/AFunction.js'
import World from '../../../../../world/World.js'

export default class EditScriptFunctionFormMenuItem  extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     */
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
        return [
            {
                bind: 'name',
                label: 'Name',
                type: Layout.form.TEXT
            },
            {
                bind: 'access',
                label: 'Access',
                type: Layout.form.DROPDOWN,
                list:  [
                    {
                        value: ACCESSOR.PRIVATE,
                        label: 'Private'
                    },
                    {
                        value: ACCESSOR.PROTECTED,
                        label: 'Protected'
                    },
                    {
                        value: ACCESSOR.PUBLIC,
                        label: 'Public'
                    }
                ]
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
    }
}