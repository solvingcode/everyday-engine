import ComponentBulkFormMenuItem from './ComponentBulkFormMenuItem.js'
import ComponentElementMenuItem from './ComponentElementMenuItem.js'

export default class ComponentBulkElementMenuItem extends ComponentElementMenuItem{

    /**
     * @override
     */
    doSetData(data) {
        this.items = [
            new ComponentBulkFormMenuItem(this, data)
        ]
    }

}