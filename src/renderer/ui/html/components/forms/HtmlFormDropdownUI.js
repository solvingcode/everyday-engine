define(function (require) {

    const ItemUI = require('../../ItemUI.js')

    class HtmlFormDropdownUI extends ItemUI {
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
            const { props } = item.element
            const { inputProps } = this.props
            const formEl = document.createElement(inputProps.tag)
            this.createOptions(item, formEl)
            formEl.id = `${el.id}-${inputProps.suffix}`
            const labelEl = document.createElement('label')
            labelEl.textContent = props.name
            labelEl.htmlFor = formEl.id
            el.appendChild(labelEl)
            el.appendChild(formEl)
        }

        /**
         * Create options for the dropdown
         * @param {MenuItemUI} item
         * @param {HTMLElement} formEl 
         */
        static createOptions(item, formEl){
            const { props, value } = item.element
            const { inputProps } = this.props
            formEl.appendChild(document.createElement(inputProps.tagOption))
            props.list.forEach(({ value: optValue, label: optLabel }) => {
                const optionEl = document.createElement(inputProps.tagOption)
                optionEl.value = optValue
                optionEl.textContent = optLabel
                optionEl.selected = optValue == value()
                formEl.appendChild(optionEl)
            })
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
            return formElement.value
        }
    }

    HtmlFormDropdownUI.props = {
        tag: 'div',
        prefix: 'form-dropdown-',
        className: 'form-input',
        inputProps: {
            tag: 'select',
            tagOption: 'option',
            suffix: '-dropdown'
        }
    }

    return HtmlFormDropdownUI
})