import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * @class {ListFormMenuItem}
 */
class ListFormMenuItem extends PanelMenuItem {
    constructor(props) {
        super({
            name: '',
            ...props
        })
        this.items = []
    }

    /**
     * @return {*[]}
     * @abstract
     */
    getFormObject() {
        throw new TypeError('ListFormMenuItem.getFormObject must be implemented')
    }

    /**
     * @return {MenuItem[]}
     * @param {*} bindObject
     * @abstract
     */
    getActions(bindObject){
        throw new TypeError('ListFormMenuItem.getActions must be implemented')
    }

    /**
     * @return {Class<ListElementFormMenuItem>}
     * @abstract
     */
    getListElementFormClass(){
        throw new TypeError(`${this.constructor.name}.getListElementFormClass must be implemented`)
    }

    /**
     * @override
     */
    update() {
        const list = this.getFormObject()
        this.items = list.map((each, index) => {
            const element = this.items[index]
            const data = {bind: each, list}
            const listElementClass = this.getListElementFormClass()
            if (element && element.data.bind !== each) {
                element.setData(data)
            }
            return element || new listElementClass(this, data)
        })
    }
}

export default ListFormMenuItem