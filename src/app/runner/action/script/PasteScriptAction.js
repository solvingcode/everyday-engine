import Action from '../Action.js'
import World from '../../../world/World.js'
import ClipboardManager from '../../../manager/ClipboardManager.js'
import XmlHelper from '../../../utils/XmlHelper.js'
import ClientError from '../../../exception/type/ClientError.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'

export default class PasteScriptAction extends Action {

    /**
     * @override
     */
    static run(mouse) {
        const world = World.get()
        const script = world.getScriptManager().getFunctionSelected(world.getTabManager())
        const clipboard = ClipboardManager.get().getContent()
        const scriptXml = XmlHelper.parse(clipboard)
        if(scriptXml instanceof Document){
            ScriptHelper.regenerateXmlNodeIds(Array.from(scriptXml.firstChild.childNodes))
                .forEach(cXmlNode => ScriptHelper.addXmlNode(cXmlNode, script))
        }else{
            throw new ClientError(`Cannot paste clipboard "${scriptXml}"`)
        }
        return true
    }

}