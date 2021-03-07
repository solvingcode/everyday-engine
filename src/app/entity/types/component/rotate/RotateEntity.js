import ComponentEntity from '../ComponentEntity.js'

export default class RotateEntity extends ComponentEntity{

    constructor(props) {
        super(props)
        this.selectable = false
        this.props.getStyle().setBorderSize(4)
    }

}