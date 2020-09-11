define(function (require) {

    const MenuItem = require('../../MenuItem.js')

    class SelectorMenuItem extends MenuItem {
        constructor() {
            super({
                name: 'Select'
            })
        }
        run() {
            this.setDrawState('SELECT')
        }
        isSelected(){
            return this.hasDrawState('SELECT')
        }
    }

    return SelectorMenuItem

})