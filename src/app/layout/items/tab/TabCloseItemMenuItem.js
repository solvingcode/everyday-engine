import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'

export default class TabCloseItemMenuItem extends MenuItem{

    constructor(parent, data) {
        super({
            stateCode: 'ACTION_CLOSE_TAB',
            name: 'times',
            title: 'Close',
            zone: parent.zone,
            type: Layout.type.ICON
        }, parent)
        this.data = data
    }

}