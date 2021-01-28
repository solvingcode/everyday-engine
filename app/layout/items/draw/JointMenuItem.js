define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    class JointMenuItem extends MenuItem {
        constructor() {
            super({
                id: 1,
                name: 'bone',
                title: 'Rigid joints',
                stateCode: 'DRAW_JOINT',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }
    }

    export default JointMenuItem

})