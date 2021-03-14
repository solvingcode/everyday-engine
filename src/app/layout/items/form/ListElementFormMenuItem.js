import MenuItem from '../../MenuItem.js'

/**
 * @class {ListElementFormMenuItem}
 * @property {{bind: Object, list: *[]}} data
 */
class ListElementFormMenuItem extends MenuItem {
    constructor(parent, data, props) {
        super({
            name: '',
            stateCode: 'ACTION_SELECT_LIST_ELEMENT',
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
        this.data = data
        this.items = this.parent.getActions(this.data.bind)
    }

    /**
     * @override
     */
    isSelected() {
        return this.getDataBind().isSelected()
    }

    /**
     * @override
     */
    isValid() {
        return super.isValid() && this.parent.getFormObject().includes(this.getDataBind())
    }

    /**
     * @return {Object}
     */
    getDataBind() {
        return this.data.bind
    }
}

export default ListElementFormMenuItem