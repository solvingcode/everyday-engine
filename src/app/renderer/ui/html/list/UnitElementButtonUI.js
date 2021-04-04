import ListElementButtonUI from './ListElementButtonUI.js'
import UnitUI from '../components/unit/UnitUI.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'

export default class UnitElementButtonUI extends ListElementButtonUI {

    static props = {
        tag: 'button',
        className: 'list-element',
        prefix: 'list-element-',
        width: '100%',
        imageWidth: 20,
        imageHeight: 20
    }

    /**
     * @override
     */
    static getIcon(item){
        const bind = item.element.getDataBind()
        const meshVersion = bind.getComponent(MeshComponent).getVersion()
        const {imageWidth, imageHeight} = this.props
        return UnitUI.getImage(bind, {width: imageWidth, height: imageHeight}, meshVersion)
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer){
        super.postUpdate(item, el, uiRenderer)
        const bind = item.element.getDataBind()
        const meshVersion = bind.getComponent(MeshComponent).getVersion()
        const iconElement = this.getIconElement(el)
        if(!iconElement || parseInt(iconElement.id) !== meshVersion){
            this.update(item, el, uiRenderer)
        }
    }

}