import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * @class {ListMenuItem}
 */
class ListMenuItem extends PanelMenuItem {
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
        throw new TypeError('ListMenuItem.getFormObject must be implemented')
    }

    /**
     * @return {MenuItem[]}
     * @param {*} bindObject
     * @abstract
     */
    getActions(bindObject){
        throw new TypeError('ListMenuItem.getActions must be implemented')
    }

    /**
     * @return {MenuItem}
     * @abstract
     */
    getListElementFormClass(){
        throw new TypeError(`${this.constructor.name}.getListElementFormClass must be implemented`)
    }

    /**
     * @override
     */
    update() {
        super.update()
        const list = this.getFormObject()
        this.items = list.map((each, index) => {
            const element = this.items[index]
            const data = {bind: each, list}
            const listElementClass = this.getListElementFormClass()
            if (element && (element.data.bind !== each || element.data.list !== list)) {
                element.setData(data)
            }
            return element || new listElementClass(this, data)
        })
    }
}

export default ListMenuItem