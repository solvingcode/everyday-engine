import MenuItem from '../../MenuItem.js'

/**
 * @property {{bind: Object, list: *[]}} data
 */
export default class ListElementMenuItem extends MenuItem {
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