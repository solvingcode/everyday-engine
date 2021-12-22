import ListSelectElementActionsMenuItem from '../../../list/ListSelectElementActionsMenuItem.js'
import Layout from '../../../../Layout.js'
import AppState from '../../../../../state/AppState.js'
import FormUpdateAction from '../../../../../runner/action/form/FormUpdateAction.js'

export default class NewScriptNodeElementMenuItem extends ListSelectElementActionsMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            stateCode: 'ACTION_NEW_SCRIPT_NODE',
            preStateCode: {
                type: AppState.ActionType.STOP_NEXT,
                stateCode: FormUpdateAction.STATE
            },
            postStateCode: 'ACTION_CLOSE_CONTENT_POPUP',
            type: Layout.type.LIST_ELEMENT
        })
    }

    /**
     * @override
     */
    getIcon() {
        return 'wave-square'
    }

    /**
     * @override
     */
    isButton() {
        return true
    }
}