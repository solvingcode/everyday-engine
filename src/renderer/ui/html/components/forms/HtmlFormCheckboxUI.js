define(function (require) {

    const ItemUI = require('../../ItemUI.js')

    class HtmlFormCheckboxUI extends ItemUI {
        /**
         * Draw a checkbox.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const parentEl = item.parent && uiRenderer.getElement(item.parent)
            uiRenderer.getElement(item, parentEl)
        }

        /**
         * @inheritdoc
         */
        static postCreate(item, el) {
            const { props } = item.element
            const input = document.createElement('input')
            input.type = 'checkbox'
            const labelEl = document.createElement('label')
            labelEl.textContent = props.name
            el.appendChild(input)
            el.appendChild(labelEl)
        }
    }

    HtmlFormCheckboxUI.props = {
        tag: 'div',
        prefix: 'form-checkbox-',
        className: 'form-input'
    }

    return HtmlFormCheckboxUI
})