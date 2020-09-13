define(function () {

    class MenuItemUI {
        constructor(item, index, parent) {
            this.element = item
            this.index = index
            this.parent = parent
        }
    }

    return MenuItemUI
})