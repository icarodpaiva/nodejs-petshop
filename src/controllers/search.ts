import type { RequestHandler } from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from '../models/pet'

export const search: RequestHandler = (req, res) => {
  const query = req.query.q as string | undefined

  if (!query) {
    res.redirect('/')
    return
  }

  const list = Pet.getByName(query)

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query,
  })
}
