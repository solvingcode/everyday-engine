import ItemUI from '../ItemUI.js'
import EntityUI from '../components/entity/EntityUI.js'

/**
 * @class {ListElementButtonUI}
 */
class ListElementButtonUI extends ItemUI {

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
            const {imageWidth, imageHeight} = this.props
            const image = EntityUI.getImage(bind, {width: imageWidth, height: imageHeight})
            const title = document.createElement('span')
            const imageWrapper = document.createElement('div')
            imageWrapper.className = 'list-element-img-wrapper'
            imageWrapper.appendChild(image)
            title.textContent = bind.name
            el.setAttribute('data-list-element-id', bind.id)
            el.setAttribute('data-list-element-name', bind.name)
            el.setAttribute('id', item.getId())
            el.appendChild(imageWrapper)
            el.appendChild(title)
        }
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer) {
        const bind = item.element.getDataBind()
        if (bind) {
            const bindId = el.getAttribute('data-list-element-id')
            const bindName = el.getAttribute('data-list-element-name')
            if (parseInt(bindId) !== bind.id || bindName !== bind.name) {
                el.innerHTML = ''
                this.postCreate(item, el, uiRenderer)
            }
        }
    }
}

ListElementButtonUI.props = {
    tag: 'button',
    className: 'list-element',
    prefix: 'list-element-',
    width: '100%',
    imageWidth: 30,
    imageHeight: 30
}

export default ListElementButtonUI