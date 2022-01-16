import FormMenuItem from '../../form/FormMenuItem.js'
import Layout from '../../../Layout.js'
import {KeyCode} from '../../../../core/Keyboard.js'
import {GAME_INPUTS} from '../../../../preference/gameInput/GameInput.js'

export default class AddGameInputFormMenuItem extends FormMenuItem {
    /**
     * @param {MenuItem} parent
     * @param {AddGameInputForm} formData
     */
    constructor(parent, formData) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.data = {formData}
    }

    /**
     * @override
     */
    generateFields() {
        const inputs = Object.values(GAME_INPUTS).map(input => ({ value: input, label: input }))
        const keys = Object.keys(KeyCode).map(key => ({ value: key, label: key }))
            .sort((first, second) =>
                first.label < second.label ? -1 : 1
            )
        return [
            {
                bind: 'name',
                label: 'Name',
                type: Layout.form.DROPDOWN,
                list: inputs
            },
            {
                bind: 'key',
                label: 'Key',
                type: Layout.form.DROPDOWN,
                list: keys
            },
            {
                bind: 'value',
                label: 'Value',
                type: Layout.form.NUMBER
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return this.data.formData
    }
}