import Menu from '../layout/Menu.js'
import StateManager from '../state/StateManager.js'
import LayerMenuItem from '../layout/items/layer/LayerMenuItem.js'
import FolderTreeMenuItem from '../layout/items/assets/folder/FolderTreeMenuItem.js'
import AssetsListMenuItem from '../layout/items/assets/file/AssetsListMenuItem.js'

export default class StateHelper {
    /**
     * @return {{copy: string, delete: string}}
     */
    static getSectionStates() {
        const menuItemUI = Menu.get().getActiveSection()
        let stateCodes = {copy: '', delete: ''}
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
}