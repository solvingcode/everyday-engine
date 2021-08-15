import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class OptionActionsButtonEllipsisMenuItem extends MenuItem {

    /**
     * @param {OptionActionsMenuItem} optionActionsMenuItem
     * @param {*} object
     */
    constructor(optionActionsMenuItem, object = null) {
        super({
            name: 'ellipsis-v',
            title: 'Options',
            stateCode: 'ACTION_OPEN_OPTION',
            type: Layout.type.ICON,
            zone: Layout.zone.RIGHT
        })
        this.data = {optionActionsMenuItem, object}
    }

}