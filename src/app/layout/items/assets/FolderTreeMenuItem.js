import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import World from '../../../world/World.js'

export default class FolderTreeMenuItem extends MenuItem{

    /**
     * @param {MenuItem} parent
     * @param {{bind: Folder, list: Folder[]}} data
     */
    constructor(parent, data) {
        super({
            stateCode: 'ACTION_SELECT_FOLDER',
            type: Layout.type.TREE,
            name: 'folder',
            title: data.bind.getName(),
            zone: Layout.zone.BOTTOM
        })
        this.parent = parent
        this.items = []
        this.setData(data)
    }

    /**
     * @override
     */
    setData(data){
        this.data = data
    }

    /**
     * @return {Folder[]}
     */
    getList() {
        return World.get().getAssetsManager().findFolders(this.data.bind.getId())
    }

    /**
     * @override
     */
    update() {
        const list = this.getList()
        this.items = list.map((each, index) => {
            const element = this.items[index]
            const data = {bind: each, list}
            if (element && element.data.bind !== each) {
                element.setData(data)
            }
            return element || new FolderTreeMenuItem(this, data)
        })
    }

}