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
            const title = document.createElement('span')
            const icon = this.getIcon(item)
            if(icon){
                const imageWrapper = document.createElement('div')
                imageWrapper.className = 'list-element-img-wrapper'
                imageWrapper.appendChild(icon)
                el.appendChild(imageWrapper)
            }
            title.textContent = bind.name
            title.title = bind.name
            el.setAttribute('data-list-element-id', bind.getId())
            el.setAttribute('data-list-element-name', bind.getName())
            el.setAttribute('id', item.getId())
            el.appendChild(title)
        }
    }

    /**
     * @param {MenuItemUI} item
     * @return {HTMLElement | null}
     */
    static getIcon(item){
        return null
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
                el.innerHTML = ''
                this.postCreate(item, el, uiRenderer)
            }
        }
    }

}