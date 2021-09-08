import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class OptionActionsTitleMenuItem extends MenuItem {

    /**
     * @param {string} title
     */
    constructor(title) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.TEXT,
            zone: Layout.zone.RIGHT
        })
        this.text = [title]
    }

}