import Layout from '../../../Layout.js'
import MenuItem from '../../../MenuItem.js'

export default class ScriptNodeNameMenuItem extends MenuItem {
    /**
     * @param {MenuItem} parent
     * @param {ANode} node
     */
    constructor(parent, node) {
        super({
            name: 'sitemap',
            title: node.getName(),
            stateCode: '',
            type: Layout.type.ICON_TEXT,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {node}
    }
}