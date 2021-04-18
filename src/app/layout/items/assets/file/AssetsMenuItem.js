import Layout from '../../../Layout.js'
import PanelMenuItem from '../../panel/PanelMenuItem.js'
import AssetsActionsMenuItem from '../AssetsActionsMenuItem.js'
import AssetsWrapperMenuItem from './AssetsWrapperMenuItem.js'

export default class AssetsMenuItem extends PanelMenuItem {
    constructor() {
        super({
            name: 'folder',
            title: 'Assets',
            zone: Layout.zone.BOTTOM
        })
        this.items = [
            new AssetsActionsMenuItem(this),
            new AssetsWrapperMenuItem(this)
        ]
    }
}