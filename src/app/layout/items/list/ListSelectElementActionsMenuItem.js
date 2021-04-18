import ListElementActionsMenuItem from './ListElementActionsMenuItem.js'

export default class ListSelectElementActionsMenuItem extends ListElementActionsMenuItem {

    constructor(parent, data, props) {
        super(parent, data, {
            stateCode: 'ACTION_SELECT_LIST_ELEMENT',
            ...props
        })
    }

    /**
     * @override
     */
    isSelected() {
        return this.getDataBind().isSelected()
    }

}