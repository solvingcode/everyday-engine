import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'

export default class OptionActionsMenuItem extends MenuItem {
    /**
     * @param {MenuItem[]} actions
     * @param {Vector} position
     * @param {Size} size
     */
    constructor(actions, position, size) {
        super({
            name: 'option-actions-wrapper',
            stateCode: '',
            zone: Layout.zone.WINDOW,
            type: Layout.type.WRAPPER
        })
        this.items = actions
        this.position = position
        this.size = size
    }
}