import Layout from '../../../../Layout.js'
import MenuItem from '../../../../MenuItem.js'
import AddScriptEdgeSubmitMenuItem from './AddScriptEdgeSubmitMenuItem.js'
import AddScriptEdgeFormMenuItem from './AddScriptEdgeFormMenuItem.js'

export default class AddScriptEdgeMenuItem  extends MenuItem {
    constructor(parent) {
        super({
            name: 'Edges',
            stateCode: '',
            type: Layout.type.PANEL,
            zone: parent.zone
        })
        this.parent = parent
        const formData = new AddScriptEdgeForm()
        this.items = [
            new AddScriptEdgeFormMenuItem(this, formData),
            new AddScriptEdgeSubmitMenuItem(this, formData)
        ]
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