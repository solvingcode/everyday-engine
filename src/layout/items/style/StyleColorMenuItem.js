define(function (require) {

    const MenuItem = require('../../MenuItem.js')

    class StyleColorMenuItem extends MenuItem {
        constructor(parent, color) {
            super({
                name: 'Color'
            })
            this.parent = parent
            this.color = color
            this.zone = parent.zone
            this.type = parent.type
        }
        run() {
            this.setActionState('STYLE_COLOR', 'START')
            this.setColorDataState(this.color)
        }
        isSelected() {
            return this.hasActionState('STYLE_COLOR')
        }
    }

    return StyleColorMenuItem

})