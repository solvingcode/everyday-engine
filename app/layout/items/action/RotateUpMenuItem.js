define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    class RotateUpMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'redo',
                title: 'Rotate',
                stateCode: 'ACTION_ROTATE_UP',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    export default RotateUpMenuItem

})