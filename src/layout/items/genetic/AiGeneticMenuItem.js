define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const InfosMenuItem = require('./InfosMenuItem.js')
    const FitnessGraphMenuItem = require('./FitnessGraphMenuItem.js')
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
            this.type = Layout.type.LAYER
            this.items = [
                new InfosMenuItem(this),
                new FitnessGraphMenuItem(this)
            ]
        }

        /**
         * @inheritdoc
         */
        run() {
            return false
        }

        /**
         * @inheritdoc
         */
        isSelected() {
            return false
        }

        /**
         * @inheritdoc
         */
        isValid() {
            return super.isValid() || this.appState.hasState('SIMULATE_PROGRESS')
        }

        /**
         * @inheritdoc
         */
        update() {
            this.items.forEach(item => item.isValid() && item.update())
        }
    }

    return AiGeneticMenuItem

})