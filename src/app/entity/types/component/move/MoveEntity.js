import ComponentEntity from '../ComponentEntity.js'

export default class MoveEntity extends ComponentEntity{

    constructor(props) {
        super(props)
        this.selectable = false
        this.props.style.borderSize = 4
    }

}