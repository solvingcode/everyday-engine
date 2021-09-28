import Menu from '../layout/Menu.js'
import StateManager from '../state/StateManager.js'
import LayerMenuItem from '../layout/items/layer/LayerMenuItem.js'
import FolderTreeMenuItem from '../layout/items/assets/folder/FolderTreeMenuItem.js'
import AssetsListMenuItem from '../layout/items/assets/file/AssetsListMenuItem.js'
import ContentCanvasMenuItem from '../layout/items/content/ContentCanvasMenuItem.js'
import World from '../world/World.js'

export default class StateHelper {
    /**
     * @return {{copy: string, delete: string, paste: string, move: string}}
     */
    static getSectionStates() {
        const world = World.get()
        const menuItemUI = Menu.get().getActiveSection()
        let stateCodes = {copy: '', delete: '', paste: '', move: ''}
        if (menuItemUI) {
            const menuItem = menuItemUI.element
            switch (menuItem.constructor) {
                case LayerMenuItem:
                    stateCodes.delete = 'CONFIRM_ACTION_DELETE_UNIT'
                    stateCodes.copy = 'CONFIRM_ACTION_COPY_UNIT'
                    break
                case FolderTreeMenuItem:
                    stateCodes.delete = 'CONFIRM_ACTION_DELETE_FOLDER'
                    break
                case AssetsListMenuItem:
                    stateCodes.delete = 'CONFIRM_ACTION_DELETE_ASSET'
                    stateCodes.paste = 'ACTION_PASTE_ASSET'
                    break
                case ContentCanvasMenuItem:
                    const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
                    if (!script) {
                        stateCodes.delete = 'CONFIRM_ACTION_DELETE_UNIT'
                        stateCodes.copy = 'ACTION_COPY_UNIT'
                        stateCodes.paste = 'ACTION_PASTE_UNIT'
                        stateCodes.move = 'ACTION_MOVE_UNIT'
                    }else{
                        stateCodes.delete = 'CONFIRM_ACTION_DELETE_SELECTED_NODE'
                        stateCodes.copy = 'ACTION_COPY_SELECTED_NODE'
                        stateCodes.paste = 'ACTION_PASTE_SCRIPT'
                    }
                    break
            }
        }
        return stateCodes
    }

    /**
     * @return {string}
     */
    static getCopySectionState() {
        return this.getSectionStates().copy
    }

    /**
     * @return {string}
     */
    static getDeleteSectionState() {
        return this.getSectionStates().delete
    }

    /**
     * @return {string}
     */
    static getPasteSectionState() {
        return this.getSectionStates().paste
    }

    /**
     * @return {string}
     */
    static getMoveSectionState() {
        return this.getSectionStates().move
    }

    /**
     * @param {*} data
     */
    static startDeleteSectionState(data = null) {
        this.startState(this.getDeleteSectionState(), data)
    }

    /**
     * @param {*} data
     */
    static startCopySectionState(data = null) {
        this.startState(this.getCopySectionState(), data)
    }

    /**
     * @param {*} data
     */
    static startPasteSectionState(data = null) {
        this.startState(this.getPasteSectionState(), data)
    }

    /**
     * @param {*} data
     */
    static startMoveSectionState(data = null) {
        this.startState(this.getMoveSectionState(), data)
    }

    /**
     * @param {string} stateCode
     * @param {*} data
     */
    static startState(stateCode, data){
        const stateManager = StateManager.get()
        if (stateCode) {
            stateManager.startState(stateCode, 1, data)
        }
    }
}