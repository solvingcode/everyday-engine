import OptionActionsMenuItem from './OptionActionsMenuItem.js'
import SceneLoadMenuItem from '../scene/SceneLoadMenuItem.js'
import SceneUnLoadMenuItem from '../scene/SceneUnLoadMenuItem.js'
import Scene from '../../../scene/Scene.js'
import Unit from '../../../unit/Unit.js'
import OptionActionsTitleMenuItem from './OptionActionsTitleMenuItem.js'
import DeleteMenuItem from '../action/DeleteMenuItem.js'
import DuplicateMenuItem from '../action/DuplicateMenuItem.js'
import MoveUpMenuItem from '../action/MoveUpMenuItem.js'
import MoveDownMenuItem from '../action/MoveDownMenuItem.js'
import OptionActionsButtonMenuItem from './OptionActionsButtonMenuItem.js'
import UITopMenuItem from '../topmenu/menus/UITopMenuItem.js'
import VisibilityTopMenuItem from '../topmenu/menus/VisibilityTopMenuItem.js'
import AlignViewMenuItem from '../edit/AlignViewMenuItem.js'
import AlignParentMenuItem from '../edit/AlignParentMenuItem.js'

export default class OptionsMenuItem extends OptionActionsMenuItem {
    constructor(bindObject, position, size) {
        const options = []
        if(bindObject instanceof Scene){
            options.push(...[
                new SceneLoadMenuItem(bindObject),
                new SceneUnLoadMenuItem(bindObject)
            ])
        }
        if(bindObject instanceof Unit){
           options.push(...[
               new OptionActionsTitleMenuItem('Edit'),
               new DeleteMenuItem(),
               new DuplicateMenuItem(),
               new MoveUpMenuItem(),
               new MoveDownMenuItem(),

               new OptionActionsTitleMenuItem('Unit'),
               new OptionActionsButtonMenuItem('UI', UITopMenuItem, null, true),
               new OptionActionsButtonMenuItem('Visibility', VisibilityTopMenuItem, null, true),
               new AlignViewMenuItem(),
               new AlignParentMenuItem()
           ])
        }
        super(options, position, size)
    }
}