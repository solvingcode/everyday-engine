define(function (require) {

    const AppState = require('../core/AppState.js')
    const { MouseButton } = require('../core/Mouse.js')
    const EntityManager = require('../world/manager/EntityManager.js')
    const EllipseEntity = require('../world/entity/EllipseEntity.js')
    const RectEntity = require('../world/entity/RectEntity.js')
    const LineEntity = require('../world/entity/LineEntity.js')

    class Drawer {

        /**
         * Execute draw action for each type of item (Ellipse, Rect, ...)
         * @param {Mouse} mouse 
         */
        execute(mouse) {
            const appState = AppState.get()
            const typeEntity = {
                ELLIPSE: EllipseEntity,
                RECT: RectEntity,
                LINE: LineEntity
            }
            Object.entries(typeEntity).map(entry => {
                if (mouse.isButtonPressed(MouseButton.LEFT)) {
                    if (appState.hasState(`TO_DRAW_${entry[0]}`)) {
                        this.startDraw(entry[0])
                    }
                }
                if (mouse.isButtonClicked(MouseButton.LEFT)) {
                    if (appState.hasState(`DRAWING_${entry[0]}`)) {
                        this.endDraw(entry[0])
                    }
                }
                if (appState.hasState(`DRAWING_${entry[0]}`)) {
                    this.draw(mouse.position, entry[1])
                }
            }
            )
        }

        /**
         * Check which entity to start drawing.
         * @param {String} type 
         */
        startDraw(type) {
            const appState = AppState.get()
            appState.removeState('TO_DRAW', false)
            appState.setUniqStateByGroup('DRAWING', type)
        }

        /**
         * Check which entity to end drawing.
         * @param {String} type 
         */
        endDraw(type) {
            const appState = AppState.get()
            appState.removeState('DRAWING', false)
            appState.setUniqStateByGroup('TO_DRAW', type)
        }

        /**
         * Draw an entity.
         * @param {Object} position 
         * @param {String} type 
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