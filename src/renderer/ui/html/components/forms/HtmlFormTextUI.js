define(function (require) {

    const ItemUI = require('../../ItemUI.js')

    class HtmlFormTextUI extends ItemUI {
        /**
         * Draw a checkbox.
         * @param {MenuItemUI} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            uiRenderer.getElement(item)
        }

        /**
         * @inheritDoc
         */
        static postCreate(item, el, uiRenderer) {
            const { props, value } = item.element
            const { inputProps } = this.props
            const input = document.createElement(inputProps.tag)
            input.type = inputProps.type
            input.id = `${el.id}-${inputProps.suffix}`
            input.value = value()
            input.style = 'width: 100px'
            const labelEl = document.createElement('label')
            labelEl.textContent = `${props.name} : `
            labelEl.htmlFor = input.id
            el.appendChild(labelEl)
            el.appendChild(input)
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
         * @param {HTMLInputElement} formElement
         */
        static getValue(formElement) {
            return formElement.value
        }
    }

    HtmlFormTextUI.props = {
        tag: 'div',
        prefix: 'form-text-',
        className: 'form-input',
        inputProps: {
            tag: 'input',
            type: 'text',
            suffix: '-field'
        }
    }

    return HtmlFormTextUI
})