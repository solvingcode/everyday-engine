import ConstraintEntity from './ConstraintEntity.js'

/**
 * @class {MouseConstraintEntity}
 * @extends {ConstraintEntity}
 */
class MouseConstraintEntity extends ConstraintEntity {

    constructor(props) {
        super({...props, name: 'Mouse constraint'})
        this.visible = false
    }

}

export default MouseConstraintEntity