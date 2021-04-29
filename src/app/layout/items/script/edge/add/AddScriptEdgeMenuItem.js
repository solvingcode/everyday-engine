import AddScriptEdgeSubmitMenuItem from './AddScriptEdgeSubmitMenuItem.js'
import AddScriptEdgeFormMenuItem from './AddScriptEdgeFormMenuItem.js'
import PanelMenuItem from '../../../panel/PanelMenuItem.js'
import World from '../../../../../world/World.js'
import AssetScriptXml from '../../../../../asset/types/script/AssetScriptXml.js'

export default class AddScriptEdgeMenuItem extends PanelMenuItem {
    constructor(parent) {
        super({
            name: 'Add connection',
            zone: parent.zone
        })
        this.collapsed = true
        this.parent = parent
        const formData = new AddScriptEdgeForm()
        this.items = [
            new AddScriptEdgeFormMenuItem(this, formData),
            new AddScriptEdgeSubmitMenuItem(this, formData)
        ]
    }

    /**
     * @override
     */
    isValid() {
        const asset = World.get().getScriptManager().getSelectedAsset()
        return super.isValid() && asset && asset.getType() instanceof AssetScriptXml
    }
}

export class AddScriptEdgeForm {

    /**
     * @type {number}
     */
    sourceId

    /**
     * @type {number}
     */
    targetId

    /**
     * @type {number}
     */
    connection

    /**
     * @param {number} sourceId
     */
    setSourceId(sourceId){
        this.sourceId = sourceId
    }

    /**
     * @return {number}
     */
    getSourceId(){
        return this.sourceId
    }

    /**
     * @param {number} targetId
     */
    setTargetId(targetId){
        this.targetId = targetId
    }

    /**
     * @return {number}
     */
    getTargetId(){
        return this.targetId
    }

    /**
     * @param {number} connection
     */
    setConnection(connection){
        this.connection = connection
    }

    /**
     * @return {number}
     */
    getConnection(){
        return this.connection
    }

}