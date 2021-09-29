import Layout from '../../../Layout.js'
import ListSelectElementActionsMenuItem from '../../list/ListSelectElementActionsMenuItem.js'
import StringHelper from '../../../../utils/StringHelper.js'

export default class GameInputElementMenuItem extends ListSelectElementActionsMenuItem {
    constructor(parent, data) {
        super(parent, data, {
            name: '',
            type: Layout.type.LIST_ELEMENT
        })
    }

    /**
     * @override
     */
    getIcon() {
        return 'bookmark'
    }

    /**
     * @override
     */
    isRightClick() {
        return true
    }

    /**
     * @return {GameInput}
     */
    getDataBind() {
        return super.getDataBind()
    }

    /**
     * @override
     */
    getName() {
        const gameInput = this.getDataBind()
        return `${StringHelper.capFirstLetter(gameInput.getName())}[${gameInput.getKey()}] = ${gameInput.getValue().getAttrValue()}`
    }
}