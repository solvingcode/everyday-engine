import {CURSOR} from '../core/Mouse.js'
import SystemError from '../exception/type/SystemError.js'

/**
 * @typedef {{code: string, id: number}} StateType
 */

/**
 * Manage the state of the application over time
 * @property {StateType[]} stateList
 */
class AppState {

    constructor() {
        this.reset()
    }

    /**
     * Get the state of the application (drawing ellipse,
     * starting/pausing simulation, moving object, ...).
     * @return {string[]}
     */
    getState() {
        return this.state
    }

    /**
     * Get all data associated to a topic.
     * Used to access data related to a state
     * @param {String} topic
     */
    getData(topic) {
        return this.data && this.data[topic]
    }

    /**
     * Set data.
     * Used to set data for a given state
     * @param {Object} data
     */
    setData(data) {
        this.data = _.merge(this.data, data)
        return this
    }

    /**
     * Set data associated to a topic
     * @param {string} topic
     * @param {Object|Array} data
     */
    setDataByTopic(topic, data) {
        const dataTopic = this.data[topic]
        if (dataTopic) {
            if (_.isArray(dataTopic)) {
                this.data[topic] = dataTopic.concat(data)
            } else {
                this.data[topic] = {dataTopic, ...data}
            }
        } else {
            this.data[topic] = data
        }
        return this
    }

    /**
     * Verify if Application has a state.
     * @param {String} state
     */
    hasState(state) {
        return this.state.indexOf(state) >= 0
    }

    /**
     * Verify if Application has a data state.
     * @param {Object} data
     */
    hasData(data) {
        for (const pIndex in data) {
            if (data[pIndex] !== this.data[pIndex]) {
                return false
            }
        }
        return true
    }

    /**
     * Add a state to the states list.
     * @param {string} state
     */
    addState(state) {
        if (this.state.indexOf(state) === -1) {
            if (Object.keys(AppState.States).indexOf(state) >= 0) {
                this.state.push(state)
                const {cursor} = AppState.States[state]
                cursor && this.setData({cursor})
            } else {
                throw new SystemError(`${state} is not recognized as Application State`)
            }
        }
    }

    /**
     * Is the state can trigger history
     * @param {string} state
     * @return {boolean}
     */
    getIsHistory(state) {
        const {history} = AppState.States[state]
        return history
    }

    /**
     * Find all indices for a specific state or state pattern, use exact param to search for
     * state within the same pattern
     * @param {String} state
     * @param {Boolean} exact
     */
    findStateIndex(state, exact = true) {
        let indices = []
        if (exact) {
            const index = this.state.indexOf(state)
            if (index >= 0) {
                indices.push(index)
            }
        } else {
            const regExpState = new RegExp(`^${state}`)
            this.state.map(
                (state_, index) => state_.match(regExpState) && indices.push(index)
            )
        }
        return indices
    }

    /**
     * Remove a state from the application, use exact param to search for
     * state within the same pattern
     * @param {String} state
     * @param {Boolean} exact
     */
    removeState(state, exact = true) {
        const indices = this.findStateIndex(state, exact)
        indices.map((index) => this.state.splice(index, 1))
    }

    /**
     * Remove data state
     * @param {string} state
     */
    removeData(state) {
        delete this.data[state]
    }

    /**
     * Reset the state of the application
     */
    reset() {
        this.state = []
        this.data = {}
    }

    static get() {
        if (!AppState.instance) {
            AppState.instance = new AppState()
        }
        return AppState.instance
    }
}

AppState.instance = null

AppState.Categories = {
    ACTION: 'ACTION_',
    DRAW: 'DRAW_',
    CONFIRM: 'CONFIRM_'
}

AppState.ActionType = {
    STOP_NEXT: 'stop_next'
}

/**
 * @todo: Think to externalize the states configuration
 */
