import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class OptionActionsButtonMenuItem extends MenuItem {

    /**
     * @param {string} name
     * @param {OptionActionsMenuItem} optionActionsMenuItem
     * @param {*} object
     * @param {boolean} hasParent
     */
    constructor(name, optionActionsMenuItem, object = null, hasParent = false) {
        super({
            name,
            stateCode: 'ACTION_OPEN_OPTION',
            type: Layout.type.BUTTON,
            zone: Layout.zone.RIGHT
        })
        this.data = {optionActionsMenuItem, object}
        this.hasParent = hasParent
    }

}