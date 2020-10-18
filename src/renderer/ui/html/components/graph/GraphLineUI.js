define(function (require) {

    const PolyEntity = require('../../../../../world/entity/PolyEntity.js')
    const EntityUI = require('../entity/EntityUI.js')

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
            const entity = new PolyEntity({ position: { x: 0, y: 0 } })
            entity.setPoints(graph.data)
            if (entity.regenerate()) {
                return EntityUI.getImage(entity, this.props)
            }
        }
    }

    GraphLineUI.props = {
        entityWidth: 200,
        entityHeight: 100
    }

    return GraphLineUI
})