define(function (require) {

    const AppState = require('../core/AppState.js')
    const Runner = require('./Runner.js')
    const { MouseButton } = require('../core/Mouse.js')
    const EntityManager = require('../world/manager/EntityManager.js')
    const EllipseEntity = require('../world/entity/EllipseEntity.js')
    const RectEntity = require('../world/entity/RectEntity.js')
    const LineEntity = require('../world/entity/LineEntity.js')
    const PolyEntity = require('../world/entity/PolyEntity.js')

    class DrawerRunner extends Runner {

        constructor() {
            super()
            this.currentEntity = null
        }

        /**
         * Execute draw action for each type of item (Ellipse, Rect, ...)
         * @param {Mouse} mouse 
         */
        execute(mouse) {
            const appState = AppState.get()
            const defaultStartEvent = (mouse) => mouse.isButtonPressed(MouseButton.LEFT)
            const defaultEndEvent = (mouse) => mouse.isButtonClicked(MouseButton.LEFT)
            const typeEntity = {
                ELLIPSE: {
                    entity: EllipseEntity
                },
                RECT: {
                    entity: RectEntity
                },
                LINE: {
                    entity: LineEntity
                },
                POLY: {
                    entity: PolyEntity,
                    startEvent: (mouse) => mouse.isButtonClicked(MouseButton.LEFT),
                    endEvent: (mouse) => mouse.isButtonDoubleClicked(MouseButton.LEFT)
                }
            }
            Object.entries(typeEntity).map(entry => {
                const type = entry[0]
                const props = entry[1]
                const startEvent = props.startEvent || defaultStartEvent
                const endEvent = props.endEvent || defaultEndEvent
                if (startEvent(mouse) && appState.hasState(`TO_DRAW_${type}`)) {
                    this.startDraw(type)
                }
                if (endEvent(mouse) && appState.hasState(`DRAWING_${type}`)) {
                    this.endDraw(type)
                }
                if (appState.hasState(`DRAWING_${type}`)) {
                    this.draw(mouse.position, props.entity)
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
            this.currentEntity = null
        }

        /**
         * Check which entity to end drawing.
         * @param {String} type 
         */
        endDraw(type) {
            const appState = AppState.get()
            appState.removeState('DRAWING', false)
            appState.setUniqStateByGroup('TO_DRAW', type)
            this.currentEntity.close()
        }

        /**
         * Draw an entity.
         * @param {Object} position 
         * @param {String} type 
         */
        draw(position, type) {
            const entityManager = EntityManager.get()
            if (!this.currentEntity) {
                this.currentEntity = entityManager.load(position.x, position.y, type)
            }
            entityManager.make(this.currentEntity)
        }

        static get() {
            if (!DrawerRunner.instance) {
                DrawerRunner.instance = new DrawerRunner()
            }
            return DrawerRunner.instance
        }
    }

    DrawerRunner.instance = null

    return DrawerRunner
})