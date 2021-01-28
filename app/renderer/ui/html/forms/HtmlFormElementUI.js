define(function (require) {

    import ItemUI from '../ItemUI.js'
    import Layout from '../../../../layout/Layout.js'
    import HtmlFormCheckboxUI from '../components/forms/HtmlFormCheckboxUI.js'
    import HtmlFormTextUI from '../components/forms/HtmlFormTextUI.js'
    import HtmlFormDropdownUI from '../components/forms/HtmlFormDropdownUI.js'
    import HtmlFormFileUI from '../components/forms/HtmlFormFileUI.js'

    class HtmlFormElementUI extends ItemUI {
        /**
         * Get the type of the form element
         * @param {MenuItemUI} item 
         */
        static getType(item) {
            const { field } = item.element
            if (field === Layout.form.CHECKBOX) {
                export default HtmlFormCheckboxUI
            } else if (field === Layout.form.TEXT) {
                export default HtmlFormTextUI
            } else if (field === Layout.form.DROPDOWN) {
                export default HtmlFormDropdownUI
            } else if (field === Layout.form.FILE) {
                export default HtmlFormFileUI
            }
        }
    }
    export default HtmlFormElementUI
})