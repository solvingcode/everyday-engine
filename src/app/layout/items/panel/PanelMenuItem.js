import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class PanelMenuItem extends MenuItem{

    /**
     * @param {*} props
     * @param {MenuItem} parent
     */
    constructor(props, parent) {
        super({
            stateCode: '',
            type: Layout.type.PANEL,
            ...props
        }, parent)
        this.data = {bind: this}
    }

}