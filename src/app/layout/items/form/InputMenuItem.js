import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'

/**
 * Input Menu Item
 * Can be used many times by the different menu items;
 * Start/run action must be handled differently
 */
class InputMenuItem extends MenuItem {

    /**
     * @param {MenuItem} parent
     * @param {Object} props
     * @param {callback} value The default value
     * @param {callback} event The event bound to the field
     */
    constructor(parent, props, value, event) {
        super({
            stateCode: 'ACTION_FORM_UPDATE',
            zone: parent.zone,
            type: Layout.type.FORM_ELEMENT,
            isEditing: false,
            ...props
        })
        this.parent = parent
        this.event = this.callbackExecute(event)
        this.value = this.callbackExecute(value)
        this.data = {event, item: this, bind: props.bind}
    }

    /**
     * @param {boolean} isEditing
     */
    setIsEditing(isEditing) {
        this.props.isEditing = isEditing
    }

    /**
     * @return {boolean}
     */
    isEditing() {
        return this.props.isEditing
    }

    /**
     * Execute callback
     */
    callbackExecute(callback) {
        return () => {
            try {
                return callback()
            } catch (e) {
                console.warn(`Callback error! `, e)
            }
        }
    }

    /**
     * @return {MenuItem}
     */
    getFormMenuItem() {
        return this.findParentFormMenuItem(this)
    }

    /**
     * @param {MenuItem} menuItem
     * @return {MenuItem}
     */
    findParentFormMenuItem(menuItem) {
        if (menuItem.isForm()) {
            return menuItem
        } else {
            return menuItem.parent || this.findParentFormMenuItem(menuItem.parent)
        }
    }

    /**
     * Input menu item must be valid as the parent keeps valid
     * @override
     */
    isValid() {
        return this.parent.isValid()
    }
}

export default InputMenuItem