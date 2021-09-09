import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'
import ExceptionHandler from '../../../../exception/ExceptionHandler.js'

export default class ErrorMessageMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'Alert',
            stateCode: '',
            type: Layout.type.TEXT,
            zone: parent.zone
        })
    }

    /**
     * @override
     */
    update() {
        const lastError = ExceptionHandler.get().getLastError()
        if(!this.text || this.text[0] !== lastError.message){
            this.text = [lastError.message]
        }
    }
}