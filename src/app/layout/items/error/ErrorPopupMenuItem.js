import Layout from '../../Layout.js'
import MenuItem from '../../MenuItem.js'
import ErrorMessageMenuItem from './ErrorMessageMenuItem.js'
import ExceptionHandler from '../../../exception/ExceptionHandler.js'
import ErrorCloseMenuItem from './ErrorCloseMenuItem.js'
import ErrorTitleMenuItem from './ErrorTitleMenuItem.js'

export default class ErrorPopupMenuItem extends MenuItem {
    constructor() {
        super({
            name: 'error-popup',
            stateCode: '',
            zone: Layout.zone.WINDOW,
            type: Layout.type.WRAPPER
        })
        this.items = [
            new ErrorTitleMenuItem(this),
            new ErrorMessageMenuItem(this),
            new ErrorCloseMenuItem(this)
        ]
    }

    /**
     * @override
     */
    isValid() {
        return !!ExceptionHandler.get().getLastError()
    }
}