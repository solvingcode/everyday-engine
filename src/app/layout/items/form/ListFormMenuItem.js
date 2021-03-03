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
     * @override
     */
    update() {
        const list = this.getFormObject()
        this.items = list.map((each, index) => {
            const element = this.items[index]
            if (element && element.data.bind !== each) {
                element.data.bind = each
            }
            return element || new ListElementFormMenuItem(this, {bind: each, list})
        })
    }
}

export default ListFormMenuItem