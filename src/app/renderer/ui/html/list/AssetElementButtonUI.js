import ListElementButtonUI from './ListElementButtonUI.js'
import ImageUI from '../components/image/ImageUI.js'
import AssetImage from '../../../../asset/types/image/AssetImage.js'
import AssetScriptXml from '../../../../asset/types/script/AssetScriptXml.js'
import IconUI from '../components/icon/IconUI.js'
import World from '../../../../world/World.js'
import {STATUS} from '../../../../project/data/AScriptData.js'
import AssetScriptCode from '../../../../asset/types/script/AssetScriptCode.js'

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
        const script = World.get().getScriptManager().findByName(bind.getName())
        const scriptStatus = script ? script.getStatus() : STATUS.NEW
        el.setAttribute(this.props.assetStatus, scriptStatus)
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
            case AssetScriptXml:
            case AssetScriptCode:
                return this.getIconScriptAsset(bind)
            default:
                throw new TypeError(`Asset: No icon founded for "${type.constructor.name}"`)
        }
    }

    /**
     * @param {Asset} bind
     * @return {HTMLElement|DocumentFragment}
     */
    static getIconScriptAsset(bind){
        const script = World.get().getScriptManager().findByName(bind.getName())
        let statusIcon
        const scriptStatus = script ? script.getStatus() : STATUS.NEW
        switch (scriptStatus) {
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
                throw new TypeError(`Script status ${flowStatus} not recognized`)
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
        const script = World.get().getScriptManager().findByName(bind.getName())
        const scriptStatus = script ? script.getStatus() : STATUS.NEW
        const actualScriptStatus = el.getAttribute(this.props.assetStatus)
        if(actualScriptStatus !== scriptStatus){
            this.update(item, el, uiRenderer)
        }
    }

}