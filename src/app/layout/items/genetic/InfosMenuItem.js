import MenuItem from '../../MenuItem.js'
import Layout from '../../Layout.js'
import GeneticEngine from '../../../ai/genetic/GeneticEngine.js'

/**
 * InfosMenuItem class
 * Show/Manage all informations for AI Genetic
 */
class InfosMenuItem extends MenuItem {
    constructor(parent) {
        super({
            name: 'AI Genetic',
            stateCode: '',
            type: Layout.type.TEXT,
            zone: parent.zone
        })
        this.parent = parent
    }

    /**
     * @override
     */
    update() {
        const aiEngine = GeneticEngine.get()
        const {
            numGeneration,
            nbPerGeneration,
            bestGenomes,
            maxLifeInSec,
            timeToReactInSec,
            genomes
        } = aiEngine
        this.text = [
            `Generation : ${numGeneration}`,
            `Life (sec) : ${Math.round(maxLifeInSec - timeToReactInSec * genomes[0].stepBehavior)}`,
            `Population : ${nbPerGeneration}`,
            `Best distance : ${bestGenomes.length && bestGenomes[0].distance || 0}`,
        ]
    }

    /**
     * @override
     */
    isValid() {
        return this.stateManager.isRunning() && GeneticEngine.get()
    }
}

export default InfosMenuItem