import ListElementButtonUI from './ListElementButtonUI.js'

export default class FolderElementButtonUI extends ListElementButtonUI {

    static props = {
        tag: 'div',
        className: 'list-element',
        prefix: 'list-element-'
    }

    /**
     * @override
     */
    static getTitle(item){
        return ''
    }

}