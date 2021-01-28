define(function (require) {

    import ItemUI from '../../ItemUI.js'

    class HtmlFormUI extends ItemUI {

        /**
         * Draw the form element.
         * @param {MenuItemUI} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            uiRenderer.getElement(item)
        }

        /**
         * Get HTML form element
         * @param {MenuItemUI} item
         * @param {UIRenderer} uiRenderer
         */
        static getFormElement(item, uiRenderer) {
            const { inputProps } = this.props
            const el = uiRenderer.getElement(item)
            const elId = `${el.id}-${inputProps.suffix}`
            const element = document.getElementById(elId)
            return { element, value: this.getValue(element) }
        }

        /**
         * Get HTML value form element
         * @param {HTMLElement | HTMLInputElement} formElement
         * @return {string | boolean}
         */
        static getValue(formElement) {
            return formElement.value
        }
    }

    export default HtmlFormUI
})