import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import SelectorMenuItem from '../edit/SelectorMenuItem.js'
import MoveMenuItem from '../edit/MoveMenuItem.js'
import ScaleMenuItem from '../edit/ScaleMenuItem.js'
import RotateMenuItem from '../edit/RotateMenuItem.js'
import EditTileMenuItem from '../edit/EditTileMenuItem.js'
import DeleteTileMenuItem from '../edit/DeleteTileMenuItem.js'
import EditAreaTileMenuItem from '../edit/EditAreaTileMenuItem.js'

export default class LeftSectionMenuItem extends MenuItem {
    constructor() {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.WRAPPER,
            zone: Layout.zone.LEFT
        })
        this.items = [
            new SelectorMenuItem(),
            new MoveMenuItem(),
            new ScaleMenuItem(),
            new RotateMenuItem(),
            new EditTileMenuItem(),
            new DeleteTileMenuItem(),
            new EditAreaTileMenuItem()
        ]
    }

    doSetData(data) {
    }
}