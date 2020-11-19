define(function (require) {

    const AppState = require('../../state/AppState.js')
    const Runner = require('../Runner.js')
    const { MouseButton } = require('../../core/Mouse.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const EllipseEntity = require('../../world/entity/EllipseEntity.js')
    const CircleEntity = require('../../world/entity/CircleEntity.js')
    const RectEntity = require('../../world/entity/RectEntity.js')
    const LineEntity = require('../../world/entity/LineEntity.js')
    const JointEntity = require('../../world/entity/JointEntity.js')
    const AttachJointEntity = require('../../world/entity/AttachJointEntity.js')
    const AttachPointEntity = require('../../world/entity/AttachPointEntity.js')
    const PolyEntity = require('../../world/entity/PolyEntity.js')
    const SelectorEntity = require('../../world/entity/SelectorEntity.js')

    /**
     * Draw Runner class
     * Run actions for drawing
     */
    class DrawerRunner extends Runner {

        constructor() {
            super()
            this.currentEntity = null
            this.isCurrentDrawValid = false
        }

        /**
         * Execute draw action for each type of item (Ellipse, Rect, ...)
         * @param {Mouse} mouse 
         * @param {Menu} menu 
         * @todo Think to not use the MenuRunner to valid position
         */
        execute(mouse, menu) {
            const appState = AppState.get()
            const defaultStartEvent = (pMouse) => pMouse.isButtonPressed(MouseButton.LEFT)
            const defaultEndEvent = (pMouse) => pMouse.isButtonClicked(MouseButton.LEFT)
            const typeEntity = {
                CIRCLE: {
                    entity: CircleEntity
                },
                ELLIPSE: {
                    entity: EllipseEntity
                },
                RECT: {
                    entity: RectEntity
                },
                LINE: {
                    entity: LineEntity
                },
                JOINT: {
                    entity: JointEntity
                },
                ATTACH_JOINT: {
                    entity: AttachJointEntity
                },
                ATTACH_POINT: {
                    entity: AttachPointEntity
                },
                SELECT: {
                    entity: SelectorEntity
                },
                POLY: {
                    entity: PolyEntity,
                    startEvent: (pMouse) => pMouse.isButtonClicked(MouseButton.LEFT),
                    endEvent: (pMouse) => pMouse.isButtonDoubleClicked(MouseButton.LEFT)
                }
            }
            Object.entries(typeEntity).forEach(entry => {
                const type = entry[0]
                const props = entry[1]
                const startEvent = props.startEvent || defaultStartEvent
                const endEvent = props.endEvent || defaultEndEvent
                if (startEvent(mouse) && appState.hasState(`TO_DRAW_${type}`) && this.isPositionValid(mouse, menu)) {
                    this.startDraw(type)
                }
                if (endEvent(mouse) && appState.hasState(`DRAWING_${type}`)) {
                    this.endDraw(type)
                }
                if (appState.hasState(`DRAWING_${type}`)) {
                    this.draw(mouse.position, props.entity)
                }
            })
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
            const entityManager = EntityManager.get()
            appState.removeState('DRAWING', false)
            appState.setUniqStateByGroup('TO_DRAW', type)
            this.currentEntity.end()
            if (this.isCurrentDrawValid) {
                this.currentEntity.close()
            } else {
                entityManager.delete(this.currentEntity)
            }
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
            this.isCurrentDrawValid = entityManager.make(this.currentEntity)
        }

        /**
         * Is position of the given mouse is valid (inside draw area)
         * @param {Mouse} mouse
         * @param {Menu} menu
         */
        isPositionValid(mouse, menu) {
            return !menu.getUIRenderer().getItemAt(mouse)
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