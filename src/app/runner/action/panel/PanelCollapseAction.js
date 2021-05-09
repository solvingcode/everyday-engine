import Action from '../Action.js'
import Menu from '../../../layout/Menu.js'

export default class PanelCollapseAction extends Action {

    /**
     * @override
     * @param {Mouse} mouse
     */
    static run(mouse) {
        const uiRenderer = Menu.get().getUIRenderer()
        const menuItem = uiRenderer.getItemAt(mouse)
        if(menuItem){
            const {element} = menuItem
            element.setCollapsed(!element.isCollapsed())
        }
        return true
    }

}