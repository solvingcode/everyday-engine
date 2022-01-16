import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import CrudPanelMenuItem from './CrudPanelMenuItem.js'
import SystemError from '../../../exception/type/SystemError.js'

/**
 * @abstract
 */
export default class CrudMenuItem extends MenuItem {
    /**
     * @param {string} title
     * @param {*} formData
     */
    constructor(title, formData) {
        super({
            name: 'default-form-wrapper',
            stateCode: '',
            zone: Layout.zone.RIGHT,
            type: Layout.type.WRAPPER
        })
        this.items = [
            new CrudPanelMenuItem(this, title, formData)
        ]
    }

    /**
     * @abstract
     * @return {*[]}
     */
    getList(){
        throw new SystemError(`${this.constructor.name}.getList must be implemented`)
    }

}