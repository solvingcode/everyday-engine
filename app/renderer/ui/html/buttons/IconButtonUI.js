import DefaultButtonUI from './DefaultButtonUI.js'

class IconButtonUI extends DefaultButtonUI {
    /**
     * @override
     */
    static postCreate(item, el) {
        el.setAttribute(this.props.attrIcon, item.element.props.name)
        el.setAttribute('title', item.element.props.title)
    }

    /**
     * @override
     */
    static postUpdate(item, el) {
        const {name} = item.element.props
        const attrIconValue = el.getAttribute(this.props.attrIcon)
        if (attrIconValue !== name) {
            this.postCreate(item, el)
        }
    }

    /**
     * @override
     */
    static getClassName(item) {
        return `fa-${item.element.props.name}`
    }
}

IconButtonUI.props = {
    tag: 'button',
    attrIcon: 'data-icon',
    width: '40px',
    height: '40px',
    className: 'fas'
}

export default IconButtonUI