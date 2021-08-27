import ItemUI from '../ItemUI.js'
import IconUI from '../components/icon/IconUI.js'

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
        const {element} = item
        const bind = element.getDataBind()
        if (bind) {
            let container = el
            if (element.isButton()) {
                container = document.createElement('button')
                el.appendChild(container)
            }
            const icon = this.getIcon(item)
            if (icon) {
                const imageWrapper = document.createElement('div')
                imageWrapper.className = 'list-element-img-wrapper'
                imageWrapper.appendChild(icon)
                container.appendChild(imageWrapper)
            }
            el.setAttribute('data-list-element-id', bind.getId())
            el.setAttribute('data-list-element-name', bind.getName())
            el.setAttribute('id', item.getId())
            el.setAttribute('order', `${this.getOrder(el)}`)

            const isCollapsable = item.element.isCollapsable()
            if (isCollapsable) {
                const collapseEl = document.createElement('div')
                collapseEl.className = 'list-element-collapse-el'
                collapseEl.onclick = () => element.setCollapsed(!element.isCollapsed())
                el.appendChild(collapseEl)
            }

            const titleText = this.getTitle(item)
            if (titleText) {
                const title = document.createElement('span')
                title.textContent = this.getTitle(item)
                title.title = this.getTitle(item)
                container.appendChild(title)
            }
        }
    }

    /**
     * @override
     */
    static getTriggerClickElement(item, el){
        if (item.element.isButton()) {
            return el.getElementsByTagName('button')[0]
        }else{
            return super.getTriggerClickElement(item, el)
        }
    }

    /**
     * @param {HTMLElement} el
     * @return {number}
     */
    static getOrder(el) {
        return 0
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
        const icon = item.element.getIcon()
        return icon && IconUI.createIcon(icon)
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
     * @param {HTMLElement} el
     * @return {HTMLElement | null}
     */
    static getTitleElement(el) {
        return el.getElementsByTagName('span')[0]
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer) {
        const bind = item.element.getDataBind()
        if (bind) {
            const bindId = el.getAttribute('data-list-element-id')
            const bindName = el.getAttribute('data-list-element-name')
            const titleElement = this.getTitleElement(el)
            const title = (titleElement && titleElement.innerText) || ''
            if (parseInt(bindId) !== bind.getId() || bindName !== bind.getName() || this.getTitle(item) !== title) {
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

    /**
     * @override
     */
    static hasChild(item){
        const items = item.element.items
        return !!(items && items[0] && items[0].items && items[0].items.length)
    }

    static props = {
        tag: 'div',
        className: 'list-element',
        prefix: 'list-element-'
    }

}