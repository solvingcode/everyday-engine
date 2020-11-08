define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const InfosMenuItem = require('./InfosMenuItem.js')
    const FitnessGraphMenuItem = require('./FitnessGraphMenuItem.js')
    const FormMenuItem = require('./FormMenuItem.js')
    const FormSimulationMenuItem = require('./FormSimulationMenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * AI Genetic Menu Item
     * Menu responsible for managing Ai Genetic
     */
    class AiGeneticMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'AI Genetic'
            })
            this.zone = Layout.zone.RIGHT
            this.type = Layout.type.PANEL
            this.items = [
                new InfosMenuItem(this),
                new FitnessGraphMenuItem(this),
                new FormMenuItem(this),
                new FormSimulationMenuItem(this)
            ]
        }

        /**
         * @inherit
         */
        run() {
            return false
        }

        /**
         * @inherit
         */
        isSelected() {
            return false
        }

        /**
         * @inherit
         */
        isValid() {
            return super.isValid() || this.appState.hasState('SIMULATE_PROGRESS')
        }

        /**
         * @inherit
         */
        update() {
            this.items.forEach(item => item.isValid() && item.update())
        }
    }

    return AiGeneticMenuItem

})