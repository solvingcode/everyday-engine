import Registry from './Registry.js'
import DefaultMaterial from '../material/DefaultMaterial.js'
import LightMaterial from '../material/LightMaterial.js'

export default class MaterialRegistry extends Registry{

    constructor() {
        super('material')
    }

    /**
     * @override
     */
    init(){
        this.concatRegistry([
            new DefaultMaterial(),
            new LightMaterial()
        ])
    }

    /**
     * @return {Material}
     */
    getDefault(){
        return this.getInstances()[0]
    }

    /**
     * @param {Material} instance
     */
    register(instance) {
        super.register(instance)
    }

    /**
     * @param {string} name
     * @return {Material}
     */
    getInstance(name) {
        if(!name){
            return this.getDefault()
        }
        return super.getInstance(name)
    }

    /**
     * @param {number} id
     * @return {Material}
     */
    getInstanceById(id) {
        return super.getInstanceById(id)
    }

    /**
     * @return {Material[]}
     */
    getInstances() {
        return super.getInstances()
    }

}