import ListSelectElementActionsMenuItem from '../../../list/ListSelectElementActionsMenuItem.js'
import Layout from '../../../../Layout.js'
import AppState from '../../../../../state/AppState.js'
import FormUpdateAction from '../../../../../runner/action/form/FormUpdateAction.js'
import ACondition from '../../../../../flow/condition/ACondition.js'
import AThen from '../../../../../flow/promise/AThen.js'
import ALoop from '../../../../../flow/loop/ALoop.js'
import APromise from '../../../../../flow/promise/APromise.js'
import AReference from '../../../../../flow/reference/AReference.js'
import AClassVariable from '../../../../../flow/function/variable/AClassVariable.js'
import ABranch from '../../../../../flow/branch/ABranch.js'

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
        if (this.data.bind instanceof ACondition) {
            return 'code-branch'
        } else if (this.data.bind instanceof ABranch) {
            return 'code-branch'
        } else if (this.data.bind instanceof AThen) {
            return 'greater-than'
        } else if (this.data.bind instanceof ALoop) {
            return 'undo'
        } else if (this.data.bind instanceof APromise) {
            return 'sync'
        } else if (this.data.bind instanceof AReference) {
            return 'asterisk'
        } else if (this.data.bind instanceof AClassVariable) {
            return 'check-double'
        }
        return 'wave-square'
    }

    /**
     * @override
     */
    isButton() {
        return true
    }
}