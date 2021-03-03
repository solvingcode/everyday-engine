import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class PanelMenuItem extends MenuItem{

    constructor(props) {
        super({
            stateCode: 'ACTION_COLLAPSE_PANEL',
            type: Layout.type.PANEL,
            ...props
        })
    }

}