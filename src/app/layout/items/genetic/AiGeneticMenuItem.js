import MenuItem from '../../MenuItem.js'
import InfosMenuItem from './InfosMenuItem.js'
import FitnessGraphMenuItem from './FitnessGraphMenuItem.js'
import AiFormMenuItem from './AiFormMenuItem.js'
import FormSimulationMenuItem from './FormSimulationMenuItem.js'
import Layout from '../../Layout.js'
import GeneticEngine from '../../../ai/genetic/GeneticEngine.js'

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
        return GeneticEngine.get()
    }
}

export default AiGeneticMenuItem