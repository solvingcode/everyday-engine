import HtmlPanelUI from './HtmlPanelUI.js'
import EditScriptContent from '../../../../content/EditScriptContent.js'
import EditScriptUI from '../components/content/EditScriptUI.js'

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
        if(content){
            el.appendChild(this.getContentUI(content).getElement(content))
        }
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
     * @param {Content} content
     * @return {HTMLElement}
     */
    static getContentUI(content) {
        switch (content.constructor) {
            case EditScriptContent:
                return EditScriptUI
            default:
                throw new TypeError(`ContentUI: ${data.constructor.name} not supported`)
        }
    }

    /**
     * @override
     */
    static getClassName(item){
        const content = item.element.data
        if(content){
            return 'has-content'
        }
    }
}