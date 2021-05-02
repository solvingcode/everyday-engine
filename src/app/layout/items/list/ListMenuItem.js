import PanelMenuItem from '../panel/PanelMenuItem.js'
import ArrayHelper from '../../../utils/ArrayHelper.js'
import SystemError from '../../../exception/type/SystemError.js'

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
    update() {
        super.update()
        const list = this.getList()
        this.items = list.map((each, index) => {
            const element = this.items[index]
            const data = {bind: each, list}
            const listElementClass = this.getListElementFormClass()
            if (element && (element.data.bind !== each || !ArrayHelper.isEqual(element.data.list, list))) {
                element.setData(data)
            }
            return element || new listElementClass(this, data)
        })
    }
}

export default ListMenuItem