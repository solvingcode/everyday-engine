import LayerGroupData from '../../project/data/LayerGroupData.js'
import Layout from '../../layout/Layout.js'

export default class LayerGroup extends LayerGroupData{

    /**
     * @type {boolean}
     */
    selected

    /**
     * @return {boolean}
     */
    isSelected(){
        return this.selected
    }

    /**
     * @param {boolean} selected
     */
    setSelected(selected){
        this.selected = selected
    }

    unselect(){
        this.setSelected(false)
    }

    select(){
        this.setSelected(true)
    }

    /**
     * @return {*[]}
     */
    generateFields(){
        return [
            {
                bind: 'name',
                label: 'Name',
                type: Layout.form.TEXT
            },
            {
                bind: 'rank',
                label: 'Rank',
                type: Layout.form.NUMBER
            }
        ]
    }

}