define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    class AttachPointMenuItem extends MenuItem {
        constructor() {
            super({
                id: 1,
                name: 'thumbtack',
                title: 'Pin joints',
                stateCode: 'DRAW_ATTACH_POINT',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    export default AttachPointMenuItem

})