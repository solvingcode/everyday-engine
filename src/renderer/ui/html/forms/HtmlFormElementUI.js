define(function (require) {

    const ItemUI = require('../ItemUI.js')
    const Layout = require('../../../../layout/Layout.js')
    const HtmlFormCheckboxUI = require('../components/forms/HtmlFormCheckboxUI.js')
    const HtmlFormTextUI = require('../components/forms/HtmlFormTextUI.js')

    class HtmlFormElementUI extends ItemUI {
        /**
         * Get the type of the form element
         * @param {MenuItemUI} item 
         */
        static getType(item) {
            const { field } = item.element
            if (field === Layout.form.CHECKBOX) {
                return HtmlFormCheckboxUI
            }
            if (field === Layout.form.TEXT) {
                return HtmlFormTextUI
            }
        }
    }
    return HtmlFormElementUI
})