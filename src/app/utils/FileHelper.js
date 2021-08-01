/**
 * @class {FileHelper}
 */
import ClientError from '../exception/type/ClientError.js'

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
        }else{
            throw new ClientError(`Cannot load project (format not supported "${file.type}")`)
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
     * @return {File[]}
     */
    static openFileUpload(fileId) {
        let fileInput = document.getElementById(fileId)
        if (!fileInput) {
            fileInput = document.createElement('input')
            fileInput.type = 'file'
            fileInput.id = fileId
            fileInput.multiple = true
            document.body.appendChild(fileInput)
            fileInput.click()
        }
        return fileInput.files
    }

    /**
     * @param {string} fileId
     */
    static removeFileUpload(fileId) {
        document.body.removeChild(document.getElementById(fileId))
    }

    /**
     * @param {string} name
     * @return {string}
     */
    static getFilename(name){
        if(name){
            return name.replace(/(.+)(\.[a-zA-Z]+)/, '$1')
        }
        return ''
    }

    static type = {
        XML: 'text/xml',
        JS: 'text/javascript',
        Json: 'application/json',
        BIN: 'application/octet-binary;charset=utf-8',
        ZIP: 'application/zip',
        IMG_JPEG: 'image/jpeg',
        IMG_PNG: 'image/png',
        WAV: 'audio/wav'
    }

}

export default FileHelper