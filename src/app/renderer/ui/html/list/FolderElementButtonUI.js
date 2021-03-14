import ListElementButtonUI from './ListElementButtonUI.js'
import IconButtonUI from '../buttons/IconButtonUI.js'

export default class FolderElementButtonUI extends ListElementButtonUI {

    static props = {
        tag: 'button',
        className: 'list-element',
        prefix: 'list-element-',
        width: '100%'
    }

    /**
     * @override
     */
    static getIcon(item){
        const attrIconValue = document.createElement('i')
        attrIconValue.className = [IconButtonUI.props.className, IconButtonUI.getClassName(item)].join(' ')
        return attrIconValue
    }

}