define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    class SelectorMenuItem extends MenuItem {
        constructor() {
            super({
                id: 1,
                name: 'mouse-pointer',
                title: 'Select/Move',
                stateCode: 'DRAW_SELECT',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    export default SelectorMenuItem

})