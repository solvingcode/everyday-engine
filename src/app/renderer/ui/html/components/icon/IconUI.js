/**
 * @class {IconUI}
 */
export default class IconUI {

    /**
     * @param {string} name
     * @param {string} className
     * @return {HTMLElement}
     */
    static createIcon(name, className = ''){
        const iconElement = document.createElement('i')
        iconElement.className = `fas fa-${name} ${className}`
        return iconElement
    }

}