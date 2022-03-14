import AFunction from '../AFunction.js'
import NotImplementedError from '../../../exception/type/NotImplementedError.js'

/**
 * @abstract
 */
export default class ANativeFunction extends AFunction {

    /**
     * @abstract
     * @return {function(any): any}
     */
    impl() {
        throw new NotImplementedError(this, this.impl)
    }

}