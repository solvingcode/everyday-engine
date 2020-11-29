define(function (require) {

    const ItemUI = require('../ItemUI.js')
    const Layout = require('../../../../layout/Layout.js')
    const HtmlFormCheckboxUI = require('../components/forms/HtmlFormCheckboxUI.js')
    const HtmlFormTextUI = require('../components/forms/HtmlFormTextUI.js')
    const HtmlFormDropdownUI = require('../components/forms/HtmlFormDropdownUI.js')
    const HtmlFormFileUI = require('../components/forms/HtmlFormFileUI.js')

    class HtmlFormElementUI extends ItemUI {
        /**
         * Get the type of the form element
         * @param {MenuItemUI} item 
         */
        static getType(item) {
            const { field } = item.element
            if (field === Layout.form.CHECKBOX) {
                return HtmlFormCheckboxUI
            } else if (field === Layout.form.TEXT) {
                return HtmlFormTextUI
            } else if (field === Layout.form.DROPDOWN) {
                return HtmlFormDropdownUI
            } else if (field === Layout.form.FILE) {
                return HtmlFormFileUI
            }
        }
    }
    return HtmlFormElementUI
})