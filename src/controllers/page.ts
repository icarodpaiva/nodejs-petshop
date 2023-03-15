import type { RequestHandler } from 'express'
import { createMenuObject } from '../helpers/createMenuObject'

export const home: RequestHandler = (req, res) => {
  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
  })
}

export const dogs: RequestHandler = (req, res) => {
  res.render('pages/page', {
    menu: createMenuObject('dogs'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
  })
}

export const cats: RequestHandler = (req, res) => {
  res.render('pages/page', {
    menu: createMenuObject('cats'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
  })
}

export const fishes: RequestHandler = (req, res) => {
  res.render('pages/page', {
    menu: createMenuObject('fishes'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
  })
}
