import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import TagPanelMenuItem from './TagPanelMenuItem.js'

export default class TagMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'default-form-wrapper',
            stateCode: '',
            zone: Layout.zone.RIGHT,
            type: Layout.type.WRAPPER
        })
        this.items = [
            new TagPanelMenuItem()
        ]
    }
}