type MenuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes'

export const createMenuObject = (activeMenu: MenuOptions) => {
  const menuObject = {
    all: false,
    dogs: false,
    cats: false,
    fishes: false,
  }

  if (activeMenu) {
    menuObject[activeMenu] = true
  }

  return menuObject
}
