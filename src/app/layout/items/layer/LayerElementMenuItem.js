import Layout from '../../Layout.js'
import ListSelectElementActionsMenuItem from '../list/ListSelectElementActionsMenuItem.js'
import IconHelper from '../../../utils/IconHelper.js'
import LayerListMenuItem from './LayerListMenuItem.js'
import Unit from '../../../unit/Unit.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

export default class LayerElementMenuItem extends ListSelectElementActionsMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            stateCode: 'ACTION_SELECT_LAYER_ELEMENT',
            dragStateCode: 'ACTION_ATTACH_LAYER_ELEMENT',
            type: Layout.type.LIST_ELEMENT
        })
    }

    /**
     * @override
     */
    setData(data) {
        super.setData(data)
        this.items = this.items.concat([
            new LayerListMenuItem(this, this.parent.props, data.bind)
        ])
    }

    /**
     * @override
     */
    getIcon() {
        return IconHelper.getIconName(this.getDataBind())
    }

    /**
     * @override
     */
    isButton() {
        return true
    }

    /**
     * @override
     */
    isReadOnly() {
        return !this.getDataBind().isEnabled()
    }

    /**
     * @override
     */
    isLocked() {
        if (this.getDataBind() instanceof Unit) {
            return this.getDataBind().getComponent(GUIPropertyComponent).isLocked()
        }
        return false
    }

    /**
     * @override
     */
    isDraggable() {
        return true
    }

    /**
     * @override
     */
    isRightClick() {
        return true
    }

    /**
     * @override
     */
    isCollapsable() {
        return true
    }

}