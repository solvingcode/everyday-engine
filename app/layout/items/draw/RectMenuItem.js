define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    class RectMenuItem extends MenuItem {
        constructor() {
            super({
                id: 1,
                name: 'stop',
                title: 'Draw a rectangle',
                stateCode: 'DRAW_RECT',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    export default RectMenuItem

})