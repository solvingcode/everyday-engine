import CrudMenuItem from '../crud/CrudMenuItem.js'
import World from '../../../world/World.js'
import LayerGroup from '../../../preference/layerGroup/LayerGroup.js'

export default class LayerGroupMenuItem extends CrudMenuItem {
    constructor() {
        super('Layer group', new LayerGroup('', 0))
    }

    /**
     * @override
     */
    getList() {
        return World.get().getPreference().getLayerGroup().getLayers().sort(
            (layerA, layerB) => layerA.getRank() < layerB.getRank() ? -1 : 1)
    }
}
