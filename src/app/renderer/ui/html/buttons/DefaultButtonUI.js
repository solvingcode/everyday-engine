import ItemUI from '../ItemUI.js'

class DefaultButtonUI extends ItemUI {
    /**
     * Draw a default button.
     * @param {MenuItemUI} item
     * @param {UIRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        uiRenderer.getElement(item)
    }

    /**
     * @override
     */
    static postCreate(item, el) {
        el.textContent = item.element.props.name
    }

    /**
     * @override
     */
    static postUpdate(item, el) {
        const {name} = item.element.props
        if (el.textContent !== name) {
            el.textContent = name
        }
    }

    /**
     * @override
     */
    static getClassName(item) {
        const {data} = item.element
        const classNames = []
        if (data.optionActionsMenuItem) {
            classNames.push('option-actions-trigger')
        }
        return classNames.join(' ')
    }
}

DefaultButtonUI.props = {
    tag: 'button',
    prefix: 'default-button-'
}

export default DefaultButtonUI