AppState.States = {
    DRAW_RECT_START: {history: false, cursor: CURSOR.CROSSHAIR},
    DRAW_JOINT_START: {history: false, cursor: CURSOR.CROSSHAIR},
    DRAW_SELECT_START: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_SELECT_GRAPH_START: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_NODE_EDGE_START: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_MOVE_START: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_SCALE_START: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_SCALE_PROGRESS: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_SCALE_STOP: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_ROTATE_START: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_ROTATE_PROGRESS: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_ROTATE_STOP: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_CIRCLE_START: {history: false, cursor: CURSOR.CROSSHAIR},
    DRAW_RECT_PROGRESS: {history: false, cursor: CURSOR.CROSSHAIR},
    DRAW_JOINT_PROGRESS: {history: false, cursor: CURSOR.CROSSHAIR},
    DRAW_ATTACH_POINT_PROGRESS: {history: false, cursor: CURSOR.POINTER},
    DRAW_SELECT_PROGRESS: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_SELECT_GRAPH_PROGRESS: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_NODE_EDGE_PROGRESS: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_MOVE_PROGRESS: {history: false, cursor: CURSOR.DEFAULT},
    DRAW_CIRCLE_PROGRESS: {history: false, cursor: CURSOR.CROSSHAIR},
    DRAW_CIRCLE_STOP: {history: true, cursor: CURSOR.DEFAULT},
    DRAW_RECT_STOP: {history: true, cursor: CURSOR.DEFAULT},
    DRAW_JOINT_STOP: {history: true, cursor: CURSOR.DEFAULT},
    DRAW_ATTACH_POINT_STOP: {history: true},
    DRAW_CAMERA_START: {history: false, cursor: CURSOR.CROSSHAIR},
    DRAW_CAMERA_PROGRESS: {history: false, cursor: CURSOR.CROSSHAIR},
    DRAW_CAMERA_STOP: {history: true, cursor: CURSOR.DEFAULT},
    DRAW_SELECT_STOP: {history: false},
    DRAW_SELECT_GRAPH_STOP: {history: false},
    DRAW_NODE_EDGE_STOP: {history: false},
    DRAW_MOVE_STOP: {history: false},
    SIMULATE_START: {history: false, cursor: CURSOR.DEFAULT},
    SIMULATE_PROGRESS: {history: false},
    SIMULATE_STOP: {history: false},
    ACTION_DELETE_START: {history: true},
    ACTION_DELETE_PROGRESS: {history: false},
    ACTION_DELETE_STOP: {history: false},
    ACTION_DELETE_UNIT_START: {history: true},
    ACTION_DELETE_UNIT_PROGRESS: {history: false},
    ACTION_DELETE_UNIT_STOP: {history: false},
    ACTION_DUPLICATE_START: {history: true},
    ACTION_DUPLICATE_PROGRESS: {history: false},
    ACTION_DUPLICATE_STOP: {history: false},
    ACTION_UNDO_START: {history: false},
    ACTION_UNDO_PROGRESS: {history: false},
    ACTION_UNDO_STOP: {history: false},
    ACTION_MOVE_START: {history: true, cursor: CURSOR.MOVE},
    ACTION_MOVE_PROGRESS: {history: false},
    ACTION_MOVE_STOP: {history: true},
    ACTION_MOVE_KEY_START: {history: false},
    ACTION_MOVE_KEY_PROGRESS: {history: false},
    ACTION_MOVE_KEY_STOP: {history: false},
    ACTION_MOVE_UNIT_START: {history: false},
    ACTION_MOVE_UNIT_PROGRESS: {history: false},
    ACTION_MOVE_UNIT_STOP: {history: false},
    ACTION_SCALE_START: {history: true, cursor: CURSOR.RESIZE},
    ACTION_SCALE_PROGRESS: {history: false},
    ACTION_SCALE_STOP: {history: true},
    ACTION_ROTATE_START: {history: true, cursor: CURSOR.MOVE},
    ACTION_ROTATE_PROGRESS: {history: false},
    ACTION_ROTATE_STOP: {history: true},
    ACTION_MOVE_UP_START: {history: true},
    ACTION_MOVE_UP_PROGRESS: {history: false},
    ACTION_MOVE_UP_STOP: {history: false},
    ACTION_MOVE_DOWN_START: {history: true},
    ACTION_MOVE_DOWN_PROGRESS: {history: false},
    ACTION_MOVE_DOWN_STOP: {history: false},
    ACTION_LOCK_START: {history: true},
    ACTION_LOCK_PROGRESS: {history: false},
    ACTION_LOCK_STOP: {history: false},
    ACTION_FOCUS_START: {history: true},
    ACTION_FOCUS_PROGRESS: {history: false},
    ACTION_FOCUS_STOP: {history: false},
    ACTION_UNFOCUS_START: {history: true},
    ACTION_UNFOCUS_PROGRESS: {history: false},
    ACTION_UNFOCUS_STOP: {history: false},
    ACTION_UNLOCK_START: {history: true},
    ACTION_UNLOCK_PROGRESS: {history: false},
    ACTION_UNLOCK_STOP: {history: false},
    ACTION_HIDE_START: {history: true},
    ACTION_HIDE_PROGRESS: {history: false},
    ACTION_HIDE_STOP: {history: false},
    ACTION_SHOW_START: {history: true},
    ACTION_SHOW_PROGRESS: {history: false},
    ACTION_SHOW_STOP: {history: false},
    ACTION_ROTATE_UP_START: {history: true},
    ACTION_ROTATE_UP_PROGRESS: {history: false},
    ACTION_ROTATE_UP_STOP: {history: false},
    ACTION_SELECT_ENTITY_START: {history: true},
    ACTION_SELECT_ENTITY_PROGRESS: {history: false},
    ACTION_SELECT_ENTITY_STOP: {history: false},
    ACTION_HISTORY_PUSH_START: {history: false},
    ACTION_HISTORY_PUSH_PROGRESS: {history: false},
    ACTION_HISTORY_PUSH_STOP: {history: false},
    ACTION_PHYSICS_STATIC_START: {history: true},
    ACTION_PHYSICS_STATIC_PROGRESS: {history: false},
    ACTION_PHYSICS_STATIC_STOP: {history: false},
    ACTION_PHYSICS_NOT_STATIC_START: {history: true},
    ACTION_PHYSICS_NOT_STATIC_PROGRESS: {history: false},
    ACTION_PHYSICS_NOT_STATIC_STOP: {history: false},
    ACTION_FORM_UPDATE_START: {history: true},
    ACTION_FORM_UPDATE_PROGRESS: {history: false},
    ACTION_FORM_UPDATE_STOP: {history: true},
    ACTION_MOVE_CAMERA_START: {history: false},
    ACTION_MOVE_CAMERA_PROGRESS: {history: false},
    ACTION_MOVE_CAMERA_STOP: {history: false},
    ACTION_ZOOM_CAMERA_START: {history: false},
    ACTION_ZOOM_CAMERA_PROGRESS: {history: false},
    ACTION_ZOOM_CAMERA_STOP: {history: false},
    ACTION_SAVE_PROJECT_START: {history: false},
    ACTION_SAVE_PROJECT_PROGRESS: {history: false},
    ACTION_SAVE_PROJECT_STOP: {history: false},
    ACTION_LOAD_PROJECT_START: {history: false},
    ACTION_LOAD_PROJECT_PROGRESS: {history: false},
    ACTION_ADD_ASSET_STOP: {history: false},
    ACTION_ADD_ASSET_START: {history: false},
    ACTION_ADD_ASSET_PROGRESS: {history: false},
    ACTION_ADD_ANIMATION_STOP: {history: true},
    ACTION_ADD_ANIMATION_START: {history: true},
    ACTION_ADD_ANIMATION_PROGRESS: {history: false},
    ACTION_ATTACH_COMPONENT_STOP: {history: false},
    ACTION_ATTACH_COMPONENT_START: {history: false},
    ACTION_ATTACH_COMPONENT_PROGRESS: {history: false},
    ACTION_ADD_ASSET_SCENE_STOP: {history: false},
    ACTION_ADD_ASSET_SCENE_START: {history: false},
    ACTION_ADD_ASSET_SCENE_PROGRESS: {history: false},
    ACTION_COMPILE_ASSET_SCRIPT_STOP: {history: false},
    ACTION_COMPILE_ASSET_SCRIPT_START: {history: false},
    ACTION_COMPILE_ASSET_SCRIPT_PROGRESS: {history: false},
    ACTION_COMPILE_SCRIPT_STOP: {history: false},
    ACTION_COMPILE_SCRIPT_START: {history: false},
    ACTION_COMPILE_SCRIPT_PROGRESS: {history: false},
    ACTION_ATTACH_ASSET_SCRIPT_STOP: {history: false},
    ACTION_ATTACH_ASSET_SCRIPT_START: {history: false},
    ACTION_ATTACH_ASSET_SCRIPT_PROGRESS: {history: false},
    ACTION_EDIT_ASSET_SCRIPT_XML_STOP: {history: false},
    ACTION_EDIT_ASSET_SCRIPT_XML_START: {history: false},
    ACTION_EDIT_ASSET_SCRIPT_XML_PROGRESS: {history: false},
    ACTION_LOAD_PROJECT_STOP: {history: false},
    ACTION_NEW_PROJECT_START: {history: false},
    ACTION_NEW_PROJECT_PROGRESS: {history: false},
    ACTION_NEW_PROJECT_STOP: {history: false},
    ACTION_EXPORT_PROJECT_START: {history: false},
    ACTION_EXPORT_PROJECT_PROGRESS: {history: false},
    ACTION_EXPORT_PROJECT_STOP: {history: false},
    ACTION_SELECT_LIST_ELEMENT_START: {history: false},
    ACTION_SELECT_LIST_ELEMENT_PROGRESS: {history: false},
    ACTION_SELECT_LIST_ELEMENT_STOP: {history: false},
    ACTION_COLLAPSE_PANEL_START: {history: false},
    ACTION_COLLAPSE_PANEL_PROGRESS: {history: false},
    ACTION_COLLAPSE_PANEL_STOP: {history: false},
    ACTION_HIDE_ITEM_START: {history: false},
    ACTION_HIDE_ITEM_PROGRESS: {history: false},
    ACTION_HIDE_ITEM_STOP: {history: false},
    ACTION_SHOW_ITEM_START: {history: false},
    ACTION_SHOW_ITEM_PROGRESS: {history: false},
    ACTION_SHOW_ITEM_STOP: {history: false},
    ACTION_LOCK_ITEM_START: {history: false},
    ACTION_LOCK_ITEM_PROGRESS: {history: false},
    ACTION_LOCK_ITEM_STOP: {history: false},
    ACTION_UNLOCK_ITEM_START: {history: false},
    ACTION_UNLOCK_ITEM_PROGRESS: {history: false},
    ACTION_UNLOCK_ITEM_STOP: {history: false},
    ACTION_ADD_CAMERA_START: {history: false},
    ACTION_ADD_CAMERA_PROGRESS: {history: false},
    ACTION_ADD_CAMERA_STOP: {history: false},
    ACTION_ADD_LIGHT_POINT_START: {history: false},
    ACTION_ADD_LIGHT_POINT_PROGRESS: {history: false},
    ACTION_ADD_LIGHT_POINT_STOP: {history: false},
    ACTION_ADD_LIGHT_GLOBAL_START: {history: false},
    ACTION_ADD_LIGHT_GLOBAL_PROGRESS: {history: false},
    ACTION_ADD_LIGHT_GLOBAL_STOP: {history: false},
    ACTION_SELECT_TAB_START: {history: false},
    ACTION_SELECT_TAB_PROGRESS: {history: false},
    ACTION_SELECT_TAB_STOP: {history: false},
    ACTION_CLOSE_TAB_START: {history: false},
    ACTION_CLOSE_TAB_PROGRESS: {history: false},
    ACTION_CLOSE_TAB_STOP: {history: false},
    ACTION_ADD_FOLDER_START: {history: true},
    ACTION_ADD_FOLDER_PROGRESS: {history: false},
    ACTION_ADD_FOLDER_STOP: {history: true},
    ACTION_SELECT_FOLDER_START: {history: false},
    ACTION_SELECT_FOLDER_PROGRESS: {history: false},
    ACTION_SELECT_FOLDER_STOP: {history: false},
    ACTION_SELECT_LAYER_ELEMENT_START: {history: false},
    ACTION_SELECT_LAYER_ELEMENT_PROGRESS: {history: false},
    ACTION_SELECT_LAYER_ELEMENT_STOP: {history: false},
    ACTION_SELECT_ASSET_START: {history: false},
    ACTION_SELECT_ASSET_PROGRESS: {history: false},
    ACTION_SELECT_ASSET_STOP: {history: false},
    ACTION_UNSELECT_ASSET_START: {history: false},
    ACTION_UNSELECT_ASSET_PROGRESS: {history: false},
    ACTION_UNSELECT_ASSET_STOP: {history: false},
    ACTION_ADD_SCRIPT_START: {history: false},
    ACTION_ADD_SCRIPT_PROGRESS: {history: false},
    ACTION_ADD_SCRIPT_STOP: {history: false},
    ACTION_ADD_GRAPH_SCRIPT_START: {history: false},
    ACTION_ADD_GRAPH_SCRIPT_PROGRESS: {history: false},
    ACTION_ADD_GRAPH_SCRIPT_STOP: {history: false},
    ACTION_ADD_CODE_SCRIPT_START: {history: false},
    ACTION_ADD_CODE_SCRIPT_PROGRESS: {history: false},
    ACTION_ADD_CODE_SCRIPT_STOP: {history: false},
    ACTION_DELETE_SCRIPT_NODE_START: {history: true},
    ACTION_DELETE_SCRIPT_NODE_PROGRESS: {history: false},
    ACTION_DELETE_SCRIPT_NODE_STOP: {history: true},
    ACTION_DELETE_SCRIPT_FUNCTION_START: {history: true},
    ACTION_DELETE_SCRIPT_FUNCTION_PROGRESS: {history: false},
    ACTION_DELETE_SCRIPT_FUNCTION_STOP: {history: true},
    ACTION_DELETE_SELECTED_NODE_START: {history: true},
    ACTION_DELETE_SELECTED_NODE_PROGRESS: {history: false},
    ACTION_DELETE_SELECTED_NODE_STOP: {history: true},
    ACTION_DELETE_SELECTED_EDGE_START: {history: true},
    ACTION_DELETE_SELECTED_EDGE_PROGRESS: {history: false},
    ACTION_DELETE_SELECTED_EDGE_STOP: {history: true},
    ACTION_DELETE_SCRIPT_EDGE_START: {history: true},
    ACTION_DELETE_SCRIPT_EDGE_PROGRESS: {history: false},
    ACTION_DELETE_SCRIPT_EDGE_STOP: {history: true},
    ACTION_ADD_SCRIPT_NODE_START: {history: false},
    ACTION_ADD_SCRIPT_NODE_PROGRESS: {history: false},
    ACTION_ADD_SCRIPT_NODE_STOP: {history: false},
    ACTION_NEW_SCRIPT_NODE_START: {history: false},
    ACTION_NEW_SCRIPT_NODE_PROGRESS: {history: false},
    ACTION_NEW_SCRIPT_NODE_STOP: {history: false},
    ACTION_ADD_SCRIPT_EDGE_START: {history: false},
    ACTION_ADD_SCRIPT_EDGE_PROGRESS: {history: false},
    ACTION_ADD_SCRIPT_EDGE_STOP: {history: false},
    ACTION_ADD_SCRIPT_NODE_INPUT_START: {history: false},
    ACTION_ADD_SCRIPT_NODE_INPUT_PROGRESS: {history: false},
    ACTION_ADD_SCRIPT_NODE_INPUT_STOP: {history: false},
    ACTION_DELETE_ASSET_START: {history: true},
    ACTION_DELETE_ASSET_PROGRESS: {history: false},
    ACTION_DELETE_ASSET_STOP: {history: true},
    ACTION_DELETE_FOLDER_START: {history: true},
    ACTION_DELETE_FOLDER_PROGRESS: {history: false},
    ACTION_DELETE_FOLDER_STOP: {history: true},
    ACTION_CLOSE_ERROR_POPUP_START: {history: false},
    ACTION_CLOSE_ERROR_POPUP_PROGRESS: {history: false},
    ACTION_CLOSE_ERROR_POPUP_STOP: {history: false},
    ACTION_EDIT_ASSET_ANIMATION_START: {history: false},
    ACTION_EDIT_ASSET_ANIMATION_PROGRESS: {history: false},
    ACTION_EDIT_ASSET_ANIMATION_STOP: {history: false},
    ACTION_DELETE_ANIMATION_FRAME_START: {history: true},
    ACTION_DELETE_ANIMATION_FRAME_PROGRESS: {history: false},
    ACTION_DELETE_ANIMATION_FRAME_STOP: {history: true},
    ACTION_PLAY_ANIMATION_START: {history: false},
    ACTION_PLAY_ANIMATION_PROGRESS: {history: false},
    ACTION_PLAY_ANIMATION_STOP: {history: false},
    ACTION_STOP_ANIMATION_START: {history: false},
    ACTION_STOP_ANIMATION_PROGRESS: {history: false},
    ACTION_STOP_ANIMATION_STOP: {history: false},
    ACTION_ADD_ANIMATION_SCRIPT_START: {history: true},
    ACTION_ADD_ANIMATION_SCRIPT_PROGRESS: {history: false},
    ACTION_ADD_ANIMATION_SCRIPT_STOP: {history: true},
    ACTION_EXPORT_ASSET_START: {history: false},
    ACTION_EXPORT_ASSET_PROGRESS: {history: false},
    ACTION_EXPORT_ASSET_STOP: {history: false},
    ACTION_DELETE_COMPONENT_START: {history: false},
    ACTION_DELETE_COMPONENT_PROGRESS: {history: false},
    ACTION_DELETE_COMPONENT_STOP: {history: false},
    ACTION_SELECT_LIST_TIMELINE_START: {history: false},
    ACTION_SELECT_LIST_TIMELINE_PROGRESS: {history: false},
    ACTION_SELECT_LIST_TIMELINE_STOP: {history: false},
    ACTION_PLAY_ASSET_AUDIO_START: {history: false},
    ACTION_PLAY_ASSET_AUDIO_PROGRESS: {history: false},
    ACTION_PLAY_ASSET_AUDIO_STOP: {history: false},
    ACTION_STOP_ASSET_AUDIO_START: {history: false},
    ACTION_STOP_ASSET_AUDIO_PROGRESS: {history: false},
    ACTION_STOP_ASSET_AUDIO_STOP: {history: false},
    ACTION_LOAD_SCENE_START: {history: true},
    ACTION_LOAD_SCENE_PROGRESS: {history: false},
    ACTION_LOAD_SCENE_STOP: {history: true},
    ACTION_OPEN_OPTION_START: {history: false},
    ACTION_OPEN_OPTION_PROGRESS: {history: false},
    ACTION_OPEN_OPTION_STOP: {history: false},
    ACTION_UNLOAD_SCENE_START: {history: true},
    ACTION_UNLOAD_SCENE_PROGRESS: {history: false},
    ACTION_UNLOAD_SCENE_STOP: {history: true},
    ACTION_ADD_UI_CONTAINER_START: {history: true},
    ACTION_ADD_UI_CONTAINER_PROGRESS: {history: false},
    ACTION_ADD_UI_CONTAINER_STOP: {history: true},
    ACTION_ADD_UI_IMAGE_START: {history: true},
    ACTION_ADD_UI_IMAGE_PROGRESS: {history: false},
    ACTION_ADD_UI_IMAGE_STOP: {history: true},
    ACTION_ALIGN_VIEW_START: {history: true},
    ACTION_ALIGN_VIEW_PROGRESS: {history: false},
    ACTION_ALIGN_VIEW_STOP: {history: true},
    ACTION_ADD_UI_TEXT_START: {history: true},
    ACTION_ADD_UI_TEXT_PROGRESS: {history: false},
    ACTION_ADD_UI_TEXT_STOP: {history: true},
    ACTION_ADD_UI_BUTTON_START: {history: true},
    ACTION_ADD_UI_BUTTON_PROGRESS: {history: false},
    ACTION_ADD_UI_BUTTON_STOP: {history: true},
    ACTION_ATTACH_ASSET_IMAGE_START: {history: true},
    ACTION_ATTACH_ASSET_IMAGE_PROGRESS: {history: false},
    ACTION_ATTACH_ASSET_IMAGE_STOP: {history: true},
    ACTION_ADD_SCENE_START: {history: true},
    ACTION_ADD_SCENE_PROGRESS: {history: false},
    ACTION_ADD_SCENE_STOP: {history: true},
    ACTION_ATTACH_LAYER_ELEMENT_START: {history: true},
    ACTION_ATTACH_LAYER_ELEMENT_PROGRESS: {history: false},
    ACTION_ATTACH_LAYER_ELEMENT_STOP: {history: true},
    ACTION_ALIGN_PARENT_START: {history: true},
    ACTION_ALIGN_PARENT_PROGRESS: {history: false},
    ACTION_ALIGN_PARENT_STOP: {history: true},
    ACTION_ADD_UI_EMPTY_START: {history: true},
    ACTION_ADD_UI_EMPTY_PROGRESS: {history: false},
    ACTION_ADD_UI_EMPTY_STOP: {history: true},
    ACTION_ADD_UI_SLIDER_START: {history: true},
    ACTION_ADD_UI_SLIDER_PROGRESS: {history: false},
    ACTION_ADD_UI_SLIDER_STOP: {history: true},
    ACTION_ADD_SCRIPT_FUNCTION_START: {history: false},
    ACTION_ADD_SCRIPT_FUNCTION_PROGRESS: {history: false},
    ACTION_ADD_SCRIPT_FUNCTION_STOP: {history: false},
    ACTION_CLOSE_CONFIRM_POPUP_START: {history: false},
    ACTION_CLOSE_CONFIRM_POPUP_PROGRESS: {history: false},
    ACTION_CLOSE_CONFIRM_POPUP_STOP: {history: false},
    CONFIRM_ACTION_DELETE_UNIT_START: {history: false},
    CONFIRM_ACTION_DELETE_START: {history: false},
    CONFIRM_ACTION_DELETE_FOLDER_START: {history: false},
    CONFIRM_ACTION_DELETE_SCRIPT_NODE_START: {history: true},
    CONFIRM_ACTION_DELETE_SCRIPT_FUNCTION_START: {history: true},
    CONFIRM_ACTION_DELETE_SELECTED_NODE_START: {history: true},
    CONFIRM_ACTION_DELETE_SELECTED_EDGE_START: {history: true},
    CONFIRM_ACTION_DELETE_SCRIPT_EDGE_START: {history: true},
    CONFIRM_ACTION_DELETE_ASSET_START: {history: true},
    CONFIRM_ACTION_DELETE_ANIMATION_FRAME_START: {history: true},
    CONFIRM_ACTION_DELETE_COMPONENT_START: {history: false},
    CONFIRM_ACTION_NEW_PROJECT_START: {history: false},
    ACTION_ATTACH_FOLDER_START: {history: true},
    ACTION_ATTACH_FOLDER_PROGRESS: {history: false},
    ACTION_ATTACH_FOLDER_STOP: {history: true},
    ACTION_ATTACH_ASSET_START: {history: true},
    ACTION_ATTACH_ASSET_PROGRESS: {history: false},
    ACTION_ATTACH_ASSET_STOP: {history: true},
    ACTION_ATTACH_EDITOR_START: {history: true},
    ACTION_ATTACH_EDITOR_PROGRESS: {history: false},
    ACTION_ATTACH_EDITOR_STOP: {history: true},
    ACTION_ATTACH_COMPONENT_VALUE_START: {history: true},
    ACTION_ATTACH_COMPONENT_VALUE_PROGRESS: {history: false},
    ACTION_ATTACH_COMPONENT_VALUE_STOP: {history: true},
    ACTION_EDIT_ASSET_START: {history: false},
    ACTION_EDIT_ASSET_PROGRESS: {history: false},
    ACTION_EDIT_ASSET_STOP: {history: false},
    ACTION_ADD_SCRIPT_FUNCTION_POPUP_START: {history: false},
    ACTION_ADD_SCRIPT_FUNCTION_POPUP_PROGRESS: {history: false},
    ACTION_ADD_SCRIPT_FUNCTION_POPUP_STOP: {history: false},
    ACTION_CONTENT_POPUP_START: {history: false},
    ACTION_CONTENT_POPUP_PROGRESS: {history: false},
    ACTION_CONTENT_POPUP_STOP: {history: false},
    ACTION_CLOSE_CONTENT_POPUP_START: {history: false},
    ACTION_CLOSE_CONTENT_POPUP_PROGRESS: {history: false},
    ACTION_CLOSE_CONTENT_POPUP_STOP: {history: false},
    ACTION_COPY_SELECTED_NODE_START: {history: false},
    ACTION_COPY_SELECTED_NODE_PROGRESS: {history: false},
    ACTION_COPY_SELECTED_NODE_STOP: {history: false},
    ACTION_PASTE_SCRIPT_START: {history: false},
    ACTION_PASTE_SCRIPT_PROGRESS: {history: false},
    ACTION_PASTE_SCRIPT_STOP: {history: false},
    ACTION_COPY_START: {history: false},
    ACTION_COPY_PROGRESS: {history: false},
    ACTION_COPY_STOP: {history: false},
    ACTION_PASTE_START: {history: false},
    ACTION_PASTE_PROGRESS: {history: false},
    ACTION_PASTE_STOP: {history: false},
    ACTION_COPY_UNIT_START: {history: false},
    ACTION_COPY_UNIT_PROGRESS: {history: false},
    ACTION_COPY_UNIT_STOP: {history: false},
    ACTION_PASTE_UNIT_START: {history: false},
    ACTION_PASTE_UNIT_PROGRESS: {history: false},
    ACTION_PASTE_UNIT_STOP: {history: false},
    ACTION_PASTE_ASSET_START: {history: false},
    ACTION_PASTE_ASSET_PROGRESS: {history: false},
    ACTION_PASTE_ASSET_STOP: {history: false},
    ACTION_CREATE_UNIT_INSTANT_START: {history: false},
    ACTION_CREATE_UNIT_INSTANT_PROGRESS: {history: false},
    ACTION_CREATE_UNIT_INSTANT_STOP: {history: false},
    ACTION_LOAD_UNIT_INSTANT_START: {history: false},
    ACTION_LOAD_UNIT_INSTANT_PROGRESS: {history: false},
    ACTION_LOAD_UNIT_INSTANT_STOP: {history: false},
    ACTION_ADD_MASK_START: {history: false},
    ACTION_ADD_MASK_PROGRESS: {history: false},
    ACTION_ADD_MASK_STOP: {history: false},
    ACTION_ADD_CRUD_START: {history: false},
    ACTION_ADD_CRUD_PROGRESS: {history: false},
    ACTION_ADD_CRUD_STOP: {history: false},
    ACTION_ADD_TAG_START: {history: false},
    ACTION_ADD_TAG_PROGRESS: {history: false},
    ACTION_ADD_TAG_STOP: {history: false},
    CONFIRM_ACTION_DELETE_CRUD_START: {history: false},
    CONFIRM_ACTION_DELETE_MASK_START: {history: false},
    CONFIRM_ACTION_DELETE_TAG_START: {history: false},
    ACTION_DELETE_MASK_START: {history: true},
    ACTION_DELETE_MASK_PROGRESS: {history: false},
    ACTION_DELETE_MASK_STOP: {history: true},
    ACTION_DELETE_CRUD_START: {history: true},
    ACTION_DELETE_CRUD_PROGRESS: {history: false},
    ACTION_DELETE_CRUD_STOP: {history: true},
    ACTION_DELETE_TAG_START: {history: true},
    ACTION_DELETE_TAG_PROGRESS: {history: false},
    ACTION_DELETE_TAG_STOP: {history: true},
    ACTION_ADD_GAME_INPUT_START: {history: false},
    ACTION_ADD_GAME_INPUT_PROGRESS: {history: false},
    ACTION_ADD_GAME_INPUT_STOP: {history: false},
    CONFIRM_ACTION_DELETE_GAME_INPUT_START: {history: false},
    ACTION_DELETE_GAME_INPUT_START: {history: true},
    ACTION_DELETE_GAME_INPUT_PROGRESS: {history: false},
    ACTION_DELETE_GAME_INPUT_STOP: {history: true},
    ACTION_REFRESH_START: {history: false},
    ACTION_REFRESH_PROGRESS: {history: false},
    ACTION_REFRESH_STOP: {history: false},
    ACTION_ADD_TILE_GRID_START: {history: false},
    ACTION_ADD_TILE_GRID_PROGRESS: {history: false},
    ACTION_ADD_TILE_GRID_STOP: {history: false},
    ACTION_ADD_TILE_MAP_START: {history: false},
    ACTION_ADD_TILE_MAP_PROGRESS: {history: false},
    ACTION_ADD_TILE_MAP_STOP: {history: false},
    ACTION_SET_TILE_MAP_START: {history: false},
    ACTION_SET_TILE_MAP_PROGRESS: {history: false},
    ACTION_SET_TILE_MAP_STOP: {history: false},
    ACTION_SET_AREA_TILE_MAP_START: {history: false},
    ACTION_SET_AREA_TILE_MAP_PROGRESS: {history: false},
    ACTION_SET_AREA_TILE_MAP_STOP: {history: false},
    ACTION_DELETE_TILE_MAP_START: {history: false},
    ACTION_DELETE_TILE_MAP_PROGRESS: {history: false},
    ACTION_DELETE_TILE_MAP_STOP: {history: false},
    DRAW_EDIT_TILE_MAP_START: {history: false},
    DRAW_EDIT_TILE_MAP_PROGRESS: {history: false},
    DRAW_EDIT_TILE_MAP_STOP: {history: false},
    DRAW_DELETE_TILE_MAP_START: {history: false},
    DRAW_DELETE_TILE_MAP_PROGRESS: {history: false},
    DRAW_DELETE_TILE_MAP_STOP: {history: false},
    DRAW_EDIT_AREA_TILE_MAP_START: {history: false},
    DRAW_EDIT_AREA_TILE_MAP_PROGRESS: {history: false},
    DRAW_EDIT_AREA_TILE_MAP_STOP: {history: false},
    ACTION_ADD_EMPTY_UNIT_START: {history: false},
    ACTION_ADD_EMPTY_UNIT_PROGRESS: {history: false},
    ACTION_ADD_EMPTY_UNIT_STOP: {history: false},
    ACTION_CLOSE_EDIT_ANIMATION_START: {history: false},
    ACTION_CLOSE_EDIT_ANIMATION_PROGRESS: {history: false},
    ACTION_CLOSE_EDIT_ANIMATION_STOP: {history: false},
    ACTION_ADD_WINDOW_START: {history: false},
    ACTION_ADD_WINDOW_PROGRESS: {history: false},
    ACTION_ADD_WINDOW_STOP: {history: false},
    ACTION_CLOSE_WINDOW_START: {history: false},
    ACTION_CLOSE_WINDOW_PROGRESS: {history: false},
    ACTION_CLOSE_WINDOW_STOP: {history: false},
    ACTION_EDIT_ANIMATION_START_RECORD_START: {history: false},
    ACTION_EDIT_ANIMATION_START_RECORD_PROGRESS: {history: false},
    ACTION_EDIT_ANIMATION_START_RECORD_STOP: {history: false},
    ACTION_EDIT_ANIMATION_STOP_RECORD_START: {history: false},
    ACTION_EDIT_ANIMATION_STOP_RECORD_PROGRESS: {history: false},
    ACTION_EDIT_ANIMATION_STOP_RECORD_STOP: {history: false},
    ACTION_SELECT_ANIMATION_KEYFRAME_START: {history: false},
    ACTION_SELECT_ANIMATION_KEYFRAME_PROGRESS: {history: false},
    ACTION_SELECT_ANIMATION_KEYFRAME_STOP: {history: false},
    ACTION_COMPILE_ALL_SCRIPT_START: {history: false},
    ACTION_COMPILE_ALL_SCRIPT_PROGRESS: {history: false},
    ACTION_COMPILE_ALL_SCRIPT_STOP: {history: false},
}

export default AppState