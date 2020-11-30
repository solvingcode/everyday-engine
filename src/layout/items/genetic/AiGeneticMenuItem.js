define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const InfosMenuItem = require('./InfosMenuItem.js')
    const FitnessGraphMenuItem = require('./FitnessGraphMenuItem.js')
    const AiFormMenuItem = require('./AiFormMenuItem.js')
    const FormSimulationMenuItem = require('./FormSimulationMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * AI Genetic Menu Item
     * Menu responsible for managing Ai Genetic
     */
    class AiGeneticMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'AI Genetic',
                stateCode: '',
                type: Layout.type.PANEL,
                zone: Layout.zone.RIGHT
            })
            this.items = [
                new InfosMenuItem(this),
                new FitnessGraphMenuItem(this),
                new AiFormMenuItem(this),
                new FormSimulationMenuItem(this)
            ]
        }

        /**
         * @override
         */
        isValid() {
            return true
        }
    }

    return AiGeneticMenuItem

})