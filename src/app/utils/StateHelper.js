import Menu from '../layout/Menu.js'
import StateManager from '../state/StateManager.js'
import LayerMenuItem from '../layout/items/layer/LayerMenuItem.js'
import FolderTreeMenuItem from '../layout/items/assets/folder/FolderTreeMenuItem.js'
import AssetsListMenuItem from '../layout/items/assets/file/AssetsListMenuItem.js'
import ContentCanvasMenuItem from '../layout/items/content/ContentCanvasMenuItem.js'
import World from '../world/World.js'

export default class StateHelper {
    /**
     * @return {{copy: string, delete: string, paste: string}}
     */
    static getSectionStates() {
        const world = World.get()
        const menuItemUI = Menu.get().getActiveSection()
        let stateCodes = {copy: '', delete: '', paste: ''}
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
                    break
                case ContentCanvasMenuItem:
                    const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
                    if (!script) {
                        stateCodes.delete = 'CONFIRM_ACTION_DELETE_UNIT'
                        stateCodes.copy = 'CONFIRM_ACTION_COPY_UNIT'
                        stateCodes.paste = 'CONFIRM_ACTION_PASTE_UNIT'
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

    static startDeleteSectionState() {
        const stateManager = StateManager.get()
        const stateCode = this.getDeleteSectionState()
        if (stateCode) {
            stateManager.startState(stateCode, 1)
        }
    }

    static startCopySectionState() {
        const stateManager = StateManager.get()
        const stateCode = this.getCopySectionState()
        if (stateCode) {
            stateManager.startState(stateCode, 1)
        }
    }

    static startPasteSectionState() {
        const stateManager = StateManager.get()
        const stateCode = this.getPasteSectionState()
        if (stateCode) {
            stateManager.startState(stateCode, 1)
        }
    }
}