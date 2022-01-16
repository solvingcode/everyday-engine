import DefaultButtonUI from './DefaultButtonUI.js'
import IconUI from '../components/icon/IconUI.js'

export default class IconTextButtonUI extends DefaultButtonUI {

    /**
     * @override
     */
    static postCreate(item, el) {
        el.setAttribute(this.props.attrIcon, item.element.props.name)
        el.setAttribute('title', item.element.props.title)
        const title = document.createElement(this.props.tagTitle)
        title.textContent = item.element.props.title
        const icon = IconUI.createIcon(item.element.props.name)
        el.appendChild(icon)
        el.appendChild(title)
    }

    /**
     * @override
     */
    static postUpdate(item, el) {
        const {name, title} = item.element.props
        const attrIconValue = el.getAttribute(this.props.attrIcon)
        const titleValue = el.getAttribute('title')
        if (attrIconValue !== name || titleValue !== title) {
            this.postCreate(item, el)
        }
    }

    static props = {
        tag: 'button',
        tagTitle: 'span',
        tagIcon: 'span',
        attrIcon: 'data-icon'
    }

}