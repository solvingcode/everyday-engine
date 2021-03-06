import Layout from '../../Layout.js'
import ListElementFormMenuItem from './ListElementFormMenuItem.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'

/**
 * @class {ListFormMenuItem}
 */
class ListFormMenuItem extends PanelMenuItem {
    constructor(props) {
        super({
            name: '',
            zone: Layout.zone.RIGHT,
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
     * @override
     */
    update() {
        const list = this.getFormObject()
        this.items = list.map((each, index) => {
            const element = this.items[index]
            const data = {bind: each, list}
            if (element && element.data.bind !== each) {
                element.setData(data)
            }
            return element || new ListElementFormMenuItem(this, data)
        })
    }
}

export default ListFormMenuItem