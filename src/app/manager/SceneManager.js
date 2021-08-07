import SystemError from '../exception/type/SystemError.js'
import SceneManagerData from '../project/data/SceneManagerData.js'
import Scene, {SceneLoadMode} from '../scene/Scene.js'

export default class SceneManager extends SceneManagerData {

    constructor() {
        super()
        this.scenes = []
    }

    /**
     * @return {Scene}
     */
    getActive() {
        return this.scenes.find(scene => scene.isActive())
    }

    /**
     * @return {Scene[]}
     */
    getLoaded() {
        return this.scenes.filter(scene => scene.isLoaded())
    }

    /**
     * @return {Scene[]}
     */
    getLoading(){
        return this.scenes.filter(scene => scene.isLoading())
    }

    /**
     * @return {Scene[]}
     */
    getUnLoading(){
        return this.scenes.filter(scene => scene.isUnLoading())
    }

    /**
     * @param {number} id
     * @return {Scene}
     */
    findById(id) {
        return this.scenes.find(scene => scene.getId() === id)
    }

    /**
     * @param {string} name
     * @return {Scene}
     */
    findByName(name) {
        return this.scenes.find(scene => scene.getName() === name)
    }

    /**
     * @param {string} name
     * @return {Scene}
     */
    create(name) {
        const scene = new Scene(name)
        this.tryAdd(scene)
        return scene
    }

    /**
     * @param {Scene} scene
     */
    remove(scene) {
        const index = this.scenes.findIndex(pScene => pScene === scene)
        if (index >= 0) {
            this.scenes.splice(index, 1)
        } else {
            throw new SystemError(`Cannot remove Scene Id ${scene.getId()} : Not found`)
        }
    }

    /**
     * @param {string} name
     */
    activateByName(name) {
        this.activate(this.findByName(name))
    }

    /**
     * @param {Scene} scene
     */
    activate(scene) {
        if (scene) {
            const exist = this.findByName(scene.getName())
            if (exist) {
                exist.setActive(true)
            } else {
                throw new SystemError(`Scene with name "${scene.getName()}" not found`)
            }
        }
    }

    /**
     * @param {string} name
     */
    deactivateByName(name) {
        this.deactivate(this.findByName(name))
    }

    /**
     * @param {Scene} scene
     */
    deactivate(scene) {
        if (scene) {
            const exist = this.findByName(scene.getName())
            if (exist) {
                exist.setActive(false)
            } else {
                throw new SystemError(`Scene with name "${scene.getName()}" not found`)
            }
        }
    }

    /**
     * @param {World} world
     * @param {Scene} scene
     * @param {string} mode
     */
    load(world, scene, mode= SceneLoadMode.DEFAULT) {
        if (scene) {
            const exist = this.findByName(scene.getName())
            if (exist) {
                exist.setLoaded(true)
                world.loadScene(scene, mode)
            } else {
                throw new SystemError(`Scene with name "${scene.getName()}" not found`)
            }
        }
    }

    /**
     * @param {World} world
     * @param {Scene} scene
     */
    unLoad(world, scene) {
        if (scene) {
            const exist = this.findByName(scene.getName())
            if (exist) {
                exist.setLoaded(false)
                world.unLoadScene(scene)
            } else {
                throw new SystemError(`Scene with name "${scene.getName()}" not found`)
            }
        }
    }

    /**
     * @param {Scene} scene
     */
    tryAdd(scene) {
        const existScene = this.findByName(scene.getName())
        if (existScene) {
            throw new SystemError(`Scene with name "${scene.getName()}" already exist!`)
        }
        this.scenes.push(scene)
    }

    init() {
        if (!this.scenes.length) {
            const scene = this.create('Scene')
            this.activate(scene)
        }
    }

}