import ListElementMenuItem from './ListElementMenuItem.js'

/**
 * @property {{bind: Object, list: *[]}} data
 */
export default class ListElementActionsMenuItem extends ListElementMenuItem {
    constructor(parent, data, props) {
        super(parent, data, {
            name: '',
            zone: parent.zone,
            ...props
        })
        this.parent = parent
        this.setData(data)
    }

    /**
     * @override
     */
    setData(data){
        super.setData(data)
        this.items = this.parent.getActions(this.data.bind)
    }
}