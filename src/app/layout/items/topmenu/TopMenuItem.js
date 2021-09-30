import Layout from '../../Layout.js'
import ListMenuItem from '../list/ListMenuItem.js'
import TopElementMenuItem from './TopElementMenuItem.js'
import FileTopMenuItem from './menus/FileTopMenuItem.js'
import Maths from '../../../utils/Maths.js'
import EditTopMenuItem from './menus/EditTopMenuItem.js'
import OptionActionsButtonMenuItem from '../option/OptionActionsButtonMenuItem.js'
import ScriptTopMenuItem from './menus/ScriptTopMenuItem.js'
import UnitTopMenuItem from './menus/UnitTopMenuItem.js'
import ProjectTopMenuItem from './menus/ProjectTopMenuItem.js'

export default class TopMenuItem extends ListMenuItem {

    constructor() {
        super({
            zone: Layout.zone.TOP_MENU
        })
    }

    /**
     * @override
     */
    getListElementFormClass() {
        return TopElementMenuItem
    }

    /**
     * @override
     */
    getFormObject() {
        return topMenuList
    }

    /**
     * @override
     * @param {Scene|Unit} bindObject
     */
    getActions(bindObject){
        return []
    }

}


class TopMenuElement {

    /**
     * @type {number}
     */
    id

    /**
     * @type {MenuItem}
     */
    menuItem

    /**
     * @param {MenuItem} menuItem
     */
    constructor(menuItem) {
        this.id = Maths.generateId()
        this.menuItem = menuItem
    }

    /**
     * @return {number}
     */
    getId(){
        return this.id
    }

    /**
     * @return {string}
     */
    getName(){
        return ''
    }

    /**
     * @return {boolean}
     */
    isSelected(){
        return false
    }

}

const topMenuList = [
    new TopMenuElement(new OptionActionsButtonMenuItem('File', FileTopMenuItem)),
    new TopMenuElement(new OptionActionsButtonMenuItem('Edit', EditTopMenuItem)),
    new TopMenuElement(new OptionActionsButtonMenuItem('Script', ScriptTopMenuItem)),
    new TopMenuElement(new OptionActionsButtonMenuItem('Unit', UnitTopMenuItem)),
    new TopMenuElement(new OptionActionsButtonMenuItem('Project', ProjectTopMenuItem))
]