import HtmlPanelUI from './HtmlPanelUI.js'

export default class HtmlBodyItemUI extends HtmlPanelUI {

    static props = {
        tag: 'div',
        className: 'panel body-item'
    }

    /**
     * @override
     */
    static postCreate(item, el, uiRenderer){
        super.postCreate(item, el, uiRenderer)
        const content = item.element.data
        el.setAttribute('content-id', content ? content.getId() : '')
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer = null) {
        const contentId = el.getAttribute('content-id')
        const content = item.element.data
        if ((!content && contentId) || (content && content.getId() !== parseInt(contentId))) {
            el.innerHTML = ''
            this.postCreate(item, el, uiRenderer)
        }
    }

    /**
     * @override
     */
    static getClassName(item){
        const hasContent = !!(item.element.items.length)
        if(hasContent){
            return 'has-content'
        }
    }
}