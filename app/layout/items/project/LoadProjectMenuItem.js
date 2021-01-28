define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    /**
     * @class {LoadProjectMenuItem}
     */
    class LoadProjectMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'file-upload',
                title: 'Load project',
                stateCode: 'ACTION_LOAD_PROJECT',
                type: Layout.type.ICON,
                zone: Layout.zone.TOP
            })
        }
    }

    export default LoadProjectMenuItem

})