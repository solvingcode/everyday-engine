import ItemUI from '../ItemUI.js'
import Layout from '../../../../layout/Layout.js'
import HtmlFormCheckboxUI from '../components/forms/HtmlFormCheckboxUI.js'
import HtmlFormTextUI from '../components/forms/HtmlFormTextUI.js'
import HtmlFormDropdownUI from '../components/forms/HtmlFormDropdownUI.js'
import HtmlFormFileUI from '../components/forms/HtmlFormFileUI.js'
import HtmlFormColorUI from '../components/forms/HtmlFormColorUI.js'
import HtmlFormRangeUI from '../components/forms/HtmlFormRangeUI.js'
import HtmlFormTextareaUI from '../components/forms/HtmlFormTextareaUI.js'
import HtmlFormWysiwygUI from '../components/forms/HtmlFormWysiwygUI.js'
import SystemError from '../../../../exception/type/SystemError.js'
import HtmlFormNumberUI from '../components/forms/HtmlFormNumberUI.js'
import HtmlFormMultiButtonUI from '../components/forms/HtmlFormMultiButtonUI.js'

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
        } else if (field === Layout.form.MULTI_BUTTON) {
            return HtmlFormMultiButtonUI
        } else if (field === Layout.form.FILE) {
            return HtmlFormFileUI
        } else if (field === Layout.form.COLOR) {
            return HtmlFormColorUI
        } else if (field === Layout.form.TEXTAREA) {
            return HtmlFormTextareaUI
        } else if (field === Layout.form.RANGE) {
            return HtmlFormRangeUI
        } else if (field === Layout.form.NUMBER) {
            return HtmlFormNumberUI
        } else if (field === Layout.form.WYSIWYG) {
            return HtmlFormWysiwygUI
        }
        throw new SystemError(`FormElement type "${field}" not supported!`)
    }
}

export default HtmlFormElementUI