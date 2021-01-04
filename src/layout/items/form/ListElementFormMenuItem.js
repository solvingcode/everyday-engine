define(function (require) {

    const MenuItem = require('../../MenuItem.js')
    const Layout = require('../../Layout.js')

    /**
     * @class {ListElementFormMenuItem}
     * @property {{bind: Object}} data
     */
    class ListElementFormMenuItem extends MenuItem {
        constructor(parent, data) {
            super({
                name: '',
                stateCode: parent.stateCode,
                type: Layout.type.LIST_ELEMENT,
                zone: parent.zone
            })
            this.parent = parent
            this.data = data
        }

        /**
         * @override
         */
        isSelected() {
            return this.getDataBind().isSelected()
        }
        
        /**
         * @override
         */
        isValid() {
            return super.isValid() && this.parent.getFormObject().includes(this.getDataBind())
        }

        /**
         * @return {Object}
         */
        getDataBind(){
            return this.data.bind
        }
    }

    return ListElementFormMenuItem

})