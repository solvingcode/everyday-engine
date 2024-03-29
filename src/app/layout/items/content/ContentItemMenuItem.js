import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class ContentItemMenuItem extends MenuItem{

    /**
     * @param {MenuItem} parent
     * @param {Content} data
     */
    constructor(parent, data) {
        super({
            stateCode: '',
            name: '',
            zone: Layout.zone.BODY,
            type: Layout.type.BODY_ITEM
        })
        this.parent = parent
        this.data = data
    }

}