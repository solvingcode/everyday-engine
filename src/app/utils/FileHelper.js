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
        const blob = content instanceof Blob ? content : new Blob([content], {type})
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

    /**
     * @param {string} fileId
     * @return {Blob}
     */
    static openFileUpload(fileId) {
        let fileInput = document.getElementById(fileId)
        if (!fileInput) {
            fileInput = document.createElement('input')
            fileInput.type = 'file'
            fileInput.id = fileId
            document.body.appendChild(fileInput)
            fileInput.click()
        }
        return fileInput.files && fileInput.files[0]
    }

    /**
     * @param {string} fileId
     */
    static removeFileUpload(fileId) {
        document.body.removeChild(document.getElementById(fileId))
    }

    static type = {
        XML: 'text/xml',
        JS: 'text/javascript',
        Json: 'application/json',
        BIN: 'application/octet-binary;charset=utf-8',
        ZIP: 'application/zip',
        IMG_JPEG: 'image/jpeg',
        IMG_PNG: 'image/png'
    }

}

export default FileHelper