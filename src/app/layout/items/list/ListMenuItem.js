import PanelMenuItem from '../panel/PanelMenuItem.js'
import SystemError from '../../../exception/type/SystemError.js'

/**
 * @class {ListMenuItem}
 */
class ListMenuItem extends PanelMenuItem {

    /**
     * @param {*} props
     * @param {MenuItem} parent
     */
    constructor(props, parent) {
        super({
            name: '',
            ...props
        }, parent)
        this.items = []
    }

    /**
     * @return {*[]}
     * @abstract
     */
    getFormObject() {
        throw new SystemError('ListMenuItem.getFormObject must be implemented')
    }

    /**
     * @return {*[]}
     */
    getList(){
        return this.getFormObject()
    }

    /**
     * @return {MenuItem[]}
     * @param {*} bindObject
     * @abstract
     */
    getActions(bindObject){
        throw new SystemError('ListMenuItem.getActions must be implemented')
    }

    /**
     * @return {MenuItem}
     * @abstract
     */
    getListElementFormClass(){
        throw new SystemError(`${this.constructor.name}.getListElementFormClass must be implemented`)
    }

    /**
     * @override
     */
    doSetData(data) {
    }

    /**
     * @override
     */
    doUpdate() {
        const list = this.getList()
        let updated = false
        if(list){
            this.items = list.map((each, index) => {
                const element = this.items[index]
                const data = {bind: each, list}
                const listElementClass = this.getListElementFormClass()
                if (element && (element.data.bind !== each || !_.isEqual(element.data.list, list)
                    || element.props.name !== element.getName())) {
                    element.setData(data)
                    updated = true
                }
                return element || new listElementClass(this, data)
            })
        }
        return updated
    }
}

export default ListMenuItem