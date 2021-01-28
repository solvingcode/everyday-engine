define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    class CircleMenuItem extends MenuItem {
        constructor() {
            super({
                id: 1,
                name: 'circle',
                title: 'Draw circle',
                stateCode: 'DRAW_CIRCLE',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    export default CircleMenuItem

})