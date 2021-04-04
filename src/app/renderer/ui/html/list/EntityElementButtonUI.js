import ListElementButtonUI from './ListElementButtonUI.js'
import UnitUI from '../components/unit/UnitUI.js'

export default class EntityElementButtonUI extends ListElementButtonUI {

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
        const {imageWidth, imageHeight} = this.props
        return UnitUI.getImage(bind, {width: imageWidth, height: imageHeight})
    }

}