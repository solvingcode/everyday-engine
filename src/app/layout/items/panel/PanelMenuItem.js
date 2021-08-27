import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class PanelMenuItem extends MenuItem{

    constructor(props) {
        super({
            stateCode: '',
            type: Layout.type.PANEL,
            ...props
        })
        this.data = {bind: this}
    }

}