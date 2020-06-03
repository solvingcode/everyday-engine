define(function (require) {

    const AppState = require('../core/AppState.js')
    const EntityManager = require('../world/manager/EntityManager.js')
    const CircleEntity = require('../world/entity/CircleEntity.js')
    const RectEntity = require('../world/entity/RectEntity.js')
    const LineEntity = require('../world/entity/LineEntity.js')

    class Drawer {

        /**
         * Execute draw action for each type of item (Circle, Rect, ...)
         * @param {position} position 
         */
        execute(position) {
            const appState = AppState.get()
            const typeEntity = {
                CIRCLE: CircleEntity,
                RECT: RectEntity,
                LINE: LineEntity
            }
            Object.entries(typeEntity).map(entry =>
                appState.hasState(`TO_DRAW_${entry[0]}`) && this.draw(position, entry[1])
            )
        }

        /**
         * Draw an entity.
         * @param {Object} position 
         */
        draw(position, type) {
            const entityManager = EntityManager.get()
            entityManager.load(position.x, position.y, type)
        }

        static get() {
            if (!Drawer.instance) {
                Drawer.instance = new Drawer()
            }
            return Drawer.instance
        }
    }

    Drawer.instance = null

    return Drawer
})