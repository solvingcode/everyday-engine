/**
 * @class {FileHelper}
 */
class FileHelper {

    /**
     * @param {string} content
     * @param {string} type
     * @param {string} filename
     */
    static save(content, type, filename = '') {
        const blob = new Blob([content], {type})
        const a = document.createElement('a')
        a.download = filename || 'webEngine'
        a.href = window.URL.createObjectURL(blob)
        a.click()
    }

    /**
     * @param {Blob} file
     * @param {string} type
     */
    static load(file, type) {
        if (this.validate(file, type)) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onload = () => {
                    resolve(reader.result)
                }
                reader.onerror = reject
                reader.readAsText(file)
            })
        }
    }

    /**
     * @param {Blob} file
     * @param {string} type
     * @return {boolean}
     */
    static validate(file, type) {
        const fileType = file.type
        return fileType === type
    }

    static type = {
        XML: 'text/xml',
        JS: 'text/javascript',
        Json: 'application/json',
        BIN: 'application/octet-binary;charset=utf-8'
    }

}

export default FileHelper