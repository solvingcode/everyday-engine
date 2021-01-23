define(function (require) {

    const Layout = require('../../Layout.js')
    const World = require('../../../world/World.js')
    const FormMenuItem = require('../form/FormMenuItem.js')
    const TerrainManager = require('../../../world/terrain/TerrainManager.js')

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
        getFields() {
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

    return TerrainFormMenuItem

})