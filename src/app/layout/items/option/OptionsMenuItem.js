import OptionActionsMenuItem from './OptionActionsMenuItem.js'
import OptionHelper from '../../../utils/OptionHelper.js'

export default class OptionsMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super(OptionHelper.getList(bindObject), position, size)
    }
}