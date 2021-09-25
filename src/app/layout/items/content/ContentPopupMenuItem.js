import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import PopupMenuManager from '../../../manager/PopupMenuManager.js'

export default class ContentPopupMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'content-popup',
            stateCode: '',
            zone: Layout.zone.WINDOW,
            type: Layout.type.WRAPPER
        })
        this.items = []
    }

    update() {
        const menu = PopupMenuManager.get().getMenu()
        if (this.items[0] !== menu) {
            this.items[0] = menu
        }
        super.update()
    }

    /**
     * @override
     */
    isValid() {
        return !!PopupMenuManager.get().getMenu()
    }
}