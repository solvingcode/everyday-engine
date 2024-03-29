/**
 * @class {ZipHelper}
 */
import FileHelper from './FileHelper.js'

export default class ZipHelper {

    /**
     * @param {{name: string, data: string}[]} files
     * @param {string} filename
     * @param {FileSystemFileHandle} handle
     */
    static save(files, handle, filename = '') {
        const zip = new JSZip()
        const dir = zip.folder(filename)
        files.forEach(file => dir.file(file.name, file.data))
        zip.generateAsync({type: 'blob'}).then(
            blob => FileHelper.save(blob, FileHelper.type.ZIP, filename, handle)
        )
    }

}