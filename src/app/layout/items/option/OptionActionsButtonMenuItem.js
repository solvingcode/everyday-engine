import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class OptionActionsButtonMenuItem extends MenuItem {

    /**
     * @param {OptionActionsMenuItem} optionActionsMenuItem
     * @param {*} object
     */
    constructor(optionActionsMenuItem, object) {
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