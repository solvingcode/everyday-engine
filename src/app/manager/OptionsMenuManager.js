export default class OptionsMenuManager {

    static instance

    /**
     * @type {OptionActionsMenuItem}
     */
    menu

    /**
     * @return {OptionActionsMenuItem}
     */
    getMenu(){
        return this.menu
    }

    /**
     * @param {OptionActionsMenuItem} menu
     */
    setMenu(menu){
        this.menu = menu
    }

    clear(){
        this.menu = null
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