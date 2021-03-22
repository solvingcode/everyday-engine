import ListElementMenuItem from './ListElementMenuItem.js'

export default class ListSelectElementMenuItem extends ListElementMenuItem {

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