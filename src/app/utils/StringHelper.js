export default class StringHelper{

    /**
     * @param {string} string
     * @return {string}
     */
    static capFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    /**
     * @param {string} string
     * @return {string}
     */
    static lowFirstLetter(string){
        return string.charAt(0).toLowerCase() + string.slice(1)
    }

    /**
     * @param {string} string
     * @return {string}
     */
    static escapeRegex(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

}