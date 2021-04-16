import Tab from '../content/Tab.js'

export default class TabManager {

    static instance

    /**
     * @type {Tab[]}
     */
    tabs

    constructor() {
        this.tabs = []
    }

    /**
     * @return {Tab[]}
     */
    getTabs(){
        return this.tabs
    }

    /**
     * @return {Tab}
     */
    getSelected(){
        return this.tabs.find(tab => tab.isSelected())
    }

    /**
     * @param {string} name
     * @return {Tab}
     */
    findByName(name){
        return this.tabs.find(tab => tab.getName() === name)
    }

    /**
     * @param {string} name
     * @param {Content} content
     * @return {Tab}
     */
    create(name, content){
        const tab = new Tab(name, content)
        this.tryAdd(tab)
        this.activate(tab)
        return tab
    }

    /**
     * @param {Tab} tab
     */
    activate(tab) {
        this.tabs.forEach(pTab => pTab.unselect())
        const existTab = this.findByName(tab.getName())
        if (existTab) {
            existTab.select()
        } else {
            throw new TypeError(`Tab with name "${tab.getName()}" not found`)
        }
    }

    /**
     * @param {Tab} tab
     */
    tryAdd(tab) {
        const existTab = this.findByName(tab.getName())
        if(existTab){
            throw new TypeError(`Tab with name "${tab.getName()}" already exist!`)
        }
        this.tabs.push(tab)
    }

    /**
     * @return {TabManager}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}