import HtmlPanelUI from './HtmlPanelUI.js'

export default class HtmlTabItemUI extends HtmlPanelUI {

    static props = {
        tag: 'div',
        className: 'panel tab-item'
    }

    /**
     * @override
     */
    static getClassName(item) {
        const tab = item.element.data.bind
        if (tab.isSelected()) {
            return 'selected'
        }
    }

}