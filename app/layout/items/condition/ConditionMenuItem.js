define(function (require) {

    import MenuItem from '../../MenuItem.js'
    import ConditionFormMenuItem from './ConditionFormMenuItem.js'
    import Layout from '../../Layout.js'

    /**
     * Condition Menu Item
     * Menu responsible for managing physics and ai conditions (when die, ...)
     */
    class ConditionMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Conditions',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: Layout.zone.RIGHT
            })
            this.items = [
                new ConditionFormMenuItem(this)
            ]
        }
    }

    export default ConditionMenuItem

})