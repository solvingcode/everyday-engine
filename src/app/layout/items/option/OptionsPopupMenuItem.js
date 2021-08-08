import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import OptionsMenuManager from '../../../manager/OptionsMenuManager.js'

export default class OptionsPopupMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'options-popup',
            stateCode: '',
            zone: Layout.zone.WINDOW,
            type: Layout.type.WRAPPER
        })
        this.items = []
    }

    update() {
        const menu = OptionsMenuManager.get().getMenu()
        if (this.items[0] !== menu) {
            this.items = [menu]
        }
    }

    /**
     * @override
     */
    isValid() {
        return !!OptionsMenuManager.get().getMenu()
    }
}