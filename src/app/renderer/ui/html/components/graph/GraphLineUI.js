import PolyEntity from '../../../../../entity/types/shape/PolyEntity.js'
import UnitUI from '../unit/UnitUI.js'
import StyleUtil from '../../../../../utils/StyleUtil.js'

/**
 * GraphLineUI class
 * Manage the rendering of line graph
 */
class GraphLineUI {
    /**
     * Get the graph image
     * @param {Object} graph
     */
    static get(graph) {
        const entity = new PolyEntity({position: {x: 0, y: 0}})
        entity.setPoints(graph.data)
        StyleUtil.isThemeDark() && entity.setStyle({color: '#FFFFFF'})
        if (entity.regenerate()) {
            return UnitUI.getImage(entity, this.props)
        }
    }
}

GraphLineUI.props = {
    entityWidth: 200,
    entityHeight: 100
}

export default GraphLineUI