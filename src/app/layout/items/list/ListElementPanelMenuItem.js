import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * @property {{bind: Object, list: *[]}} data
 */
export default class ListElementPanelMenuItem extends PanelMenuItem {
    constructor(parent, data, props) {
        super({
            name: '',
            zone: parent.zone,
            ...props
        }, parent)
        this.setData(data)
    }

    /**
     * @override
     */
    doSetData(data){
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

    /**
     * @return {string}
     */
    getName(){
        return this.getDataBind().getName()
    }
}