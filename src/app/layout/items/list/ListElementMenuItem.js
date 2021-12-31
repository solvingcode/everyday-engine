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
        super.setData(data)
        this.props.name = this.getName()
    }

    /**
     * @override
     */
    doSetData(data) {
    }

    /**
     * @override
     */
    isValid() {
        const parentFormObject = this.parent.getFormObject()
        return super.isValid() && parentFormObject && parentFormObject.includes(this.getDataBind())
    }

    /**
     * @return {Object}
     */
    getDataBind() {
        return this.data.bind
    }

    /**
     * @return {number}
     */
    getDataIndex(){
        return this.data.list.findIndex(element => element === this.data.bind)
    }

    /**
     * @return {string}
     */
    getName(){
        return this.getDataBind().getName()
    }

    /**
     * @return {string|null}
     */
    getIcon(){
        return null
    }

    /**
     * @return {boolean}
     */
    isButton(){
        return false
    }

    /**
     * @return {boolean}
     */
    isCollapsable(){
        return false
    }
}