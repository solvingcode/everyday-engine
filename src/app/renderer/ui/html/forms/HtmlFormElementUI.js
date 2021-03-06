import ItemUI from '../ItemUI.js'
import Layout from '../../../../layout/Layout.js'
import HtmlFormCheckboxUI from '../components/forms/HtmlFormCheckboxUI.js'
import HtmlFormTextUI from '../components/forms/HtmlFormTextUI.js'
import HtmlFormDropdownUI from '../components/forms/HtmlFormDropdownUI.js'
import HtmlFormFileUI from '../components/forms/HtmlFormFileUI.js'
import HtmlFormColorUI from '../components/forms/HtmlFormColorUI.js'

class HtmlFormElementUI extends ItemUI {
    /**
     * Get the type of the form element
     * @param {MenuItemUI} item
     */
    static getType(item) {
        const {field} = item.element
        if (field === Layout.form.CHECKBOX) {
            return HtmlFormCheckboxUI
        } else if (field === Layout.form.TEXT) {
            return HtmlFormTextUI
        } else if (field === Layout.form.DROPDOWN) {
            return HtmlFormDropdownUI
        } else if (field === Layout.form.FILE) {
            return HtmlFormFileUI
        } else if (field === Layout.form.COLOR) {
            return HtmlFormColorUI
        }
    }
}

export default HtmlFormElementUI