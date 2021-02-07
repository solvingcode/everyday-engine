import EntityMotion from './EntityMotion.js'

/**
 * @class {ComponentEntity}
 * Component Entity can be used to manage component that do a specific task (like camera).
 * Component Entity can be drawn on the scene and the layer, but not on the game play
 */
export default class ComponentEntity extends EntityMotion {

    constructor(props) {
        super(props)
        this.shape = EntityMotion.shapes.COMPONENT
    }

}