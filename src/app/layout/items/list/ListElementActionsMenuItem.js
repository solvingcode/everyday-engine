import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * @property {{bind: Object, list: *[]}} data
 */
export default class ListElementActionsMenuItem extends PanelMenuItem {
    constructor(parent, data, props) {
        super({
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
        this.data = data
        this.items = this.parent.getActions(this.data.bind)
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