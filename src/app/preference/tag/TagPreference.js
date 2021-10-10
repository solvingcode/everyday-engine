import TagPreferenceData from '../../project/data/TagPreferenceData.js'

export default class TagPreference extends TagPreferenceData {

    init() {
    }

    /**
     * @return {Tag}
     */
    getSelected(){
        return this.getTags().find(tag => tag.isSelected())
    }

}