export default class ClipboardManager {

    static instance

    /**
     * @type {string|null}
     */
    content

    /**
     * @return {string|null}
     */
    getContent(){
        return this.content
    }

    /**
     * @param {string} content
     */
    setContent(content){
        this.content = content
    }

    clear(){
        this.content = null
    }

    /**
     * @return {ClipboardManager}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}