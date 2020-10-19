define(function (require) {

    const ItemUI = require('../../ItemUI.js')

    class HtmlFormCheckboxUI extends ItemUI {
        /**
         * Draw a checkbox.
         * @param {MenuItemUI} item
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
            const { props, value } = item.element
            const { inputProps } = this.props
            const input = document.createElement(inputProps.tag)
            input.type = 'checkbox'
            input.id = `${el.id}-${inputProps.suffix}`
            input.checked = value
            const labelEl = document.createElement('label')
            labelEl.textContent = props.name
            labelEl.htmlFor = input.id
            el.appendChild(input)
            el.appendChild(labelEl)
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
         * @param {HTMLElement} formElement
         */
        static getValue(formElement) {
            return formElement.checked
        }
    }

    HtmlFormCheckboxUI.props = {
        tag: 'div',
        prefix: 'form-checkbox-',
        className: 'form-input',
        inputProps: {
            tag: 'input',
            suffix: '-field'
        }
    }

    return HtmlFormCheckboxUI
})