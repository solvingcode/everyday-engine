import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'

export default class ComponentDeleteMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {*} data
     */
    constructor(parent, data) {
        super({
            name: 'times',
            title: 'Delete component',
            stateCode: 'ACTION_DELETE_COMPONENT',
            type: Layout.type.ICON,
            zone: parent.zone
        })
        this.parent = parent
        this.data = data
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && this.data.bind.isRemovable()
    }
}
