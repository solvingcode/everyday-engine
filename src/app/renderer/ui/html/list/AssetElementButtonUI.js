import ListElementButtonUI from './ListElementButtonUI.js'
import ImageUI from '../components/image/ImageUI.js'

export default class AssetElementButtonUI extends ListElementButtonUI {

    static props = {
        tag: 'button',
        className: 'list-element',
        prefix: 'list-element-',
        width: '100%',
        imageWidth: 50,
        imageHeight: 50
    }

    /**
     * @override
     */
    static getIcon(item){
        const bind = item.element.getDataBind()
        const {imageWidth, imageHeight} = this.props
        return ImageUI.getImage(bind.getType().getData(), {width: imageWidth, height: imageHeight})
    }

}