export default class CommonUtil {

    /**
     * @param {Unit|Component|Scene} object
     * @param {string} initialName
     * @param {Function} setName
     * @param {Function} findByName
     */
    static setupName(object, initialName, setName, findByName) {
        let name = initialName
        let existUnit = null
        let iDuplicate = 0
        do {
            setName(name)
            existUnit = findByName(name)
            if (existUnit) {
                iDuplicate++
                name = `${initialName} (${iDuplicate})`
            }
        } while (existUnit)
    }

}