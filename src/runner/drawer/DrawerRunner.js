define(function (require) {

    const StateManager = require('../../state/StateManager.js')
    const Runner = require('../Runner.js')
    const {MouseButton} = require('../../core/Mouse.js')
    const EntityManager = require('../../world/manager/EntityManager.js')
    const CircleEntity = require('../../world/entity/CircleEntity.js')
    const RectEntity = require('../../world/entity/RectEntity.js')
    const JointEntity = require('../../world/entity/JointEntity.js')
    const AttachPointEntity = require('../../world/entity/AttachPointEntity.js')
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
            const stateManager = StateManager.get()
            const defaultStartEvent = (pMouse) => pMouse.isButtonPressed(MouseButton.LEFT)
            const defaultEndEvent = (pMouse) => pMouse.isButtonClicked(MouseButton.LEFT)
            const typeEntity = {
                CIRCLE: {
                    entity: CircleEntity
                },
                RECT: {
                    entity: RectEntity
                },
                JOINT: {
                    entity: JointEntity
                },
                ATTACH_POINT: {
                    entity: AttachPointEntity
                },
                SELECT: {
                    entity: SelectorEntity
                }
            }
            Object.entries(typeEntity).forEach(entry => {
                const type = `DRAW_${entry[0]}`
                const props = entry[1]
                const startEvent = props.startEvent || defaultStartEvent
                const endEvent = props.endEvent || defaultEndEvent
                if (startEvent(mouse) && stateManager.isStart(type) && this.isPositionValid(mouse, menu)) {
                    this.startDraw(stateManager, type)
                }
                if (stateManager.isProgress(type)) {
                    this.draw(mouse.position, props.entity)
                    if (endEvent(mouse)) {
                        stateManager.stopState(type)
                    }
                }
                if (stateManager.isStop(type)) {
                    this.endDraw(stateManager, type)
                }
            })
        }

        /**
         * Check which entity to start drawing.
         * @param {StateManager} stateManager
         * @param {String} type
         */
        startDraw(stateManager, type) {
            stateManager.progressState(type)
            this.currentEntity = null
        }

        /**
         * Check which entity to end drawing.
         * @param {StateManager} stateManager
         * @param {String} type
         */
        endDraw(stateManager, type) {
            const entityManager = EntityManager.get()
            stateManager.endState(type)
            if(this.currentEntity){
                this.currentEntity.end()
                if (this.isCurrentDrawValid) {
                    this.currentEntity.close()
                } else {
                    entityManager.delete(this.currentEntity)
                }
                this.currentEntity = null
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