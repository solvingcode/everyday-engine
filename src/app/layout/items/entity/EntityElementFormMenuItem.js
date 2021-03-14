import Layout from '../../Layout.js'
import ListElementFormMenuItem from '../form/ListElementFormMenuItem.js'

/**
 * @class {EntityElementFormMenuItem}
 */
export default class EntityElementFormMenuItem extends ListElementFormMenuItem {
    constructor(parent, data) {
        super(parent, data, {type: Layout.type.ENTITY_ELEMENT})
    }
}