define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import Layout from '../../Layout.js'

    class SimulateStopMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'stop-circle',
                title: 'Stop the simulation',
                stateCode: 'SIMULATE',
                type: Layout.type.ICON,
                zone: Layout.zone.LEFT
            })
        }

        /**
         * @override
         */
        isValid() {
            return this.stateManager.isRunning()
        }
    }

    export default SimulateStopMenuItem

})