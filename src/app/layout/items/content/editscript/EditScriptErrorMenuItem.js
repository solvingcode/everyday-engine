import MenuItem from '../../../MenuItem.js'
import Layout from '../../../Layout.js'

export default class EditScriptErrorMenuItem extends MenuItem {
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
        this.text = [asset.getType().getError()]
    }

}