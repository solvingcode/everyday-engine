export default class StringHelper{

    /**
     * @param {string} string
     * @return {string}
     */
    static capFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

}