define(function (require) {

    const Layout = require('../../../Layout.js')
    const FormMenuItem = require('../../form/FormMenuItem.js')
    const World = require('../../../../world/World.js')

    /**
     * Plain terrain form
     */
    class PlainFormMenuItem extends FormMenuItem {
        constructor(parent) {
            super({
                name: 'Plain terrain form',
                stateCode: '',
                type: Layout.type.FORM,
                zone: parent.zone
            })
            this.parent = parent
        }

        /**
         * @override
         */
        getFields() {
            return [
                {
                    bind: 'width',
                    label: 'Width',
                    type: Layout.form.TEXT
                },
                {
                    bind: 'height',
                    label: 'Height',
                    type: Layout.form.TEXT
                }
            ]
        }

        /**
         * @override
         */
        getFormObject(){
            return World.get().getTerrainManager().getTerrain()
        }
    }

    return PlainFormMenuItem

})