/**
 * @abstract
 * @class {ProjectExporter}
 */
class ProjectExporter {

    /**
     * @abstract
     * @param {string} data
     * @param {FileSystemFileHandle} handle
     */
    async export(data, handle) {
        throw new TypeError('ProjectExport.export must be implemented!')
    }

}

export default ProjectExporter