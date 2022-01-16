import {expect} from '@jest/globals'
import World from '../src/app/world/World.js'
import Menu from '../src/app/layout/Menu.js'
import FolderListMenuItem from '../src/app/layout/items/assets/folder/FolderListMenuItem.js'
import FolderTitleMenuItem from '../src/app/layout/items/assets/folder/FolderTitleMenuItem.js'
import Folder from '../src/app/asset/Folder.js'
import ActionRunner from '../src/app/runner/action/ActionRunner.js'

test('Update folder list menu item', function () {
    const assetsManager = World.get().getAssetsManager()
    const menu = Menu.get()
    const rootFolder = assetsManager.createRootFolder()
    menu.update()

    const folderMenuItem = menu.items.find(item => item.element instanceof FolderListMenuItem)
    expect(folderMenuItem).not.toBeNull()
    expect(folderMenuItem.element.items.length).toBe(1)

    const folderElementMenuItem = folderMenuItem.element.items[0]
    expect(folderElementMenuItem.items.length).toBe(2)
    expect(folderElementMenuItem.data.bind).toBe(rootFolder)

    const folderTitleMenuItem = folderElementMenuItem.items[0]
    const folderListMenuItem = folderElementMenuItem.items[1]
    expect(folderTitleMenuItem instanceof FolderTitleMenuItem).toBeTruthy()
    expect(folderListMenuItem instanceof FolderListMenuItem).toBeTruthy()
    expect(folderListMenuItem.items.length).toBe(0)
    expect(folderTitleMenuItem.data.folder).toBe(rootFolder)

    folderTitleMenuItem.run()
    ActionRunner.get().execute(null)
    expect(rootFolder.isSelected()).toBeTruthy()
})

test('Should detect if the folder list is updated', function () {
    const assetsManager = World.get().getAssetsManager()
    assetsManager.setFolders([new Folder('Root')])

    const menu = Menu.get()
    menu.update()

    assetsManager.setFolders([new Folder('Root')])
    menu.update()

    const rootFolder = assetsManager.getRootFolder()

    const folderMenuItem = menu.items.find(item => item.element instanceof FolderListMenuItem)
    expect(folderMenuItem).not.toBeNull()
    expect(folderMenuItem.element.items.length).toBe(1)

    const folderElementMenuItem = folderMenuItem.element.items[0]
    expect(folderElementMenuItem.items.length).toBe(2)
    expect(folderElementMenuItem.data.bind).toBe(rootFolder)

    const folderTitleMenuItem = folderElementMenuItem.items[0]
    const folderListMenuItem = folderElementMenuItem.items[1]
    expect(folderTitleMenuItem instanceof FolderTitleMenuItem).toBeTruthy()
    expect(folderListMenuItem instanceof FolderListMenuItem).toBeTruthy()
    expect(folderListMenuItem.items.length).toBe(0)
    expect(folderTitleMenuItem.data.folder).toBe(rootFolder)

    folderTitleMenuItem.run()
    ActionRunner.get().execute(null)
    expect(rootFolder.isSelected()).toBeTruthy()

})