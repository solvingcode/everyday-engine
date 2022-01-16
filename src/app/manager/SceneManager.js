import SystemError from '../exception/type/SystemError.js'
import SceneManagerData from '../project/data/SceneManagerData.js'
import Scene, {SceneLoadMode} from '../scene/Scene.js'
import CommonUtil from '../utils/CommonUtil.js'

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
     * @return {Scene}
     */
    getSelected() {
        return this.scenes.find(scene => scene.isSelected())
    }

    /**
     * @return {Scene[]}
     */
    getIncluded(){
        return this.scenes.filter(scene => scene.isIncluded())
    }

    /**
     * @param {Unit} unit
     * @return {Scene}
     */
    findSceneByUnit(unit){
        return this.scenes.find(pScene => pScene.getUnitManager().findUnitById(unit.getId()))
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
     * @param {Scene} scene
     * @return {boolean}
     */
    hasScene(scene){
        return !!this.scenes.find(pScene => pScene === scene)
    }

    /**
     * @param {number} index
     * @return {Scene}
     */
    findByIndex(index) {
        return this.scenes.find(scene => scene.getIndex() === index)
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
    newScene(name){
        return new Scene(name)
    }

    /**
     * @param {string} name
     * @return {Scene}
     */
    create(name) {
        const scene = this.newScene(name)
        CommonUtil.setupName(scene, scene.getName(),
            (pName) => scene.setName(pName), (pName) => this.findByName(pName))
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
     * @param {boolean} edit
     * @param {string} mode
     */
    load(world, scene, edit, mode = SceneLoadMode.DEFAULT) {
        if (scene) {
            const exist = this.findByName(scene.getName())
            if (exist) {
                world.loadScene(scene, mode, edit)
                exist.setLoaded(true)
            } else {
                throw new SystemError(`Scene with name "${scene.getName()}" not found`)
            }
        }
    }

    unloadAll(){
        this.scenes.forEach(scene => scene.setLoaded(false))
    }

    unSelectAll(){
        this.scenes.forEach(scene => scene.setSelected(false))
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
            scene.setIncluded(true)
            this.activate(scene)
        }
    }

}