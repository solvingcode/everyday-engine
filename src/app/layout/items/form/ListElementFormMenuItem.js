import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * @class {ListElementFormMenuItem}
 * @property {{bind: Object, list: *[]}} data
 */
class ListElementFormMenuItem extends MenuItem {
    constructor(parent, data) {
        super({
            name: '',
            stateCode: 'ACTION_SELECT_LIST_ELEMENT',
            type: Layout.type.LIST_ELEMENT,
            zone: parent.zone
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