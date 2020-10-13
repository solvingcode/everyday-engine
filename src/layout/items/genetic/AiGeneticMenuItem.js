define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const AiGeneticInfosMenuItem = require('./AiGeneticInfosMenuItem.js')
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
                new AiGeneticInfosMenuItem(this)
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
            return this.appState.hasState('SIMULATE_PROGRESS')
        }

        /**
         * @inheritdoc
         */
        update() {
            this.items.forEach(item => item.update())
        }
    }

    return AiGeneticMenuItem

})