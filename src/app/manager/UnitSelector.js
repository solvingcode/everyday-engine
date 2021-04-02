import UnitHelper from '../unit/UnitHelper.js'
import GUIPendingComponent from '../component/internal/gui/GUIPendingComponent.js'

export default class UnitSelector {

    static instance

    /**
     * @param {World} world
     * @return {Unit[]}
     */
    getSelected(world) {
        return world.getUnitManager().getUnits().filter((unit) =>
            unit.isSelected() &&
            !unit.getComponent(GUIPendingComponent))
    }

    /**
     * @param {World} world
     * @return {Unit}
     */
    getFirstSelected(world) {
        const selectedUnits = this.getSelected(world)
        if (selectedUnits.length) {
            return selectedUnits[0]
        }
        return null
    }

    /**
     * Get the unit in a specific point (absolute position)
     * @param {World} world
     * @param {Vector} point
     */
    get(world, point) {
        const units = this.getAll(world, point)
        return units.length && units[units.length - 1]
    }

    /**
     * @param {World} world
     * @param {Vector} point
     * @return {Unit}
     */
    getFirstSelectable(world, point) {
        const units = this.getAll(world, point).filter(unit => !unit.getComponent(GUIPendingComponent))
        return units.length && units[units.length - 1]
    }

    /**
     * Get all units in a specific point (absolute position)
     * @param {World} world
     * @param {Vector} point
     */
    getAll(world, point) {
        return world.getUnitManager().getUnits().filter((unit) =>
            UnitHelper.isInside(unit, point)
        )
    }

    /**
     * Get all units inside a selected area
     * @param {World} world
     * @param {Vector} point
     * @param {Size} size
     * @return {Unit[]}
     */
    getInsideArea(world, point, size) {
        return world.getUnitManager().getUnits().filter((unit) =>
            UnitHelper.isInsideArea(unit, point, size)
        )
    }

    /**
     * Select all units inside the area of selection, and return selected units
     * @param {World} world
     * @param {Vector} point
     * @param {Size} size
     * @return {Unit[]}
     */
    select(world, point, size) {
        let selectedUnits = []
        if (!size || (!size.width && !size.height)) {
            const selectedUnit = this.getFirstSelectable(world, point)
            if (selectedUnit) {
                selectedUnits.push(selectedUnit)
            }
        } else {
            selectedUnits = this.getInsideArea(world, point, size)
        }
        return selectedUnits.map(selectedUnit => selectedUnit.select() && selectedUnit)
            .filter(unit => unit)
    }

    /**
     * @param {World} world
     */
    unselectAll(world) {
        world.getUnitManager().getUnits().map((unit) => unit.unselect())
    }

    /**
     * Unfocus all entities.
     * Do not unfocus unit in loading mode
     * @param {World} world
     */
    unfocusAll(world) {
        world.getUnitManager().getUnits().map((unit) => unit.unfocus())
    }

    /**
     * focus all entities in a given point.
     * Do not focus unit in loading mode
     * @param {World} world
     * @param {Vector} point
     */
    focus(world, point) {
        this.getAll(world, point).map((unit) => unit.focus())
    }

    /**
     * @return {UnitSelector}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}