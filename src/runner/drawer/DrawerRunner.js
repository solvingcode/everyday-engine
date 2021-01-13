define(function (require) {

    const StateManager = require('../../state/StateManager.js')
    const Runner = require('../Runner.js')
    const {MouseButton} = require('../../core/Mouse.js')
    const CircleEntity = require('../../entity/types/shape/CircleEntity.js')
    const RectEntity = require('../../entity/types/shape/RectEntity.js')
    const JointEntity = require('../../entity/types/constraint/JointEntity.js')
    const AttachPointEntity = require('../../entity/types/constraint/AttachPointEntity.js')
    const SelectorEntity = require('../../entity/types/edit/SelectorEntity.js')
    const World = require('../../world/World.js')

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
         *
         * @var {{[string]: {entity: Entity, startEvent: any, endEvent: any}}} typeEntity
         *
         * @todo Think to not use the MenuRunner to valid position
         */
        execute(mouse, menu) {
            const stateManager = StateManager.get()
            const world = World.get()
            const position = world.getWorldPosition(mouse.position)
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
                    this.draw(position, props.entity)
                    if (endEvent(mouse)) {
                        this.endDraw(stateManager, type)
                        stateManager.endState(type, 1)
                        stateManager.startState(type, 1)
                    }
                }
                if (stateManager.isStop(type)) {
                    stateManager.endState(type ,1)
                }
            })
        }

        /**
         * Check which entity to start drawing.
         * @param {StateManager} stateManager
         * @param {String} type
         */
        startDraw(stateManager, type) {
            stateManager.progressState(type, 1)
            this.currentEntity = null
        }

        /**
         * Check which entity to end drawing.
         * @param {StateManager} stateManager
         * @param {String} type
         */
        endDraw(stateManager, type) {
            if(this.currentEntity){
                this.currentEntity.end()
                if (this.isCurrentDrawValid) {
                    this.currentEntity.close()
                } else {
                    World.get().deleteEntity(this.currentEntity)
                }
                this.currentEntity = null
            }
        }

        /**
         * Draw an entity.
         * @param {Vector} position
         * @param {Entity} type
         */
        draw(position, type) {
            const world = World.get()
            if (!this.currentEntity) {
                this.currentEntity = world.loadEntity(position, type)
                this.currentEntity.setLoading(true)
            }
            this.isCurrentDrawValid = world.makeEntity(this.currentEntity)
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