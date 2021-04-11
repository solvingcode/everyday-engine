import ListElementButtonUI from './ListElementButtonUI.js'
import ImageUI from '../components/image/ImageUI.js'
import AssetImage from '../../../../asset/types/AssetImage.js'
import AssetFlowXml from '../../../../asset/types/AssetFlowXml.js'
import IconUI from '../components/icon/IconUI.js'
import World from '../../../../world/World.js'
import {STATUS} from '../../../../flow/AFlow.js'

export default class AssetElementButtonUI extends ListElementButtonUI {

    static props = {
        tag: 'button',
        className: 'list-element',
        prefix: 'list-element-',
        width: '100%',
        imageWidth: 50,
        imageHeight: 50,
        assetStatus: 'asset-status'
    }

    /**
     * @override
     */
    static postCreate(item, el, uiRenderer){
        super.postCreate(item, el, uiRenderer)
        const bind = item.element.getDataBind()
        const flow = World.get().getFlowManager().findByName(bind.getName())
        const flowStatus = flow ? flow.getStatus() : STATUS.NEW
        el.setAttribute(this.props.assetStatus, flowStatus)
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
                return this.getIconFlowAsset(bind)
            default:
                return IconUI.createIcon('file')
        }
    }

    /**
     * @param {Asset} bind
     * @return {HTMLElement|DocumentFragment}
     */
    static getIconFlowAsset(bind){
        const flow = World.get().getFlowManager().findByName(bind.getName())
        let statusIcon
        const flowStatus = flow ? flow.getStatus() : STATUS.NEW
        switch (flowStatus) {
            case STATUS.NEW:
                statusIcon = IconUI.createIcon('question', 'status status-new')
                break
            case STATUS.COMPILED:
                statusIcon = IconUI.createIcon('check', 'status status-success')
                break
            case STATUS.ERROR:
                statusIcon = IconUI.createIcon('times', 'status status-error')
                break
            default:
                throw new TypeError(`Flow status ${flowStatus} not recognized`)
        }
        const fragment = document.createDocumentFragment()
        fragment.appendChild(IconUI.createIcon('file-code'))
        fragment.appendChild(statusIcon)
        return fragment
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer){
        super.postUpdate(item, el, uiRenderer)
        const bind = item.element.getDataBind()
        const flow = World.get().getFlowManager().findByName(bind.getName())
        const flowStatus = flow ? flow.getStatus() : STATUS.NEW
        const actualFlowStatus = el.getAttribute(this.props.assetStatus)
        if(actualFlowStatus !== flowStatus){
            this.update(item, el, uiRenderer)
        }
    }

}