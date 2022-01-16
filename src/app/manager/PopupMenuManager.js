export default class PopupMenuManager {

    static instance

    /**
     * @type {MenuItem}
     */
    menu

    /**
     * @type {boolean}
     */
    initialized = false

    /**
     * @return {MenuItem}
     */
    getMenu(){
        return this.menu
    }

    /**
     * @param {MenuItem} menuItem
     */
    setMenu(menuItem){
        this.menu = menuItem
    }

    /**
     * @param {boolean} initialized
     */
    setInitialized(initialized){
        this.initialized = initialized
    }

    /**
     * @return {boolean}
     */
    isInitialized(){
        return this.initialized
    }

    clear(){
        this.menu = null
        this.initialized = false
    }

    /**
     * @return {PopupMenuManager}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}