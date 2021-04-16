import HtmlPanelUI from './HtmlPanelUI.js'
import IconUI from '../components/icon/IconUI.js'

export default class HtmlTabItemUI extends HtmlPanelUI {

    static props = {
        tag: 'div',
        className: 'panel tab-item'
    }

    /**
     * @override
     */
    static postCreate(item, el, uiRenderer = null) {
        super.postCreate(item, el, uiRenderer)
        const closeIcon = IconUI.createIcon('times')
        this.getTitle(el).appendChild(closeIcon)
    }

    /**
     * @override
     */
    static getClassName(item){
        const tab = item.element.data.bind
        if(tab.isSelected()){
            return 'selected'
        }
    }

}