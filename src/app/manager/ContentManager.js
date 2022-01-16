import ClientError from '../exception/type/ClientError.js'

export default class ContentManager {

    static instance

    /**
     * @type {Content[]}
     */
    contents

    /**
     * @param {Class} type
     * @return {Content}
     */
    findByType(type) {
        return this.contents.find(content => content instanceof type)
    }

    /**
     * @param {Class} type
     */
    create(type) {
        if (!this.findByType(type)) {
            this.contents.push(new type())
        } else {
            throw new ClientError(`Content "${type.name}" exists already`)
        }
    }

    /**
     * @return {ContentManager}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export const TYPES = {
    OBJECT_CONTEXT: 'object-context'
}