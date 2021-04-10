/**
 * @class {IconUI}
 */
export default class IconUI {

    /**
     * @param {string} name
     * @return {HTMLElement}
     */
    static createIcon(name){
        const iconElement = document.createElement('i')
        iconElement.className = `fas fa-${name}`
        return iconElement
    }

}