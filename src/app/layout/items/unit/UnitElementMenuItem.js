import Layout from '../../Layout.js'
import ListSelectElementMenuItem from '../list/ListSelectElementMenuItem.js'

export default class UnitElementMenuItem extends ListSelectElementMenuItem {
    constructor(parent, data) {
        super(parent, data, {type: Layout.type.UNIT_ELEMENT})
    }
}