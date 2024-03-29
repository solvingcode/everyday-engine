class Loop {

    constructor() {
        this.loop = this.loop.bind(this)
        this.runners = []
    }

    /**
     * @type {Class[]}
     */
    runners

    /**
     * @return {Class[]}
     */
    getRunners() {
        return this.runners
    }

    async init(){
        await this.doInit()
    }

    /**
     * @abstract
     */
    async doInit() {
        throw new TypeError('Loop.init must be implemented!')
    }

    /**
     * @abstract
     */
    loop() {
        throw new TypeError('Loop.loop must be implemented!')
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export default Loop