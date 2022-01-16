import Data from './Data.js'

export default class TabManagerData extends Data{

    /**
     * @type {Tab[]}
     */
    tabs

    /**
     * @return {Tab[]}
     */
    getTabs(){
        return this.tabs
    }

    /**
     * @param {Tab[]} tabs
     */
    setTabs(tabs){
        this.tabs = tabs
    }

    concatTabs(tabs){
        this.setTabs(tabs)
    }

}