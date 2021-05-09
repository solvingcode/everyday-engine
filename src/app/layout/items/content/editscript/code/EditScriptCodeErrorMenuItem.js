import MenuItem from '../../../../MenuItem.js'
import Layout from '../../../../Layout.js'

export default class EditScriptCodeErrorMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: '',
            stateCode: '',
            type: Layout.type.TEXT,
            zone: parent.zone
        })
        this.text = []
        this.parent = parent
    }

    /**
     * @override
     */
    update() {
        const asset = this.parent.data.getData()
        if (asset.getType().getError() !== this.text[0]){
            this.text = [asset.getType().getError()]
        }
    }

}