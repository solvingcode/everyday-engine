export default class EventRegistry{

    static instance

    /**
     * @private
     */
    constructor() {
        /**
         * @private
         * @type {AEvent[]}
         */
        this.registry = []
    }

    /**
     * @param {AEvent[]} registry
     */
    init(registry){
        this.registry = registry
    }

    /**
     * @param {AEvent} event
     */
    register(event){
        if(this.getEvent(event.getName())){
            throw new TypeError(`Event with name ${event.getName()} is already registered`)
        }
        this.registry.push(event)
    }

    /**
     * @param {string} name
     * @return {AEvent}
     */
    getEvent(name){
        return this.registry.find(event => event.getName() === name)
    }

    /**
     * @return {AEvent[]}
     */
    getEvents(){
        return this.registry
    }

    /**
     * @return {EventRegistry}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}