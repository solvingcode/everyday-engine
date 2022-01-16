import GameInputData from '../../project/data/GameInputData.js'

export default class GameInput extends GameInputData{

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

}

export const GAME_INPUTS = {
    RIGHT: 'right',
    LEFT: 'left',
    UP: 'up',
    DOWN: 'down',
    JUMP: 'jump',
    ATTACK: 'attack'
}