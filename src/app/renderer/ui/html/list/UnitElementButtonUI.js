import ListElementButtonUI from './ListElementButtonUI.js'

export default class UnitElementButtonUI extends ListElementButtonUI {

    static props = {
        tag: 'button',
        className: 'list-element',
        prefix: 'list-element-',
        width: '100%',
        imageWidth: 20,
        imageHeight: 20
    }

}