import SceneData from '../project/data/SceneData.js'

export default class Scene extends SceneData {

    /**
     * @param {boolean}
     */
    selected = false
    /**
     * @type {boolean}
     */
    loaded = false

    /**
     * @return {boolean}
     */
    isLoading(){
        return this.included && !this.loaded
    }

    /**
     * @return {boolean}
     */
    isUnLoading(){
        return !this.included && this.loaded
    }

    isSelected() {
        return this.selected
    }

    select() {
        this.setSelected(true)
    }

    unselect() {
        this.setSelected(false)
    }

    /**
     * @param {boolean} value
     */
    setSelected(value) {
        this.selected = value
    }

    /**
     * @param {boolean} loaded
     */
    setLoaded(loaded) {
        this.loaded = loaded
    }

    /**
     * @return {boolean}
     */
    getLoaded() {
        return this.loaded
    }

    /**
     * @return {boolean}
     */
    isLoaded() {
        return this.getLoaded()
    }

}

export const SceneLoadMode = {
    DEFAULT: '',
    APPEND: 'append'
}