export default class OptionsMenuManager {

    static instance

    /**
     * @type {OptionActionsMenuItem[]}
     */
    menus

    constructor() {
        this.menus = []
    }

    /**
     * @param {Function} classType
     * @return {OptionActionsMenuItem}
     */
    getMenu(classType){
        return this.menus.find(menuItem => menuItem instanceof classType)
    }

    /**
     * @param {OptionActionsMenuItem} menuItem
     */
    setMenu(menuItem){
        if(!this.getMenu(menuItem.constructor)){
            this.menus.push(menuItem)
        }else{
            const index = this.menus.findIndex(pMenuItem => pMenuItem instanceof menuItem.constructor)
            this.menus[index] = menuItem
        }
    }

    /**
     * @return {OptionActionsMenuItem[]}
     */
    getMenus(){
        return this.menus
    }

    clear(){
        this.menus = []
    }

    /**
     * @return {OptionsMenuManager}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}