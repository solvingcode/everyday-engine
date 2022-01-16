import Tab from '../content/Tab.js'
import TabManagerData from '../project/data/TabManagerData.js'
import SystemError from '../exception/type/SystemError.js'

export default class TabManager extends TabManagerData {

    constructor() {
        super()
        this.tabs = []
    }

    /**
     * @return {Tab}
     */
    getSelected() {
        return this.tabs.find(tab => tab.isSelected())
    }

    /**
     * @return {*}
     */
    getSelectedContentData() {
        const selectedTab = this.getSelected()
        return selectedTab && selectedTab.getContent() && selectedTab.getContent().getData()
    }

    /**
     * @param {number} id
     * @return {Tab}
     */
    findById(id) {
        return this.tabs.find(tab => tab.getId() === id)
    }

    /**
     * @param {string} name
     * @return {Tab}
     */
    findByName(name) {
        return this.tabs.find(tab => tab.getName() === name)
    }

    /**
     * @param {*} data
     * @return {Tab}
     */
    findByData(data) {
        return this.tabs.find(tab => tab.getContent().getData() === data)
    }

    /**
     * @param {string} name
     * @param {Content} content
     * @return {Tab}
     */
    create(name, content = null) {
        const tab = new Tab(name, content)
        this.tryAdd(tab)
        this.activate(tab)
        return tab
    }

    /**
     * @param {string} name
     * @param {Content} content
     * @return {Tab}
     */
    createOrActivate(name, content) {
        const existTab = this.findByName(name)
        if (existTab) {
            this.activate(existTab)
        } else {
            this.create(name, content)
        }
    }

    /**
     * @param {Tab} tab
     */
    activate(tab) {
        if(tab){
            this.tabs.forEach(pTab => pTab.unselect())
            const existTab = this.findByName(tab.getName())
            if (existTab) {
                existTab.select()
            } else {
                throw new SystemError(`Tab with name "${tab.getName()}" not found`)
            }
        }
    }

    /**
     * @param {Tab} tab
     */
    remove(tab) {
        const indexTab = this.tabs.findIndex(pTab => pTab === tab)
        if (indexTab >= 0) {
            this.tabs.splice(indexTab, 1)
            this.activate(this.tabs[indexTab - 1])
        } else {
            throw new SystemError(`Cannot remove Tab Id ${tab.getId()} : Not found`)
        }
    }

    /**
     * @param {Tab} tab
     */
    tryAdd(tab) {
        const existTab = this.findByName(tab.getName())
        if (existTab) {
            throw new SystemError(`Tab with name "${tab.getName()}" already exist!`)
        }
        this.tabs.push(tab)
    }

    init() {
        const scene = this.findByName('Scene')
        if (scene) {
            scene.protected = true
        }else{
            this.create('Scene').protected = true
        }
    }

}