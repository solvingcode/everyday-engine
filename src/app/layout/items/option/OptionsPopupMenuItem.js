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
        const menus = OptionsMenuManager.get().getMenus()
        if (this.items !== menus) {
            this.items = menus
        }
    }

    /**
     * @override
     */
    isValid() {
        return !!OptionsMenuManager.get().getMenus().length
    }
}