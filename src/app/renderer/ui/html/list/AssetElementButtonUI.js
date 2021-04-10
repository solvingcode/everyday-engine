import ListElementButtonUI from './ListElementButtonUI.js'
import ImageUI from '../components/image/ImageUI.js'
import AssetImage from '../../../../asset/types/AssetImage.js'
import AssetFlowXml from '../../../../asset/types/AssetFlowXml.js'
import IconUI from '../components/icon/IconUI.js'

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
        const type = bind.getType()
        switch (type.constructor) {
            case AssetImage:
                return ImageUI.getImage(bind.getType().getData(), {width: imageWidth, height: imageHeight})
            case AssetFlowXml:
                return IconUI.createIcon('file-code')
            default:
                return IconUI.createIcon('file')
        }
    }

}