import Component from '../Component.js'

/**
 * @abstract
 */
export default class LightComponent extends Component{

    constructor(name) {
        super(name || 'Light')
    }

}