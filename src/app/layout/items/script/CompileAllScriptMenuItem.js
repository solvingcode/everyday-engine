import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

export default class CompileAllScriptMenuItem extends MenuItem {
    constructor() {
        super({
            id: 1,
            name: 'Compile all',
            stateCode: 'ACTION_COMPILE_ALL_SCRIPT',
            type: Layout.type.BUTTON,
            zone: Layout.zone.TOP
        })
    }
}