import Layout from '../../Layout.js'
import PanelMenuItem from '../panel/PanelMenuItem.js'
import CrudListMenuItem from './list/CrudListMenuItem.js'
import AddCrudPopupButtonMenuItem from './add/AddCrudPopupButtonMenuItem.js'

export default class CrudPanelMenuItem extends PanelMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {string} title
     * @param {*} formData
     */
    constructor(parent, title, formData) {
        super({
            name: 'list',
            title,
            zone: Layout.zone.RIGHT
        }, parent)
        this.items = [
            new AddCrudPopupButtonMenuItem(this, formData),
            new CrudListMenuItem(this)
        ]
        this.collapsed = true
    }

    /**
     * @override
     */
    isSection() {
        return true
    }

    /**
     * @return {*[]}
     */
    getList(){
        return this.parent.getList()
    }

}