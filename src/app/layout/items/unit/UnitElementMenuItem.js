import Layout from '../../Layout.js'
import ListSelectElementActionsMenuItem from '../list/ListSelectElementActionsMenuItem.js'

export default class UnitElementMenuItem extends ListSelectElementActionsMenuItem {
    constructor(parent, data) {
        super(parent, data, {type: Layout.type.UNIT_ELEMENT})
    }
}