import OptionActionsMenuItem from '../../option/OptionActionsMenuItem.js'
import AddClassScriptMenuItem from '../../assets/AddClassScriptMenuItem.js'
import AddAnimationScriptMenuItem from '../../assets/AddAnimationScriptMenuItem.js'
import CompileAllScriptMenuItem from '../../script/CompileAllScriptMenuItem.js'

export default class ScriptTopMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        super([
            new AddClassScriptMenuItem(),
            new AddAnimationScriptMenuItem(),
            new CompileAllScriptMenuItem()
            ], position, size
        )
    }
}