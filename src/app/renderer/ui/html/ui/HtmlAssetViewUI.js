import ItemUI from '../ItemUI.js'
import ImageUI from '../components/image/ImageUI.js'
import World from '../../../../world/World.js'
export default class HtmlAssetViewUI extends ItemUI {

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
    static postCreate(item, el, uiRenderer) {
        const {name} = item.element.props
        const assetId = parseInt(name)
        const asset = World.get().getAssetsManager().findAssetImageById(assetId)
        const image = ImageUI.getImageFromDataUrl(asset.getType().getDataUrl(), assetId)
        image.title = asset.getName()
        el.appendChild(image)
    }

    /**
     * @param {HTMLElement} el
     * @return {HTMLElement | null}
     */
    static getImageElement(el){
       return el.getElementsByTagName('img')[0]
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer) {
        const {name} = item.element.props
        const assetId = parseInt(name)
        const image = this.getImageElement(el)
        if (parseInt(image.id) !== assetId) {
            el.innerHTML = ''
            this.postCreate(item, el, uiRenderer)
        }
    }

    static props = {
        tag: 'div',
        className: 'panel'
    }

}