import Layout from '../../Layout.js'
import World from '../../../world/World.js'
import FormMenuItem from '../form/FormMenuItem.js'
import TerrainManager from '../../../world/terrain/TerrainManager.js'

/**
 * Form AI Engine properties
 */
class TerrainFormMenuItem extends FormMenuItem {
    constructor(parent) {
        super({
            name: 'Terrain form',
            stateCode: '',
            type: Layout.type.FORM,
            zone: parent.zone
        })
        this.parent = parent
        this.init()
    }

    /**
     * @override
     */
    generateFields() {
        return [
            {
                bind: 'terrainType',
                label: 'Type',
                type: Layout.form.DROPDOWN,
                list: [
                    {
                        value: TerrainManager.TYPES.PLAIN,
                        label: 'Plain'
                    },
                    {
                        value: TerrainManager.TYPES.NOISE,
                        label: 'Noise'
                    }
                ]
            }
        ]
    }

    /**
     * @override
     */
    getFormObject() {
        return World.get().getTerrainManager()
    }
}

export default TerrainFormMenuItem