import ContentUI from './ContentUI.js'

export default class EditScriptUI extends ContentUI {

    /**
     * @override
     * @param {EditScriptContent} content
     * @return {HTMLElement}
     */
    static getElement(content){
        const asset = content.getData()
        const textarea = document.createElement('textarea')
        textarea.className = 'edit-script'
        textarea.textContent = asset.getType().getDataUrl()
        return textarea
    }

}