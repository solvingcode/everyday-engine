import ItemUI from '../ItemUI.js'

/**
 * @class {ListElementButtonUI}
 */
export default class ListElementButtonUI extends ItemUI {

    /**
     * @param {MenuItemUI} item
     * @param {UIRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        uiRenderer.getElement(item)
    }

    /**
     * @override
     */
    static postCreate(item, el, uiRenderer) {
        const bind = item.element.getDataBind()
        if (bind) {
            const icon = this.getIcon(item)
            if (icon) {
                const imageWrapper = document.createElement('div')
                imageWrapper.className = 'list-element-img-wrapper'
                imageWrapper.appendChild(icon)
                el.appendChild(imageWrapper)
            }
            el.setAttribute('data-list-element-id', bind.getId())
            el.setAttribute('data-list-element-name', bind.getName())
            el.setAttribute('id', item.getId())

            const titleText = this.getTitle(item)
            if (titleText) {
                const title = document.createElement('span')
                title.textContent = this.getTitle(item)
                title.title = this.getTitle(item)
                el.appendChild(title)
            }
        }
    }

    /**
     * @param {MenuItemUI} item
     * @return {string}
     */
    static getTitle(item) {
        return item.element.getName()
    }

    /**
     * @param {MenuItemUI} item
     * @return {HTMLElement | null}
     */
    static getIcon(item) {
        return null
    }

    /**
     * @param {HTMLElement} el
     * @return {HTMLElement | null}
     */
    static getIconElement(el) {
        const imgWrapper = el.getElementsByClassName('list-element-img-wrapper')[0]
        return imgWrapper && imgWrapper.childNodes[0]
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer) {
        const bind = item.element.getDataBind()
        if (bind) {
            const bindId = el.getAttribute('data-list-element-id')
            const bindName = el.getAttribute('data-list-element-name')
            if (parseInt(bindId) !== bind.getId() || bindName !== bind.getName()) {
                this.update(item, el, uiRenderer)
            }
        }
    }

    /**
     * @param {MenuItemUI} item
     * @param {HTMLElement} el
     * @param {UIRenderer} uiRenderer
     */
    static update(item, el, uiRenderer) {
        el.innerHTML = ''
        this.postCreate(item, el, uiRenderer)
    }

    static props = {
        tag: 'div',
        className: 'list-element',
        prefix: 'list-element-'
    }

}