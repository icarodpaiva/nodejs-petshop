import type { RequestHandler } from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/pet'

export const home: RequestHandler = (req, res) => {
  const list = Pet.getAll()

  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
    list,
  })
}

export const dogs: RequestHandler = (req, res) => {
  const list = Pet.getByType('dog')

  res.render('pages/page', {
    menu: createMenuObject('dogs'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
    list,
  })
}

export const cats: RequestHandler = (req, res) => {
  const list = Pet.getByType('cat')

  res.render('pages/page', {
    menu: createMenuObject('cats'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
    list,
  })
}

export const fishes: RequestHandler = (req, res) => {
  const list = Pet.getByType('fish')

  res.render('pages/page', {
    menu: createMenuObject('fishes'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
    list,
  })
}
