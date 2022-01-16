/**
 * @class {FileHelper}
 */
import ClientError from '../exception/type/ClientError.js'

class FileHelper {

    /**
     * @param {string} content
     * @param {string} type
     * @param {string} filename
     * @param {FileSystemFileHandle} handle
     */
    static save(content, type, filename, handle) {
        const blob = content instanceof Blob ? content : new Blob([content], {type})
        if (handle) {
            handle.then(fileHandle => {
                fileHandle.createWritable().then(writableStream => {
                    writableStream.write(blob).then(() => {
                        writableStream.close()
                    })
                })
            })
        } else {
            const a = document.createElement('a')
            a.download = filename || 'webEngine'
            a.href = window.URL.createObjectURL(blob)
            a.click()
        }
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
        } else {
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
     * @param {*} options
     * @return {Promise<File[]>}
     */
    static async openFileUpload(fileId, options = {}) {
        if (window.showOpenFilePicker) {
            const fileHandles = await window.showOpenFilePicker(options)
            return Promise.all(fileHandles.map(fileHandle => fileHandle.getFile()))
        } else {
            let fileInput = document.getElementById(fileId)
            if (!fileInput) {
                fileInput = document.createElement('input')
                fileInput.type = 'file'
                fileInput.id = fileId
                fileInput.multiple = true
                document.body.appendChild(fileInput)
                fileInput.click()
            }
            return new Promise(resolve => {
                fileInput.onchange = () => {
                    resolve(fileInput.files)
                }
            })
        }
    }

    /**
     * @param {string} fileId
     */
    static removeFileUpload(fileId) {
        if (document.getElementById(fileId)) {
            document.body.removeChild(document.getElementById(fileId))
        }
    }

    /**
     * @param {string} name
     * @return {string}
     */
    static getFilename(name) {
        if (name) {
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
        WAV: 'audio/wav',
        MPEG: 'audio/mpeg',
        FONT_TTF: 'font/ttf',
        FONT_OTF: 'font/otf'
    }

}

export default FileHelper

export const EXTENSIONS = {
    IMG: {
        type: 'image/*',
        ext: ['.png', '.jpeg', '.jpg']
    },
    XML: {
        type: 'text/xml',
        ext: ['.xml']
    },
    AUDIO: {
        type: 'audio/*',
        ext: ['.wav', '.mpeg']
    },
    FONT: {
        type: 'font/*',
        ext: ['.ttf', '.otf']
    },
    ZIP: {
        type: 'application/zip',
        ext: ['.zip']
    }
}