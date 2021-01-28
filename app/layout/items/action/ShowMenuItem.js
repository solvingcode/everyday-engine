define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    /**
     * Show selected entities
     */
    class ShowMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'eye',
                title: 'Show',
                stateCode: 'ACTION_SHOW',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    export default ShowMenuItem

})